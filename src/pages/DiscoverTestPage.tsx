import { useEffect, useState } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import { ChattingBox } from '@/components/DiscoverTestPage/ChattingBox';
import { RightSidebar } from '@/components/DiscoverTestPage/RightSidebar';
import { SelectDiscoverModal } from '@/components/common/Modal/SelectDiscoverModal';

export const DiscoverTestPage = () => {
  const [activeSelectModal, setActiveSelectModal] = useState(false);
  const [categoryParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (categoryParams.get('category') === null) {
      setActiveSelectModal(true);
    }
  }, [categoryParams]);
  /* 

  useEffect(() => {
    console.log('일단 전부 가져와');
    // personaAPI.getDefaultChatting('health').then((res) => {
    console.log(res);
    setDiscoverChatting((prev) => ({ ...prev, health: res.payload }));
  }); //
    // 완료된 채팅 GET
    // .then((res) => setDiscoverChatting((prev) => ({res.payload})));
  }, []); */

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
          <ChattingBox />
          <RightSidebar />
        </StyledInnerContainer>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  min-width: max-content;
  height: 100vh;
  padding: 76px 64px 24px 64px;
  overflow: hidden;
`;

const StyledInnerContainer = styled.div`
  //width: fit-content;
  height: 100%;

  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: center;
  gap: 20px;
`;
