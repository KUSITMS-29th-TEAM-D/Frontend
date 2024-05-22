import { useState } from 'react';

import styled from 'styled-components';

import { RecommendBrand } from '@/components/ExperienceRecommendPage/RecommendBrand';
import { Dropdown } from '@/components/common/Dropdown/Dropdown';
import { IMAGE_KEYWORD_LIST, INTEREST_LIST } from '@/constants/onboarding';
import { SectionContainer } from '@/styles';
import { ExperienceFilterCards, ExperienceRecommendCards } from '@/types/recommend.type';

interface RecommendSectionTemplateProps {
  title: string | React.ReactNode;
  subTitle: string;
  backgroundColor: string;
  recommendItems: ExperienceRecommendCards[];
  filters: ExperienceFilterCards[];
}

export const RecommendBrandView = ({
  title,
  backgroundColor,
  filters,
}: Omit<RecommendSectionTemplateProps, 'recommendItems'>) => {
  const [brandingInterest, setBrandingInterest] = useState<string[]>([]);
  const [brandingKeywords, setBrandingKeywords] = useState<string[]>([]);

  const resetFilters = () => {
    setBrandingInterest([]);
    setBrandingKeywords([]);
    filters.forEach((filter) => filter.setSelected([]));
  };
  return (
    <StyledContainer $backgroundColor={backgroundColor}>
      <StyledSectionContainer>
        <StyledTitle>
          <div className="user-info">{title}</div>
        </StyledTitle>
        <StyledFilterContainer>
          <DropdownContainer>
            <Dropdown
              title="분야"
              placeholder="키워드 추가"
              contents={INTEREST_LIST}
              selected={brandingInterest}
              clickContentHandler={(newSelected: string) => {
                if (brandingInterest.includes(newSelected)) {
                  setBrandingInterest(
                    brandingInterest.filter((keyword) => keyword !== newSelected)
                  );
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
                  setBrandingKeywords(
                    brandingKeywords.filter((keyword) => keyword !== newSelected)
                  );
                } else {
                  setBrandingKeywords([...brandingKeywords, newSelected]);
                }
              }}
              width="312px"
              contentMaxHeight="172px"
              multiple
            />
          </DropdownContainer>

          <ButtonContainer>
            <button className="refresh-button" type="button" onClick={resetFilters}>
              초기화
            </button>
          </ButtonContainer>
        </StyledFilterContainer>

        <RecommendBrand brandingInterest={brandingInterest} brandingKeywords={brandingKeywords} />
      </StyledSectionContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div<{ $backgroundColor: string }>`
  background: ${({ $backgroundColor }) => $backgroundColor};
`;

const StyledSectionContainer = styled(SectionContainer)`
  padding: 80px 64px;
  width: 100%;
`;

const StyledTitle = styled.div`
  margin-bottom: 48px;
  .user-info {
    margin-bottom: 10px;

    ${({ theme }) => theme.font.desktop.title1};
    color: ${({ theme }) => theme.color.gray800};

    .highlight {
      color: ${({ theme }) => theme.color.primary600};
    }
  }

  .intro {
    ${({ theme }) => theme.font.desktop.title2};
    color: ${({ theme }) => theme.color.gray700};
  }
`;

const StyledFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 27px;

  .refresh-button {
    ${({ theme }) => theme.font.desktop.body1m};
    color: ${({ theme }) => theme.color.primary700};
  }
`;

const ButtonContainer = styled.div`
  width: 50px;
  align-self: stretch;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  display: flex;
`;

const DropdownContainer = styled.div`
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  display: flex;
`;
