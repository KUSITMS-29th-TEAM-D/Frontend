import styled from 'styled-components';

import { WholeBrandView } from '@/components/ExperienceRecommendPage/WholeBrandView';
import { SectionContainer } from '@/styles';
import { BrandFilterCards, ExperienceBrandCards } from '@/types/experience.type';

interface RecommendSectionTemplateProps {
  title: string | React.ReactNode;
  subTitle: string;
  backgroundColor: string;
  recommendItems: ExperienceBrandCards[];
  filters: BrandFilterCards[];
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export const WholeBrandSection = ({
  title,
  subTitle,
  backgroundColor,
  setActiveTab,
}: RecommendSectionTemplateProps) => {
  return (
    <StyledContainer $backgroundColor={backgroundColor}>
      <StyledSectionContainer>
        <StyledTitle>
          <div className="user-info">{title}</div>
          <div className="intro">{subTitle}</div>
          <ButtonContainer>
            <button
              type="button"
              onClick={() => {
                setActiveTab('tab3');
              }}
            >
              더보기
            </button>
          </ButtonContainer>
        </StyledTitle>

        <WholeBrandView />
      </StyledSectionContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div<{ $backgroundColor: string }>`
  background: ${({ $backgroundColor }) => $backgroundColor};
`;

const StyledSectionContainer = styled(SectionContainer)`
  padding: 80px 64px;
`;

const StyledTitle = styled.div`
  margin-bottom: 48px;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: flex-end;
  display: inline-flex;
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

const ButtonContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: flex-end;

  margin-bottom: 27px;

  .refresh-button {
    ${({ theme }) => theme.font.desktop.body1m};
    color: ${({ theme }) => theme.color.primary700};
  }
  button {
    color: ${({ theme }) => theme.color.gray700};
    ${({ theme }) => theme.font.desktop.body1m};
  }
`;
