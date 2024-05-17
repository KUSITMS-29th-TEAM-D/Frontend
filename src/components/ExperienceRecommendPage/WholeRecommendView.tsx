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

const Dummy4 = [
  {
    id: 1,
    img: TestImage,
    title: '셀피스 프로그램',
    subtitle: '프로그램이름이름이름',
    keywords: ['keyword1', 'keyword2'],
    hot: true,
  },
  {
    id: 2,
    img: TestImage,
    title: '셀피스 프로그램',
    subtitle: '프로그램이름이름이름',
    keywords: ['keyword1', 'keyword2'],
    hot: true,
  },
  {
    id: 3,
    img: TestImage,
    title: '셀피스 프로그램',
    subtitle: '프로그램이름이름이름',
    keywords: ['keyword1', 'keyword2'],
    hot: true,
  },
  {
    id: 4,
    img: TestImage,
    title: '셀피스 프로그램',
    subtitle: '프로그램이름이름이름',
    keywords: ['keyword1', 'keyword2'],
    hot: true,
  },
  {
    id: 5,
    img: TestImage,
    title: '셀피스 프로그램',
    subtitle: '프로그램이름이름이름',
    keywords: ['keyword1', 'keyword2'],
    hot: true,
  },
  {
    id: 6,
    img: TestImage,
    title: '셀피스 프로그램',
    subtitle: '프로그램이름이름이름',
    keywords: ['keyword1', 'keyword2'],
    hot: true,
  },
  {
    id: 7,
    img: TestImage,
    title: '셀피스 프로그램',
    subtitle: '프로그램이름이름이름',
    keywords: ['keyword1', 'keyword2'],
    hot: true,
  },
  {
    id: 8,
    img: TestImage,
    title: '셀피스 프로그램',
    subtitle: '프로그램이름이름이름',
    keywords: ['keyword1', 'keyword2'],
    hot: true,
  },
  {
    id: 9,
    img: TestImage,
    title: '셀피스 프로그램',
    subtitle: '프로그램이름이름이름',
    keywords: ['keyword1', 'keyword2'],
    hot: true,
  },
  {
    id: 10,
    img: TestImage,
    title: '셀피스 프로그램',
    subtitle: '프로그램이름이름이름',
    keywords: ['keyword1', 'keyword2'],
    hot: true,
  },
  {
    id: 11,
    img: TestImage,
    title: '셀피스 프로그램',
    subtitle: '프로그램이름이름이름',
    keywords: ['keyword1', 'keyword2'],
    hot: true,
  },

  {
    id: 12,
    img: TestImage,
    title: '셀피스 프로그램',
    subtitle: '프로그램이름이름이름',
    keywords: ['keyword1', 'keyword2'],
    hot: true,
  },
  {
    id: 13,
    img: TestImage,
    title: '셀피스 프로그램',
    subtitle: '프로그램이름이름이름',
    keywords: ['keyword1', 'keyword2'],
    hot: true,
  },
  {
    id: 14,
    img: TestImage,
    title: '셀피스 프로그램',
    subtitle: '프로그램이름이름이름',
    keywords: ['keyword1', 'keyword2'],
    hot: true,
  },
  {
    id: 15,
    img: TestImage,
    title: '셀피스 프로그램',
    subtitle: '프로그램이름이름이름',
    keywords: ['keyword1', 'keyword2'],
    hot: true,
  },
  {
    id: 16,
    img: TestImage,
    title: '셀피스 프로그램',
    subtitle: '프로그램이름이름이름',
    keywords: ['keyword1', 'keyword2'],
    hot: true,
  },
  {
    id: 17,
    img: TestImage,
    title: '셀피스 프로그램',
    subtitle: '프로그램이름이름이름',
    keywords: ['keyword1', 'keyword2'],
    hot: true,
  },
  {
    id: 18,
    img: TestImage,
    title: '셀피스 프로그램',
    subtitle: '프로그램이름이름이름',
    keywords: ['keyword1', 'keyword2'],
    hot: true,
  },
];

export const WholeRecommendView = () => {
  /*const chunks = [];
  for (let i = 0; i < Dummy4.length; i += 3) {
    chunks.push(Dummy4.slice(i, i + 3));
  }

  return (
    <StyledSectionContainer>
      <OuterContainer></OuterContainer>
      <Container>
        {chunks.map((chunk, index) => (
          <div key={index} style={{ display: 'flex', marginBottom: '20px', width: '100%' }}>
            {chunk.map((item) => (
              <ExperienceCard
                key={item.id}
                imageUrl={item.img}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </div>
        ))}
      </Container>
    </StyledSectionContainer>
  );*/
  return (
    <StyledSectionContainer>
      <Container>
        {Dummy4.map((item) => (
          <ExperienceCard
            key={item.id}
            imageUrl={item.img}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </Container>
    </StyledSectionContainer>
  );
};
