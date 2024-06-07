import { useEffect, useState } from 'react';

import { useTheme } from 'styled-components';

import { personaAPI } from '@/apis/personaAPI';
import { PieceSection } from '@/components/HomePage/PieceSection';
import { RecommendSectionTemplate } from '@/components/HomePage/RecommendSectionTemplate';
import { AmountFilterButton } from '@/components/common/Button/AmountFilterButton';
import { Dropdown } from '@/components/common/Dropdown/Dropdown';
import { IMAGE_KEYWORD_LIST, INTEREST_LIST } from '@/constants/onboarding';
import { PERSONA } from '@/constants/persona';
import { useGetBrandingPrograms } from '@/hooks/useGetBrandingPrograms';
import { useGetUnderstandingPrograms } from '@/hooks/useGetUnderstandingProgram';
import { userService } from '@/services/UserService';
import { DefineResult } from '@/types/test.type';

export const TesterMemberView = () => {
  const theme = useTheme();
  const [defineResult, setDefineResult] = useState<DefineResult | undefined>(undefined);
  const [selectedInterest, setSelectedInterest] = useState<string[]>([]);
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [selectedProgramForm, setSelectedProgramForm] = useState('온·오프라인');
  const [selectedAmount, setSelectedAmount] = useState<{ min: number; max: number }>({
    min: 0,
    max: 0,
  });

  const { data: brandingPrograms } = useGetBrandingPrograms(selectedInterest, selectedKeywords);
  const { data: understandingPrograms } = useGetUnderstandingPrograms(
    selectedAmount.min,
    selectedAmount.max,
    selectedProgramForm
  );

  useEffect(() => {
    personaAPI.getDefineMember().then((res) => {
      setDefineResult(res.payload);
    });
  }, []);

  const handleApply = (min: number, max: number) => {
    setSelectedAmount({ min, max });
  };

  return (
    <>
      <PieceSection defineInformation={defineResult} />
      <RecommendSectionTemplate
        title={
          defineResult && (
            <>
              <span className="highlight">
                {PERSONA[defineResult.name]} {userService.getUserNickname()}
              </span>
              님을 위해,
            </>
          )
        }
        subTitle="나를 브랜딩할 수 있는 경험을 추천해드릴게요."
        backgroundColor={theme.color.primary50}
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
      <RecommendSectionTemplate
        title="아직 나를 더 알아가고 싶다면?"
        subTitle="자기이해를 도와주는 프로그램을 추천해드릴게요."
        backgroundColor={theme.color.gray50}
        recommendItems={understandingPrograms}
        refreshHandler={() => {
          setSelectedProgramForm('온·오프라인');
          setSelectedAmount({ min: 0, max: 0 });
        }}
      >
        <>
          <AmountFilterButton
            minPrice={selectedAmount.min}
            maxPrice={selectedAmount.max}
            onApply={handleApply}
          />
          <Dropdown
            placeholder=""
            contents={['온·오프라인', '온라인', '오프라인']}
            selected={selectedProgramForm}
            clickContentHandler={(newSelected: string) => {
              setSelectedProgramForm(newSelected);
            }}
            width="312px"
          />
        </>
      </RecommendSectionTemplate>
    </>
  );
};
