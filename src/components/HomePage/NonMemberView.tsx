import { useEffect, useState } from 'react';

import { useTheme } from 'styled-components';

import { programAPI } from '@/apis/programAPI';
import { BrandingSection } from '@/components/HomePage/BrandingSection';
import { DiagnoseSection } from '@/components/HomePage/DiagnoseSection';
import { RecommendSectionTemplate } from '@/components/HomePage/RecommendSectionTemplate';
import { Dropdown } from '@/components/common/Dropdown/Dropdown';
import { IMAGE_KEYWORD_LIST, INTEREST_LIST } from '@/constants/onboarding';
import { RecommendProgramItem } from '@/types/program.type';

export const NonMemberView = () => {
  const [selectedInterest, setSelectedInterest] = useState<string[]>([]);
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [brandingPrograms, setBrandingPrograms] = useState<RecommendProgramItem[]>([]);
  const theme = useTheme();

  const getBrandingPrograms = () => {
    programAPI.getBranding(selectedInterest, selectedKeywords).then((response) => {
      setBrandingPrograms(response);
    });
  };

  useEffect(() => {
    getBrandingPrograms();
  }, [selectedInterest, selectedKeywords]);

  return (
    <>
      <BrandingSection />
      <DiagnoseSection />
      <RecommendSectionTemplate
        title="나의 브랜딩을 위해"
        subTitle="셀피스는 나를 더 잘 알기위한 프로그램을 추천해요."
        backgroundColor={theme.color.white}
        recommendItems={brandingPrograms}
        refreshHandler={() => {
          setSelectedInterest([]);
          setSelectedKeywords([]);
        }}
      >
        <>
          <Dropdown
            title="분야"
            placeholder="키워드 추가"
            contents={INTEREST_LIST}
            selected={selectedInterest}
            clickContentHandler={(newSelected: string) => {
              if (selectedInterest.includes(newSelected)) {
                setSelectedInterest(selectedInterest.filter((keyword) => keyword !== newSelected));
              } else {
                setSelectedInterest([...selectedInterest, newSelected]);
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
            selected={selectedKeywords}
            clickContentHandler={(newSelected: string) => {
              if (selectedKeywords.includes(newSelected)) {
                setSelectedKeywords(selectedKeywords.filter((keyword) => keyword !== newSelected));
              } else {
                setSelectedKeywords([...selectedKeywords, newSelected]);
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
