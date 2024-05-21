import { useEffect } from 'react';

import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { personaAPI } from '@/apis/personaAPI';
import { SummaryCard } from '@/components/DiscoverTestPage/SummaryCard';
import Scrollbar from '@/components/Scrollbar';
import { PlainButton } from '@/components/common/Button/PlainButton';
import { discoverSummaryState } from '@/recoil/discoverSummaryState';
import { userService } from '@/services/UserService';

export const RightSidebar = () => {
  const handleResultButton = () => {};
  const [summary, setSummary] = useRecoilState(discoverSummaryState);

  useEffect(() => {
    personaAPI.getDefaultSummary().then((res) => {
      console.log(res.payload);
      setSummary(res.payload);
    });
  }, []);

  return (
    <StyledContainer>
      <StyledSummaryContainer>
        <div className="title">{userService.getUserNickname()}님의 답변을 요약중이에요!</div>
        {summary &&
          Object.keys(summary).map(
            (key) =>
              summary[key].length > 0 && (
                <SummaryCard category={key} title="질문" descriptions={summary[key]} />
              )
          )}
        <SummaryCard
          category="health"
          title="질문 내용 질문 내용 질문 내용"
          descriptions={[
            '요약은 한두줄 정도된다는데 유저가 쓴 내용을 요약했대 요약은 한두줄 정도된다는데 유저가 쓴 내용을 요약했대 ',
          ]}
        />
        <SummaryCard
          category="health"
          title="질문 내용 질문 내용 질문 내용"
          descriptions={[
            '요약은 한두줄 정도된다는데 유저가 쓴 내용을 요약했대 요약은 한두줄 정도된다는데 유저가 쓴 내용을 요약했대 ',
          ]}
        />
        <SummaryCard
          category="health"
          title="질문 내용 질문 내용 질문 내용"
          descriptions={[
            '요약은 한두줄 정도된다는데 유저가 쓴 내용을 요약했대 요약은 한두줄 정도된다는데 유저가 쓴 내용을 요약했대 ',
          ]}
        />
        <SummaryCard
          category="health"
          title="질문 내용 질문 내용 질문 내용"
          descriptions={[
            '요약은 한두줄 정도된다는데 유저가 쓴 내용을 요약했대',
            '^^^^요약은 한두줄 정도된다는데 유저가 쓴 내용을 요약했대 ',
          ]}
        />
        <SummaryCard
          category="health"
          title="질문 내용 질문 내용 질문 내용"
          descriptions={[
            '요약은 한두줄 정도된다는데 유저가 쓴 내용을 요약했대 요약은 한두줄 정도된다는데 유저가 쓴 내용을 요약했대 ',
          ]}
        />
      </StyledSummaryContainer>
      <StyledButtonContainer>
        <p>
          채팅이 종료되기 전,
          <br />
          결과 보러가기를 누르면 정확한 결과를 볼 수 없어요.
        </p>
        <PlainButton onClick={handleResultButton} height="48px">
          결과 보러가기
        </PlainButton>
      </StyledButtonContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;

  width: 351px;
  height: 100%;
  overflow: hidden;

  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.color.gray150};
  background: ${({ theme }) => theme.color.white};
`;

const StyledSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 20px;
  padding-right: 4px;
  background: ${({ theme }) => theme.color.gray100};
  overflow-y: scroll;
  ${Scrollbar}

  flex: 1;

  .title {
    ${({ theme }) => theme.font.desktop.body2m};
    color: ${({ theme }) => theme.color.gray800};
    margin-bottom: 4px;
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 16px 20px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.13);

  p {
    ${({ theme }) => theme.font.desktop.label2};
    color: ${({ theme }) => theme.color.gray400};
    text-align: center;
    margin-bottom: 16px;
  }
`;
