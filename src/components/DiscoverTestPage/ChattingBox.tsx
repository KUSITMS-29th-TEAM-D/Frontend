import { useState } from 'react';

import styled from 'styled-components';

import { SpeechBox } from '@/components/DiscoverTestPage/SpeechBox';
import Scrollbar from '@/components/Scrollbar';
import { CategoryButton } from '@/components/common/Button/CategoryButton';
import { PlainButton } from '@/components/common/Button/PlainButton';
import { DefaultInput } from '@/components/common/Input/DefaultInput';
import { ChattingList, transformDataToMessages } from '@/utils/transformDataToMessages';

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
};

export const ChattingBox = () => {
  const [chatList, setChat] = useState<ChattingList[]>(transformDataToMessages(Dummy));

  return (
    <>
      <StyledContainer>
        <StyledHeader>
          <CategoryButton>건강</CategoryButton>
          <CategoryButton done>커리어</CategoryButton>
          <CategoryButton active>사랑</CategoryButton>
          <CategoryButton>여가</CategoryButton>
        </StyledHeader>
        <StyledChatting>
          {chatList.map((chat, index) => (
            <SpeechBox
              key={chat.text}
              isUser={chat.user === 'user'}
              isContinuous={index > 0 && chatList[index - 1].user === chat.user}
            >
              {chat.text}
            </SpeechBox>
          ))}
        </StyledChatting>
        <StyledInputField>
          <DefaultInput width="100%" placeholder="답변을 입력해주세요" />
          <PlainButton variant="primary2" width="102px" height="48px">
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

  width: 781px;
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
