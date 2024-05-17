import { useState } from 'react';

import { useTheme } from 'styled-components';

import TestImage from '@/assets/test1.png';
import { BrandingSection } from '@/components/HomePage/BrandingSection';
import { DiagnoseSection } from '@/components/HomePage/DiagnoseSection';
import { PieceSection } from '@/components/HomePage/PieceSection';
import { RecommendSectionTemplate } from '@/components/HomePage/RecommendSectionTemplate';
import { FilterItems } from '@/types/recommend.type';
import { UserInformation } from '@/types/user.type';

const Dummy: UserInformation = {
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

const Dummy2 = ['text1', 'text2', 'text3', 'text4'];

const Dummy3 = ['감성적인', '활동적인', '탐색적인', '현실적인'];

const Dummy4 = [
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

export const HomePage = () => {
  const isLoggedIn = true; // 로그인 여부를 확인하기 위한 임시 로직
  const [selectedField, setSelectedField] = useState<string[]>(['text1', 'text2']);
  const [selectedImage, setSelectedImage] = useState<string[]>([]);
  const theme = useTheme();

  const filters: FilterItems[] = [
    { title: '분야', contents: Dummy2, selected: selectedField, setSelected: setSelectedField },
    {
      title: '이미지 키워드',
      contents: Dummy3,
      selected: selectedImage,
      setSelected: setSelectedImage,
    },
  ];

  if (isLoggedIn)
    return (
      <div style={{ minWidth: '1280px' }}>
        <PieceSection userInformation={Dummy} />
        <RecommendSectionTemplate
          title={
            <>
              <span className="highlight">
                {Dummy.piece} {Dummy.name}
              </span>
              님을 위해,
            </>
          }
          subTitle="나를 브랜딩할 수 있는 경험을 추천해드릴게요."
          backgroundColor={theme.color.primary50}
          recommendItems={Dummy4}
          filters={filters}
        />
        <RecommendSectionTemplate
          title="아직 나를 더 알아가고 싶다면?"
          subTitle="자기이해를 도와주는 프로그램을 추천해드릴게요."
          backgroundColor={theme.color.gray50}
          recommendItems={Dummy4}
          filters={filters}
        />
      </div>
    );

  return (
    <div style={{ minWidth: '1280px' }}>
      <BrandingSection isLoggedIn={!false} />
      <DiagnoseSection />
      <RecommendSectionTemplate
        title="나의 브랜딩을 위해"
        subTitle="셀피스는 나를 더 잘 알기위한 프로그램을 추천해요."
        backgroundColor={theme.color.white}
        recommendItems={Dummy4}
        filters={filters}
      />
    </div>
  );
};
