import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { SummaryCard } from '@/components/DiscoverTestPage/SummaryCard';
import Scrollbar from '@/components/Scrollbar';
import { PlainButton } from '@/components/common/Button/PlainButton';
import { NotFinishChatModal } from '@/components/common/Modal/NotFinishChatModal';
import { CATEGORY_TYPE } from '@/constants/discover';
import { loadingHandlerState } from '@/recoil/loadingHandlerState';
import { loadingState } from '@/recoil/loadingState';
import { userService } from '@/services/UserService';
import { DiscoverSummary } from '@/types/test.type';

interface RightSidebarProps {
  summaryValue: { [key: string]: DiscoverSummary[] };
  endCategory: string[];
  deleteSummary: () => void;
}

export const RightSidebar = ({ summaryValue, endCategory, deleteSummary }: RightSidebarProps) => {
  const [activeNotFinishModal, setActiveNotFinishModal] = useState(false);
  const [, setLoading] = useRecoilState(loadingState);
  const [loadingHandler, setLoadingHandler] = useRecoilState(loadingHandlerState);
  const navigate = useNavigate();

  const handleGoToResult = () => {
    setLoading({ show: true, speed: 50 });
    setLoadingHandler({
      ...loadingHandler,
      handleCompleted: () => {
        deleteSummary();
        Object.keys(CATEGORY_TYPE).forEach((category) => {
          window.sessionStorage.removeItem(`selpiece-discover-${category}`);
        });
        window.sessionStorage.removeItem('selpiece-discover-summary');
        navigate(`/test/discover/result`);
      },
    });
  };

  const handleResultButton = () => {
    if (endCategory.length < 4) {
      setActiveNotFinishModal(true);
    } else {
      handleGoToResult();
    }
  };

  return (
    <>
      {activeNotFinishModal && (
        <NotFinishChatModal
          onCancel={() => {
            setActiveNotFinishModal(false);
          }}
          onConfirm={() => {
            setActiveNotFinishModal(false);
            handleGoToResult();
          }}
          endCategory={endCategory}
        />
      )}
      <StyledContainer>
        <StyledSummaryContainer>
          <div className="title">{userService.getUserNickname()}님의 답변을 요약중이에요!</div>
          {Object.keys(summaryValue).map((category) =>
            summaryValue[category].map((summary) => (
              <SummaryCard
                key={summary.question}
                category={category}
                question={summary.question}
                answer={summary.answer}
              />
            ))
          )}
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
    </>
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
