import { useState } from 'react';

import styled from 'styled-components';

import { AmountBox } from '@/components/ExperienceRecommendPage/AmountBox';
import { Dropdown } from '@/components/common/Dropdown/Dropdown';
import { SectionContainer } from '@/styles';
import { ExperienceFilterCards, ExperienceRecommendCards } from '@/types/recommend.type';

import { RecommendUnderstand } from './RecommendUnderstand';

interface RecommendSectionTemplateProps {
  title: string | React.ReactNode;
  subTitle: string;
  backgroundColor: string;
  recommendItems: ExperienceRecommendCards[];
  filters: ExperienceFilterCards[];
}

export const RecommendUnderstandView = ({
  title,
  backgroundColor,
}: Omit<RecommendSectionTemplateProps, 'recommendItems'>) => {
  const [minAmount, setMinAmount] = useState(0);
  const [maxAmount, setMaxAmount] = useState(20000);
  const [selectedProgramForm, setSelectedProgramForm] = useState<string>('온·오프라인');

  const resetFilters = () => {
    setMinAmount(0);
    setMaxAmount(20000);
    setSelectedProgramForm('온·오프라인');
  };

  const handleApply = (min: number, max: number) => {
    setMinAmount(min);
    setMaxAmount(max);
  };

  const formatProgramForm = (form: string) => {
    switch (form) {
      case '온·오프라인':
        return '온오프라인';
      case '온라인':
        return '온라인';
      case '오프라인':
        return '오프라인';
      default:
        return 'null';
    }
  };

  return (
    <StyledContainer $backgroundColor={backgroundColor}>
      <StyledSectionContainer>
        <StyledTitle>
          <div className="user-info">{title}</div>
        </StyledTitle>
        <StyledFilterContainer>
          <DropdownContainer>
            <AmountBox onApply={handleApply} />
            <Dropdown
              placeholder=""
              contents={['온·오프라인', '온라인', '오프라인']}
              selected={selectedProgramForm}
              clickContentHandler={(newSelected: string) => {
                setSelectedProgramForm(newSelected);
              }}
              width="312px"
            />
          </DropdownContainer>
          <ButtonContainer>
            <button className="refresh-button" type="button" onClick={resetFilters}>
              초기화
            </button>
          </ButtonContainer>
        </StyledFilterContainer>

        <RecommendUnderstand
          minAmount={minAmount}
          maxAmount={maxAmount}
          selectedProgramForm={formatProgramForm(selectedProgramForm)}
        />
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

const DropdownContainer = styled.div`
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  display: flex;
`;
const ButtonContainer = styled.div`
  width: 50px;
  align-self: stretch;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  display: flex;
`;
