import { useState } from 'react';

import styled from 'styled-components';

import TestImage from '@/assets/test2.png';
import { RecommendBrandView } from '@/components/ExperienceRecommendPage/RecommendBrandView';
import { RecommendUnderstandView } from '@/components/ExperienceRecommendPage/RecommendUnderstandView';
import { WholeBrandSection } from '@/components/ExperienceRecommendPage/WholeBrandSection';
import { WholeUnderstandSection } from '@/components/ExperienceRecommendPage/WholeUnderstandSection';
import Tabs from '@/components/common/Tab/Tab';
import { userService } from '@/services/UserService';
import { theme } from '@/styles';
import { ExperienceFilterCards } from '@/types/experience.type';

const FixedWidthContainer = styled.div`
  width: 1280px;
  margin: 0 auto;
`;

const BackgroundWrapper = styled.div<{ $backgroundColor: string }>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  padding: 20px 0;
  .highlight {
    color: ${({ theme }) => theme.color.primary600};
  }
`;

export const ExperienceRecommendTab = () => {
  const [selectedField, setSelectedField] = useState<string[]>(['text1', 'text2']);
  const [activeTab, setActiveTab] = useState<string>('tab1');

  const filters: ExperienceFilterCards[] = [
    { title: '분야', contents: Dummy2, selected: selectedField, setSelected: setSelectedField },
  ];

  const tabs = [
    {
      id: 'tab1',
      label: '전체',
      content: (
        <>
          <BackgroundWrapper $backgroundColor={theme.color.white}>
            <FixedWidthContainer>
              <WholeUnderstandSection
                title={
                  <div>
                    {userService.getUserNickname() !== '' && (
                      <span>
                        <span className="highlight">{userService.getUserNickname()}</span>님,{' '}
                      </span>
                    )}
                    아직 내가 누군지 잘 모르겠다면 <br />
                    이런 콘텐츠들은 어때요?
                  </div>
                }
                subTitle=""
                recommendItems={Dummy5}
                filters={filters}
                backgroundColor={''}
                setActiveTab={setActiveTab}
              />
            </FixedWidthContainer>
          </BackgroundWrapper>
          <BackgroundWrapper $backgroundColor={theme.color.gray100}>
            <FixedWidthContainer>
              <WholeBrandSection
                title={
                  <div>
                    {' '}
                    <span className="highlight">{userService.getUserNickname()}</span>님에게
                    <br />
                    이런 활동을 추천해요!
                  </div>
                }
                subTitle=""
                recommendItems={Dummy5}
                filters={filters}
                backgroundColor={''}
                setActiveTab={setActiveTab}
              />
            </FixedWidthContainer>
          </BackgroundWrapper>
        </>
      ),
    },
    {
      id: 'tab2',
      label: '자기이해',
      content: (
        <BackgroundWrapper $backgroundColor={theme.color.white}>
          <FixedWidthContainer>
            <RecommendUnderstandView
              title={
                <div>
                  아직 나를 잘 모르겠다고요? <br />
                  자기이해를 위한 교육을 추천해요.
                </div>
              }
              subTitle=""
              filters={filters}
              backgroundColor={''}
            />
          </FixedWidthContainer>
        </BackgroundWrapper>
      ),
    },
    {
      id: 'tab3',
      label: '브랜딩',
      content: (
        <BackgroundWrapper $backgroundColor={theme.color.white}>
          <FixedWidthContainer>
            <RecommendBrandView
              title={
                <div>
                  내가 누구인지 알겠다면, <br />난 앞으로 무엇을 해야할까요?
                </div>
              }
              subTitle=""
              filters={filters}
              backgroundColor={''}
            />
          </FixedWidthContainer>
        </BackgroundWrapper>
      ),
    },
  ];

  return (
    <div>
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
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
