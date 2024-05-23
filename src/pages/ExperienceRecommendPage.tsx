//import { useState } from 'react';

import { styled } from 'styled-components';

import AdvertiseCard from '@/components/ExperienceRecommendPage/AdevertieseCard';
//import { AmountBox } from '@/components/ExperienceRecommendPage/AmountBox';
import { ExperienceRecommendTab } from '@/components/ExperienceRecommendPage/ExperienceRecommendTab';
//import { Dropdowntest } from '@/components/ExperienceRecommendPage/testdropdown';
import { SectionContainer } from '@/styles';

export const ExperienceRecommendPage = () => {
  /*const [selected, setSelected] = useState<string[]>([]);
  const handleContentClick = (content: string) => {
    setSelected((prevSelected) =>
      prevSelected.includes(content)
        ? prevSelected.filter((item) => item !== content)
        : [...prevSelected, content]
    );
  };*/

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
      {/*
      <TestContainer>
        <AmountBox />
        <Dropdowntest
          title="온·오프라인"
          placeholder=" "
          contents={['온·오프라인', '온라인', '오프라인']}
          selected={selected}
          multiple
          clickContentHandler={handleContentClick}
          contentMaxHeight={200}
        />
  </TestContainer>*/}
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
/*
const TestContainer = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`;
*/
