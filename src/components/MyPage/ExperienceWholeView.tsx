import styled from 'styled-components';

import TestImage from '@/assets/test1.png';
import { ExperienceCard } from '@/components/MyPage/ExperienceCard';

export const ExperienceWholeView = () => {
  return (
    <StyledSectionContainer>
      <Container>
        {Dummy4.map((item) => (
          <ExperienceCard
            key={item.id}
            imageUrl={item.img}
            title={item.title}
            subtitle={item.subtitle}
            $variant={'type1'}
          />
        ))}
      </Container>
    </StyledSectionContainer>
  );
};

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
  justify-content: flex-start;
  gap: 16px;
`;

const Dummy4 = [
  {
    id: 1,
    img: TestImage,
    title: '신청완료',
    subtitle: '경험 타이틀 경험 타이틀경험 타이틀 경험 타이틀경험 타이틀',
    keywords: ['keyword1', 'keyword2'],
    hot: true,
  },
  {
    id: 2,
    img: TestImage,
    title: '신청완료',
    subtitle: '경험 타이틀 경험 타이틀경험 타이틀 경험 타이틀경험 타이틀',
    keywords: ['keyword1', 'keyword2'],
    hot: true,
  },
  {
    id: 3,
    img: TestImage,
    title: '신청완료',
    subtitle: '경험 타이틀 경험 타이틀경험 타이틀 경험 타이틀경험 타이틀',
    keywords: ['keyword1', 'keyword2'],
    hot: true,
  },
  {
    id: 4,
    img: TestImage,
    title: '신청완료',
    subtitle: '경험 타이틀 경험 타이틀경험 타이틀 경험 타이틀경험 타이틀',
    keywords: ['keyword1', 'keyword2'],
    hot: true,
  },
  {
    id: 5,
    img: TestImage,
    title: '신청완료',
    subtitle: '경험 타이틀 경험 타이틀경험 타이틀 경험 타이틀경험 타이틀',
    keywords: ['keyword1', 'keyword2'],
    hot: true,
  },
  {
    id: 6,
    img: TestImage,
    title: '신청완료',
    subtitle: '경험 타이틀 경험 타이틀경험 타이틀 경험 타이틀경험 타이틀',
    keywords: ['keyword1', 'keyword2'],
    hot: true,
  },
  {
    id: 7,
    img: TestImage,
    title: '신청완료',
    subtitle: '경험 타이틀 경험 타이틀경험 타이틀 경험 타이틀경험 타이틀',
    keywords: ['keyword1', 'keyword2'],
    hot: true,
  },
  {
    id: 8,
    img: TestImage,
    title: '신청완료',
    subtitle: '경험 타이틀 경험 타이틀경험 타이틀 경험 타이틀경험 타이틀',
    keywords: ['keyword1', 'keyword2'],
    hot: true,
  },
  {
    id: 9,
    img: TestImage,
    title: '신청완료',
    subtitle: '경험 타이틀 경험 타이틀경험 타이틀 경험 타이틀경험 타이틀',
    keywords: ['keyword1', 'keyword2'],
    hot: true,
  },
  {
    id: 10,
    img: TestImage,
    title: '신청완료',
    subtitle: '경험 타이틀 경험 타이틀경험 타이틀 경험 타이틀경험 타이틀',
    keywords: ['keyword1', 'keyword2'],
    hot: true,
  },
  {
    id: 11,
    img: TestImage,
    title: '신청완료',
    subtitle: '경험 타이틀 경험 타이틀경험 타이틀 경험 타이틀경험 타이틀',
    keywords: ['keyword1', 'keyword2'],
    hot: true,
  },

  {
    id: 12,
    img: TestImage,
    title: '신청완료',
    subtitle: '경험 타이틀 경험 타이틀경험 타이틀 경험 타이틀경험 타이틀',
    keywords: ['keyword1', 'keyword2'],
    hot: true,
  },
  {
    id: 13,
    img: TestImage,
    title: '신청완료',
    subtitle: '경험 타이틀 경험 타이틀경험 타이틀 경험 타이틀경험 타이틀',
    keywords: ['keyword1', 'keyword2'],
    hot: true,
  },
  {
    id: 14,
    img: TestImage,
    title: '신청완료',
    subtitle: '경험 타이틀 경험 타이틀경험 타이틀 경험 타이틀경험 타이틀',
    keywords: ['keyword1', 'keyword2'],
    hot: true,
  },
  {
    id: 15,
    img: TestImage,
    title: '신청완료',
    subtitle: '경험 타이틀 경험 타이틀경험 타이틀 경험 타이틀경험 타이틀',
    keywords: ['keyword1', 'keyword2'],
    hot: true,
  },
  {
    id: 16,
    img: TestImage,
    title: '신청완료',
    subtitle: '경험 타이틀 경험 타이틀경험 타이틀 경험 타이틀경험 타이틀',
    keywords: ['keyword1', 'keyword2'],
    hot: true,
  },
  {
    id: 17,
    img: TestImage,
    title: '신청완료',
    subtitle: '경험 타이틀 경험 타이틀경험 타이틀 경험 타이틀경험 타이틀',
    keywords: ['keyword1', 'keyword2'],
    hot: true,
  },
];
