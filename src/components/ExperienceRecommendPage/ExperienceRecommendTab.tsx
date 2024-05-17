import { useState } from 'react';

import styled from 'styled-components';

import TestImage from '@/assets/test2.png';
import { RecommendSectionTemplate2 } from '@/components/ExperienceRecommendPage/RecommendSectionTemplate2';
import { RecommendSectionTemplate3 } from '@/components/ExperienceRecommendPage/RecommendSectionTemplate3';
import Tabs from '@/components/common/Tab/Tab';
import { theme } from '@/styles';
import { FilterItems } from '@/types/recommend2.type';

const FixedWidthContainer = styled.div`
  width: 1280px;
  margin: 0 auto;
`;

export const ExperienceRecommendTab = () => {
  const [selectedField, setSelectedField] = useState<string[]>(['text1', 'text2']);
  const filters: FilterItems[] = [
    { title: '분야', contents: Dummy2, selected: selectedField, setSelected: setSelectedField },
  ];

  const tabs = [
    {
      label: '전체',
      content: (
        <>
          <RecommendSectionTemplate3
            title={
              <div>
                내가 누구인지 알겠다면, <br />난 앞으로 무엇을 해야할까요?
              </div>
            }
            subTitle=""
            backgroundColor={theme.color.white}
            recommendItems={Dummy5}
            filters={filters}
          />
          <RecommendSectionTemplate3
            title={
              <div>
                내가 누구인지 알겠다면, <br />난 앞으로 무엇을 해야할까요?
              </div>
            }
            subTitle=""
            backgroundColor={theme.color.gray100}
            recommendItems={Dummy5}
            filters={filters}
          />
        </>
      ),
    },
    {
      label: '자기이해',
      content: (
        <RecommendSectionTemplate2
          title={
            <div>
              내가 누구인지 알겠다면, <br />난 앞으로 무엇을 해야할까요?
            </div>
          }
          subTitle=""
          backgroundColor={theme.color.white}
          recommendItems={Dummy6}
          filters={filters}
        />
      ),
    },
    {
      label: '브랜딩',
      content: (
        <RecommendSectionTemplate2
          title={
            <div>
              내가 누구인지 알겠다면, <br />난 앞으로 무엇을 해야할까요?
            </div>
          }
          subTitle=""
          backgroundColor={theme.color.white}
          recommendItems={Dummy6}
          filters={filters}
        />
      ),
    },
  ];

  return (
    <FixedWidthContainer>
      <Tabs tabs={tabs} />
    </FixedWidthContainer>
  );
};

export default ExperienceRecommendTab;

const Dummy2 = ['1', '2', '3', '4'];

const Dummy5 = [
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

const Dummy6 = [
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
