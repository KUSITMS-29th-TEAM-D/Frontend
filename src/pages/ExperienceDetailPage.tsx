import { styled } from 'styled-components';

import { BubbleSection } from '@/components/ExperienceDetailPage/BubbleSection';
import { DetailSection } from '@/components/ExperienceDetailPage/DetailSection';
import { ImageSection } from '@/components/ExperienceDetailPage/ImageSection';

export const ExperienceDetailPage = () => {
  return (
    <StyledContainer>
      <DetailSection />
      <BubbleSection />
      <ImageSection />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 64px 56px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 72px;
  display: inline-flex;
  padding-top: 142px;
`;
