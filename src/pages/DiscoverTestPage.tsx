import { useEffect, useState } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import { personaAPI } from '@/apis/personaAPI';
import { ChattingBox } from '@/components/DiscoverTestPage/ChattingBox';
import { RightSidebar } from '@/components/DiscoverTestPage/RightSidebar';
import { SelectDiscoverModal } from '@/components/common/Modal/SelectDiscoverModal';
import { CATEGORY_TYPE } from '@/constants/discover';
import { useSummarySessionStorage } from '@/hooks/useSummarySessionStorage';

export const DiscoverTestPage = () => {
  const [categoryParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [activeSelectModal, setActiveSelectModal] = useState(false);
  const [endCategory, setEndCategory] = useState<string[]>([]);
  const navigate = useNavigate();

  const { summaryValue, resetSummary, updateSummary } = useSummarySessionStorage();

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

  return (
    <>
      {activeSelectModal && (
        <SelectDiscoverModal
          handleStart={(category: string) => {
            setActiveSelectModal(false);
            navigate(`/test/discover?category=${category}`);
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
          <RightSidebar summaryValue={summaryValue} endCategory={endCategory} />
        </StyledInnerContainer>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
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
