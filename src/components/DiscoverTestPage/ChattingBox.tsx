import { useEffect, useRef, useState } from 'react';

import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import { personaAPI } from '@/apis/personaAPI';
import { SpeechBox } from '@/components/DiscoverTestPage/SpeechBox';
import Scrollbar from '@/components/Scrollbar';
import { CategoryButton } from '@/components/common/Button/CategoryButton';
import { PlainButton } from '@/components/common/Button/PlainButton';
import { DefaultInput } from '@/components/common/Input/DefaultInput';
import { CATEGORY_TYPE } from '@/constants/discover';
import { useChatSessionStorage } from '@/hooks/useChatSessionStorage';
import { ChattingList, transformDataToMessages } from '@/utils/transformDataToMessages';

const NOTICE =
  '화면을 탭하거나 스페이스바를 눌러 대화를 진행할 수 있습니다.\n스토리 진행 중 화면을 위로 스크롤하면, 이전에 나눴던 대화를 읽어볼 수 있습니다.';

const initialValue = {
  questionCount: 0,
  chattingId: '',
  chattingList: [],
  summaryList: [],
};

interface ChattingBoxProps {
  endCategory: string[];
  setEndCategory: (endCategory: string[]) => void;
}

export const ChattingBox = ({ endCategory, setEndCategory }: ChattingBoxProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [input, setInput] = useState('');
  const [categoryParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const selectedCategory = categoryParams.get('category') ?? '';

  const {
    categoryValue,
    setQuestionCount,
    setChattingId,
    setChattingList,
    updateChattingList,
    updateSummaryList,
  } = useChatSessionStorage(selectedCategory, initialValue);

  const getHistory = async () => {
    try {
      const res = await personaAPI.getDefaultChatting(selectedCategory);
      const transformedMessages = transformDataToMessages(res.payload);
      setChattingList(transformedMessages);
      const messageCount = Object.keys(transformedMessages).length;
      setQuestionCount(messageCount);
      console.log(messageCount);
      return messageCount;
    } catch (error) {
      console.log(error);
      return 0; // Ensure the function always returns a number
    }
  };

  const postNewAnswer = async () => {
    try {
      setLoading(true);
      const response = await personaAPI.postAnswer(categoryValue.chattingId, input);
      updateChattingList((prev: ChattingList[]) => [
        ...prev,
        { type: 'reaction', text: response.payload.reaction, user: 'chatbot' },
      ]);
      updateSummaryList((prev) => [...prev, response.payload.reaction]);
      const newQuestionCount = categoryValue.questionCount + 1;
      setQuestionCount(newQuestionCount);

      if (newQuestionCount >= 3) {
        setEndCategory([...endCategory, selectedCategory]);
      }
    } catch (error) {
      window.alert('답변을 전송하는데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const getNewQuestion = async () => {
    console.log('getNewQuestion');
    if (selectedCategory !== '' && categoryValue.questionCount < 3) {
      try {
        setLoading(true);
        const res = await personaAPI.getQuestion(selectedCategory);
        console.log(res);
        setChattingId(`${res.payload.chatting_id}`);
        console.log(`${res.payload.chatting_id}`);
        updateChattingList((prev) => [
          ...prev,
          { type: 'question', text: res.payload.question, user: 'chatbot' },
        ]);
        console.log('getNewQuestion11111');
      } catch (error) {
        window.alert('채팅을 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  const handleAnswerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateChattingList((prev: ChattingList[]) => [
      ...prev,
      { type: 'answer', text: input, user: 'user' },
    ]);
    setInput('');
    postNewAnswer();
  };

  useEffect(() => {
    if (selectedCategory !== '') {
      getHistory().then((res) => {
        if (res !== undefined && res < 3) {
          getNewQuestion();
        }
      });
    }
  }, [selectedCategory]);

  useEffect(() => {
    console.log('새로운 질문 불러오기');
    if (
      selectedCategory !== '' &&
      categoryValue.questionCount < 3 &&
      categoryValue.questionCount > 0
    ) {
      getNewQuestion();
    }
  }, [selectedCategory, categoryValue.questionCount]);

  return (
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
            path={category}
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
        {loading && <StyledLoading>로딩 중</StyledLoading>}
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

const StyledLoading = styled.div`
  padding: 10px;
  border-radius: 0 8px 8px 8px;
  background: ${({ theme }) => theme.color.white};
`;
