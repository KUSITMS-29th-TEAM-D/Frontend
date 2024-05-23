import { useEffect, useState } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import { personaAPI } from '@/apis/personaAPI';
import { ChattingBox } from '@/components/DiscoverTestPage/ChattingBox';
import { RightSidebar } from '@/components/DiscoverTestPage/RightSidebar';
import { SelectDiscoverModal } from '@/components/common/Modal/SelectDiscoverModal';

export const DiscoverTestPage = () => {
  const [activeSelectModal, setActiveSelectModal] = useState(false);
  const [endCategory, setEndCategory] = useState<string[]>([]);
  const [categoryParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (categoryParams.get('category') === null) {
      setActiveSelectModal(true);
    }
  }, [categoryParams]);

  useEffect(() => {
    personaAPI.getChattingComplete().then((response) => {
      const trueKeys = Object.keys(response.payload)
        .filter((key) => response.payload[key] === true)
        .map((key) => key.replace('_complete', ''));

      setEndCategory(trueKeys);
    });
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
          <ChattingBox endCategory={endCategory} setEndCategory={setEndCategory} />
          <RightSidebar />
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
