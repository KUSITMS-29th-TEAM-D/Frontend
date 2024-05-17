import styled from 'styled-components';

import TestImage from '@/assets/test2.png';
import { ExperienceCard } from '@/components/common/Card/ExperienceCard';

const StyledSectionContainer = styled.div`
  width: 100%;
  height: 100%;

  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
`;

type VariantType = 'type1' | 'type2';

interface DummyItem {
  id: number;
  img: string;
  title: string;
  subtitle: string;
  variant: VariantType;
}

const Dummy4: DummyItem[] = [
  {
    id: 1,
    img: TestImage,
    title: '외부링크 이름의 프로그램',
    subtitle: '경험 타이틀 경험 타이틀경험 타이틀 경험 타이틀경험 타이틀',
    variant: 'type2',
  },
  {
    id: 2,
    img: TestImage,
    title: '셀피스 프로그램',
    subtitle: '경험 타이틀 경험 타이틀경험 타이틀 경험 타이틀경험 타이틀',
    variant: 'type1',
  },
  {
    id: 3,
    img: TestImage,
    title: '셀피스 프로그램',
    subtitle: '경험 타이틀 경험 타이틀경험 타이틀 경험 타이틀경험 타이틀',
    variant: 'type1',
  },
  {
    id: 4,
    img: TestImage,
    title: '셀피스 프로그램',
    subtitle: '경험 타이틀 경험 타이틀경험 타이틀 경험 타이틀경험 타이틀',
    variant: 'type1',
  },
  {
    id: 5,
    img: TestImage,
    title: '셀피스 프로그램',
    subtitle: '경험 타이틀 경험 타이틀경험 타이틀 경험 타이틀경험 타이틀',
    variant: 'type1',
  },
  {
    id: 6,
    img: TestImage,
    title: '셀피스 프로그램',
    subtitle: '경험 타이틀 경험 타이틀경험 타이틀 경험 타이틀경험 타이틀',
    variant: 'type1',
  },
  {
    id: 7,
    img: TestImage,
    title: '셀피스 프로그램',
    subtitle: '경험 타이틀 경험 타이틀경험 타이틀 경험 타이틀경험 타이틀',
    variant: 'type1',
  },
  {
    id: 8,
    img: TestImage,
    title: '셀피스 프로그램',
    subtitle: '경험 타이틀 경험 타이틀경험 타이틀 경험 타이틀경험 타이틀',
    variant: 'type1',
  },
  {
    id: 9,
    img: TestImage,
    title: '셀피스 프로그램',
    subtitle: '경험 타이틀 경험 타이틀경험 타이틀 경험 타이틀경험 타이틀',
    variant: 'type1',
  },
];

export const WholeRecommendView2 = () => {
  return (
    <StyledSectionContainer>
      <Container>
        {Dummy4.map((item) => (
          <ExperienceCard
            key={item.id}
            imageUrl={item.img}
            title={item.title}
            subtitle={item.subtitle}
            variant={item.variant}
          />
        ))}
      </Container>
    </StyledSectionContainer>
  );
};
