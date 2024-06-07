import { useEffect, useRef, useState } from 'react';

import Lottie from 'lottie-react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { personaAPI } from '@/apis/personaAPI';
import loading from '@/assets/lottie/loading.json';
import { SpeechBox } from '@/components/DiscoverTestPage/SpeechBox';
import Scrollbar from '@/components/Scrollbar';
import { CategoryButton } from '@/components/common/Button/CategoryButton';
import { PlainButton } from '@/components/common/Button/PlainButton';
import { DefaultInput } from '@/components/common/Input/DefaultInput';
import { ResetChatModal } from '@/components/common/Modal/ResetChatModal';
import { CATEGORY_TYPE } from '@/constants/discover';
import { useChatSessionStorage } from '@/hooks/useChatSessionStorage';
import { DiscoverSummary } from '@/types/test.type';
import { ChattingList, transformDataToMessages } from '@/utils/transformDataToMessages';

const NOTICE =
  '화면을 탭하거나 스페이스바를 눌러 대화를 진행할 수 있습니다.\n스토리 진행 중 화면을 위로 스크롤하면, 이전에 나눴던 대화를 읽어볼 수 있습니다.';

interface ChattingBoxProps {
  selectedCategory: string;
  endCategory: string[];
  setEndCategory: (endCategory: string[]) => void;
  resetSummary: (category: string) => void;
  updateSummary: (
    category: string,
    updateFunction: (prevSummary: DiscoverSummary[]) => DiscoverSummary[]
  ) => void;
}

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loading,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export const ChattingBox = ({
  selectedCategory,
  endCategory,
  setEndCategory,
  resetSummary,
  updateSummary,
}: ChattingBoxProps) => {
  const [initialDataLoaded, setInitialDataLoaded] = useState(false);
  const [activeResetModal, setActiveResetModal] = useState(false);
  const [resetCategory, setResetCategory] = useState<string | null>(null); // 추가된 상태
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const chatEndRef = useRef<HTMLDivElement | null>(null); // 추가된 상태
  const navigate = useNavigate();

  const { categoryValue, setQuestionCount, setChattingId, setChattingList, updateChattingList } =
    useChatSessionStorage(selectedCategory);

  const scrollToBottom = () => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getNewQuestion = async () => {
    if (selectedCategory !== '' && categoryValue.questionCount < 3) {
      try {
        setLoading(true);
        const response = await personaAPI.getQuestion(selectedCategory);
        setChattingId(response.payload.chatting_id);

        const questionParts = response.payload.question.split('\n');
        updateChattingList((prev) => [
          ...prev,
          ...questionParts.map((part: string) => ({
            type: 'question',
            text: part,
            user: 'chatbot',
          })),
        ]);
      } catch (error) {
        window.alert('채팅을 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
        scrollToBottom();
      }
    }
  };

  const getHistory = async () => {
    try {
      const res = await personaAPI.getDefaultChatting(selectedCategory);
      const transformedMessages = transformDataToMessages(res.payload);
      setInitialDataLoaded(true);
      setChattingList(transformedMessages);

      const messageCount = Object.keys(res.payload).length;
      setQuestionCount(messageCount);
    } catch (error) {
      null;
    }
  };

  const postNewAnswer = async () => {
    try {
      setLoading(true);
      const response = await personaAPI.postAnswer(categoryValue.chattingId, input);

      const reactionParts = response.payload.reaction.split('\n');
      updateChattingList((prev: ChattingList[]) => [
        ...prev,
        ...reactionParts.map((part: string) => ({
          type: 'reaction',
          text: part,
          user: 'chatbot',
        })),
      ]);
      updateSummary(selectedCategory, (prev) => [
        ...prev,
        { question: response.payload.question, answer: response.payload.summary },
      ]);
      const newQuestionCount = categoryValue.questionCount + 1;
      setQuestionCount(newQuestionCount);

      if (newQuestionCount >= 3) {
        setEndCategory([...endCategory, selectedCategory]);
      }
    } catch (error) {
      window.alert('답변을 전송하는데 실패했습니다.');
    } finally {
      setLoading(false);
      scrollToBottom();
    }
  };

  const handleAnswerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      updateChattingList((prev: ChattingList[]) => [
        ...prev,
        { type: 'answer', text: input, user: 'user' },
      ]);
      postNewAnswer();
      setInput('');
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    }
  };

  useEffect(() => {
    // 처음 진입 시, 기본 대화 불러오기
    setInitialDataLoaded(false);
    if (selectedCategory !== '') {
      getHistory();
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (initialDataLoaded && selectedCategory !== '' && categoryValue.questionCount < 3) {
      getNewQuestion();
    }
  }, [categoryValue.questionCount, initialDataLoaded]);

  useEffect(() => {
    scrollToBottom();
  }, [categoryValue.chattingList]);

  return (
    <>
      {activeResetModal && resetCategory && (
        <ResetChatModal
          onClose={() => {
            setActiveResetModal(false);
            navigate(`/test/discover/start?category=${resetCategory}`);
            setResetCategory(null);
          }}
          onReset={() => {
            personaAPI.resetChatting(resetCategory).then(() => {
              setEndCategory(endCategory.filter((category) => category !== resetCategory));
              resetSummary(resetCategory);
              setQuestionCount(0);
              setChattingId('');
              setChattingList([]);
              setActiveResetModal(false);
              navigate(`/test/discover/start?category=${resetCategory}`);
            });
          }}
          category={resetCategory}
        />
      )}
      <StyledContainer
        tabIndex={0}
        ref={containerRef}
        onFocus={() => {
          inputRef.current && inputRef.current.focus();
        }}
      >
        <StyledHeader>
          {Object.keys(CATEGORY_TYPE).map((category) => (
            <CategoryButton
              key={category}
              active={selectedCategory === category}
              done={endCategory.includes(category)}
              onClick={() => {
                if (!endCategory.includes(category)) {
                  navigate(`/test/discover/start?category=${category}`);
                } else {
                  setResetCategory(category); // 리셋할 카테고리 설정
                  setActiveResetModal(true);
                }
              }}
              disabled={loading}
            >
              {CATEGORY_TYPE[category].title}
            </CategoryButton>
          ))}
        </StyledHeader>
        <StyledChatting>
          <StyledNotice>{NOTICE}</StyledNotice>
          {categoryValue.chattingList.map((chat, index) => (
            <SpeechBox
              key={chat.text}
              isUser={chat.user === 'user'}
              isContinuous={index > 0 && categoryValue.chattingList[index - 1].user === chat.user}
              isEnd={
                index + 1 < categoryValue.chattingList.length &&
                categoryValue.chattingList[index + 1].user !== chat.user
              }
            >
              {chat.text}
            </SpeechBox>
          ))}
          {loading && (
            <SpeechBox isContinuous={false} isEnd={true}>
              <LottieWrapper>
                <Lottie animationData={defaultOptions.animationData} />
              </LottieWrapper>
            </SpeechBox>
          )}
          <div ref={chatEndRef} /> {/* 스크롤 위치 조정을 위한 요소 */}
        </StyledChatting>
        <StyledInputField onSubmit={handleAnswerSubmit}>
          <DefaultInput
            value={input}
            onChange={(e) => setInput(e.target.value)}
            width="100%"
            placeholder={
              categoryValue.questionCount >= 3
                ? '3번의 질문을 모두 완료했습니다.'
                : '답변을 입력해주세요'
            }
            ref={inputRef}
            disabled={categoryValue.questionCount >= 3}
          />
          <PlainButton
            type="submit"
            variant="primary2"
            width="102px"
            height="48px"
            disabled={categoryValue.questionCount >= 3}
          >
            전송
          </PlainButton>
        </StyledInputField>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  flex-grow: 1;
  overflow: hidden;

  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.color.gray150};
  background: ${({ theme }) => theme.color.gray100};
`;

const StyledHeader = styled.div`
  padding: 16px 20px;

  background: ${({ theme }) => theme.color.gray50};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.13);

  display: flex;
  gap: 16px;
`;

const StyledChatting = styled.div`
  flex: 1;
  padding: 20px;
  padding-right: 4px;
  overflow-y: scroll;
  ${Scrollbar}
`;

const StyledInputField = styled.form`
  display: flex;
  gap: 16px;

  background: yellow;
  padding: 16px 20px;

  background: ${({ theme }) => theme.color.gray50};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.13);
`;

const StyledNotice = styled.div`
  padding: 12px 24px;
  text-align: center;

  border-radius: 8px;
  background: ${({ theme }) => theme.color.bgModal};
  margin-bottom: 24px;

  ${({ theme }) => theme.font.desktop.label2};
  color: ${({ theme }) => theme.color.white};
  white-space: pre-wrap;
`;

const LottieWrapper = styled.div`
  width: 40px;
`;
