import { useState } from 'react';

import { useTheme } from 'styled-components';

import TestImage from '@/assets/test1.png';
import { PieceSection } from '@/components/HomePage/PieceSection';
import { RecommendSectionTemplate } from '@/components/HomePage/RecommendSectionTemplate';
import { Dropdown } from '@/components/common/Dropdown/Dropdown';
import { IMAGE_KEYWORD_LIST, INTEREST_LIST } from '@/constants/onboarding';
import { UserInformation } from '@/types/user.type';

const Dummy1: UserInformation = {
  piece: '크리에이터',
  name: '민선',
  brand: 'creator',
  chips: [
    { content: '감성적인', weight: 1.0 },
    { content: '도전적인', weight: 0.9 },
    { content: '탐색적인', weight: 0.8 },
    { content: '활동적인', weight: 0.7 },
    { content: '열정적인', weight: 0.6 },
    { content: '현실적인', weight: 0.5 },
    { content: '관습적인', weight: 0.45 },
  ],
};

const Dummy = [
  {
    id: 1,
    img: TestImage,
    title:
      '감성있는 이탈리안 파스타 만들기 감성있는 이탈리안 파스타 만들기ㄴㅇㄹㄴㅇㄹㄴㄹㄴㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㅇ',
    keywords: ['소통하는', '감성있는', '평화로운'],
    hot: true,
    path: '',
  },
  {
    id: 2,
    img: TestImage,
    title:
      '감성있는 이탈리안 파스타 만들기 감성있는 이탈리안 파스타 만들기ㄴㅇㄹㄴㅇㄹㄴㄹㄴㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㅇ',
    keywords: ['소통하는', '감성있는', '평화로운'],
    hot: true,
    path: '',
  },
  {
    id: 3,
    img: TestImage,
    title:
      '감성있는 이탈리안 파스타 만들기 감성있는 이탈리안 파스타 만들기ㄴㅇㄹㄴㅇㄹㄴㄹㄴㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㅇ',
    keywords: ['소통하는', '감성있는', '평화로운'],
    hot: false,
    path: '',
  },
  {
    id: 4,
    img: TestImage,
    title:
      '감성있는 이탈리안 파스타 만들기 감성있는 이탈리안 파스타 만들기ㄴㅇㄹㄴㅇㄹㄴㄹㄴㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㅇ',
    keywords: ['소통하는', '감성있는', '평화로운'],
    hot: false,
    path: '',
  },
  {
    id: 5,
    img: TestImage,
    title:
      '감성있는 이탈리안 파스타 만들기 감성있는 이탈리안 파스타 만들기ㄴㅇㄹㄴㅇㄹㄴㄹㄴㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㅇ',
    keywords: ['소통하는', '감성있는', '평화로운'],
    hot: false,
    path: '',
  },
];

export const TesterMemberView = () => {
  const [brandingInterest, setBrandingInterest] = useState<string[]>([]);
  const [brandingKeywords, setBrandingKeywords] = useState<string[]>([]);
  const [understandInterest, setUnderstandInterest] = useState<string[]>([]);
  const [understandKeywords, setUnderstandKeywords] = useState<string[]>([]);
  const theme = useTheme();

  return (
    <>
      <PieceSection userInformation={Dummy1} />
      <RecommendSectionTemplate
        title={
          <>
            <span className="highlight">
              {Dummy1.piece} {Dummy1.name}
            </span>
            님을 위해,
          </>
        }
        subTitle="나를 브랜딩할 수 있는 경험을 추천해드릴게요."
        backgroundColor={theme.color.primary50}
        recommendItems={Dummy}
        refreshHandler={() => {
          setBrandingInterest([]);
          setBrandingKeywords([]);
        }}
      >
        <>
          <Dropdown
            title="분야"
            placeholder="키워드 추가"
            contents={INTEREST_LIST}
            selected={brandingInterest}
            clickContentHandler={(newSelected: string) => {
              if (brandingInterest.includes(newSelected)) {
                setBrandingInterest(brandingInterest.filter((keyword) => keyword !== newSelected));
              } else {
                setBrandingInterest([...brandingInterest, newSelected]);
              }
            }}
            width="312px"
            contentMaxHeight="172px"
            multiple
          />
          <Dropdown
            title="이미지 키워드"
            placeholder="키워드 추가"
            contents={IMAGE_KEYWORD_LIST}
            selected={brandingKeywords}
            clickContentHandler={(newSelected: string) => {
              if (brandingKeywords.includes(newSelected)) {
                setBrandingKeywords(brandingKeywords.filter((keyword) => keyword !== newSelected));
              } else {
                setBrandingKeywords([...brandingKeywords, newSelected]);
              }
            }}
            width="312px"
            contentMaxHeight="172px"
            multiple
          />
        </>
      </RecommendSectionTemplate>
      <RecommendSectionTemplate
        title="아직 나를 더 알아가고 싶다면?"
        subTitle="자기이해를 도와주는 프로그램을 추천해드릴게요."
        backgroundColor={theme.color.gray50}
        recommendItems={Dummy}
        refreshHandler={() => {
          setUnderstandInterest([]);
          setUnderstandKeywords([]);
        }}
      >
        <>
          <Dropdown
            title="분야"
            placeholder="키워드 추가"
            contents={INTEREST_LIST}
            selected={understandInterest}
            clickContentHandler={(newSelected: string) => {
              if (understandInterest.includes(newSelected)) {
                setUnderstandInterest(
                  understandInterest.filter((keyword) => keyword !== newSelected)
                );
              } else {
                setUnderstandInterest([...understandInterest, newSelected]);
              }
            }}
            width="312px"
            contentMaxHeight="172px"
            multiple
          />
          <Dropdown
            title="이미지 키워드"
            placeholder="키워드 추가"
            contents={IMAGE_KEYWORD_LIST}
            selected={understandKeywords}
            clickContentHandler={(newSelected: string) => {
              if (understandKeywords.includes(newSelected)) {
                setUnderstandKeywords(
                  understandKeywords.filter((keyword) => keyword !== newSelected)
                );
              } else {
                setUnderstandKeywords([...understandKeywords, newSelected]);
              }
            }}
            width="312px"
            contentMaxHeight="172px"
            multiple
          />
        </>
      </RecommendSectionTemplate>
    </>
  );
};
