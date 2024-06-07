import { useEffect, useState } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { personaAPI } from '@/apis/personaAPI';
import { ChattingBox } from '@/components/DiscoverTestPage/ChattingBox';
import { RightSidebar } from '@/components/DiscoverTestPage/RightSidebar';
import { SelectDiscoverModal } from '@/components/common/Modal/SelectDiscoverModal';
import { CATEGORY_TYPE } from '@/constants/discover';
import { useSummarySessionStorage } from '@/hooks/useSummarySessionStorage';
import { LoadingPage } from '@/pages/LoadingPage';
import { loadingState } from '@/recoil/loadingState';

export const DiscoverTestPage = () => {
  const [categoryParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [activeSelectModal, setActiveSelectModal] = useState(false);
  const [endCategory, setEndCategory] = useState<string[]>([]);
  const navigate = useNavigate();
  const [loading] = useRecoilState(loadingState);

  const { summaryValue, resetSummary, updateSummary, deleteSummary } = useSummarySessionStorage();

  useEffect(() => {
    const category = categoryParams.get('category');
    if (category === null) {
      setActiveSelectModal(true);
    } else if (Object.keys(CATEGORY_TYPE).includes(category)) {
      setSelectedCategory(category);
    } else {
      navigate('/test/discover');
    }
  }, [categoryParams, navigate]);

  useEffect(() => {
    let isMounted = true;

    personaAPI.getChattingComplete().then((response) => {
      if (isMounted) {
        const trueKeys = Object.keys(response.payload)
          .filter((key) => response.payload[key] === true)
          .map((key) => key.replace('_complete', ''));
        setEndCategory(trueKeys);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading.show) {
    return <LoadingPage />;
  }

  return (
    <>
      {activeSelectModal && (
        <SelectDiscoverModal
          handleStart={(category: string) => {
            setActiveSelectModal(false);
            navigate(`/test/discover/start?category=${category}`);
          }}
        />
      )}
      <StyledContainer>
        <StyledInnerContainer>
          <ChattingBox
            selectedCategory={selectedCategory}
            endCategory={endCategory}
            setEndCategory={setEndCategory}
            resetSummary={resetSummary}
            updateSummary={updateSummary}
          />
          <RightSidebar
            summaryValue={summaryValue}
            endCategory={endCategory}
            deleteSummary={deleteSummary}
          />
        </StyledInnerContainer>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  //height: var(--full-height);
  height: 100vh;
`;

const StyledInnerContainer = styled.div`
  width: 1280px;
  height: 100%;
  padding: 76px 64px 24px 64px;

  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: center;
  gap: 20px;
`;
