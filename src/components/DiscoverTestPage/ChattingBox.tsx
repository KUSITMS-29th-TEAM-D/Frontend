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
import { useGetChatting } from '@/hooks/useGetChatting';
/* import { ChattingList, transformDataToMessages } from '@/utils/transformDataToMessages';

const Dummy = {
  stage_one: {
    question: '사랑하는 사람과 함께 시간을 보낼 때 가장 행복한 순간은 언제인가요?',
    answer: '날씨 좋은 날에 산책하고 맛있는 거 먹는 게 가장 큰 행복이지.',
    reaction:
      '날씨 좋은 날에 산책하고 맛있는 음식을 먹는 게 가장 큰 행복이라고 느끼시네요! 그런 일상 속 작은 여유들이 정말 소중한 시간들이죠. 날씨도 좋고 바람도 선선히 불어오면 기분까지 좋아지잖아요.',
  },
  stage_two: {
    question: '사랑하는 사람과 함께하는 시간을 더욱 특별하게 만들기 위해 노력하고 있나요?',
    answer: '같이 있을 때는 상대방에게 집중하려고 노력하는 것 같아.',
    reaction:
      '상대방에게 집중하려고 노력하시는군요! 같이 있는 시간을 소중히 여기고 그 순간을 온전히 함께 하고 싶은 마음에서 그런 행동이 나오는 것 같네요. 이런 태도는 상대방에게 큰 호감으로 느껴질 수 있어요.',
  },
}; */

const NOTICE =
  '화면을 탭하거나 스페이스바를 눌러 대화를 진행할 수 있습니다.\n스토리 진행 중 화면을 위로 스크롤하면, 이전에 나눴던 대화를 읽어볼 수 있습니다.';

export const ChattingBox = () => {
  const [endCategory, setEndCategory] = useState<string[]>([]);
  const [categoryParams] = useSearchParams();
  const currentCategory = categoryParams.get('category') ?? '';
  const { chatList } = useGetChatting(currentCategory);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    personaAPI.getChattingComplete().then((res) => {
      const result = Object.keys(res)
        .filter((category) => res[category])
        .map((category) => CATEGORY_TYPE[category.replace('_complete', '')]?.title)
        .filter(Boolean);

      setEndCategory(result);
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        containerRef.current?.focus(); // 스페이스바 누를 때 컨테이너 포커스
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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
            active={category === currentCategory}
            done={endCategory.includes(category)}
            path={category}
          >
            {CATEGORY_TYPE[category].title}
          </CategoryButton>
        ))}
      </StyledHeader>
      <StyledChatting>
        <StyledNotice>{NOTICE}</StyledNotice>
        {chatList.map((chat, index) => (
          <SpeechBox
            key={chat.text}
            isUser={chat.user === 'user'}
            isContinuous={index > 0 && chatList[index - 1].user === chat.user}
            isEnd={index + 1 < chatList.length && chatList[index + 1].user !== chat.user}
          >
            {chat.text}
          </SpeechBox>
        ))}
      </StyledChatting>
      <StyledInputField>
        {/* <StyledInput tabIndex={1} ref={inputRef}>
          <input type="text" placeholder="답변을 입력해주세요" />
        </StyledInput> */}
        <DefaultInput width="100%" placeholder="답변을 입력해주세요" ref={inputRef} />
        <PlainButton variant="primary2" width="102px" height="48px">
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

const StyledInputField = styled.div`
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

  ${({ theme }) => theme.font.desktop.label2};
  color: ${({ theme }) => theme.color.white};
  white-space: pre-wrap;
`;
