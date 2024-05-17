import { styled } from 'styled-components';

import AdvertiseCard from '@/components/ExperienceRecommendPage/AdevertieseCard';
import { ExperienceRecommendTab } from '@/components/ExperienceRecommendPage/ExperienceRecommendTab';
import { SectionContainer } from '@/styles';

export const ExperienceRecommendPage = () => {
  return (
    <div>
      <StyledSectionContainer>
        <PageContainer>
          <CarouselContainer>
            <AdvertiseCard />
          </CarouselContainer>
        </PageContainer>
      </StyledSectionContainer>
      <ExperienceRecommendTab />
    </div>
  );
};

const StyledSectionContainer = styled(SectionContainer)`
  width: 100%;

  padding-top: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
`;

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const CarouselContainer = styled.div`
  width: 1224px;
  height: 531px;
  position: relative;
  border-radius: 24px;
  overflow: hidden;

  justify-content: center;
  align-items: center;
`;
