import styled from 'styled-components';

import { WholeRecommendView } from '@/components/ExperienceRecommendPage/WholeRecommendView';
import { Dropdown } from '@/components/common/Dropdown';
import { SectionContainer } from '@/styles';
import { FilterItems, RecommendItems } from '@/types/recommend2.type';

interface RecommendSectionTemplateProps {
  title: string | React.ReactNode;
  subTitle: string;
  backgroundColor: string;
  recommendItems: RecommendItems[];
  filters: FilterItems[];
}

export const RecommendSectionTemplate2 = ({
  title,
  subTitle,
  backgroundColor,

  filters,
}: RecommendSectionTemplateProps) => {
  return (
    <StyledContainer $backgroundColor={backgroundColor}>
      <StyledSectionContainer>
        <StyledTitle>
          <div className="user-info">{title}</div>
          <div className="intro">{subTitle}</div>
        </StyledTitle>
        <StyledFilterContainer>
          <StyledDropdownContainer>
            {filters.map((filter) => (
              <Dropdown
                key={filter.title}
                title={filter.title}
                contents={filter.contents}
                selectedContents={filter.selected}
                setSelectedContents={filter.setSelected}
              />
            ))}
          </StyledDropdownContainer>

          <button
            className="refresh-button"
            type="button"
            onClick={() => {
              filters.map((filter) => filter.setSelected([]));
            }}
          >
            초기화
          </button>
        </StyledFilterContainer>

        <WholeRecommendView />
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

  margin-bottom: 27px;

  .refresh-button {
    ${({ theme }) => theme.font.desktop.body1m};
    color: ${({ theme }) => theme.color.primary700};
  }
`;

const StyledDropdownContainer = styled.div`
  display: flex;
  gap: 12px;
`;
