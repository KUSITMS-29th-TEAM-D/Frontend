import styled from 'styled-components';

import { CardCarousel } from '@/components/HomePage/CardCarousel';
import { PreviewCard } from '@/components/common/Card/PreviewCard';
import { SectionContainer } from '@/styles';
import { RecommendItems } from '@/types/recommend.type';

interface RecommendSectionTemplateProps {
  title: string | React.ReactNode;
  subTitle: string;
  backgroundColor: string;
  recommendItems: RecommendItems[];
  refreshHandler?: () => void;
  children?: React.ReactNode;
}

export const RecommendSectionTemplate = ({
  title,
  subTitle,
  backgroundColor,
  recommendItems,
  refreshHandler,
  children,
}: RecommendSectionTemplateProps) => {
  return (
    <StyledContainer $backgroundColor={backgroundColor}>
      <StyledSectionContainer>
        <StyledTitle>
          <div className="title">{title}</div>
          <div className="subtitle">{subTitle}</div>
        </StyledTitle>
        {children && (
          <StyledFilterContainer>
            <StyledChildrenContainer>{children}</StyledChildrenContainer>
            <button className="refresh-button" type="button" onClick={refreshHandler}>
              새로고침
            </button>
          </StyledFilterContainer>
        )}
        <CardCarousel>
          {recommendItems.map((item) => (
            <PreviewCard
              key={item.id}
              imageUrl={item.img}
              title={item.title}
              keywords={item.keywords}
              hot={item.hot}
              path={item.path}
            />
          ))}
        </CardCarousel>
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

  .title {
    margin-bottom: 4px;

    ${({ theme }) => theme.font.desktop.h2};
    color: ${({ theme }) => theme.color.gray800};

    .highlight {
      color: ${({ theme }) => theme.color.primary600};
    }
  }

  .subtitle {
    ${({ theme }) => theme.font.desktop.body1m};
    color: ${({ theme }) => theme.color.gray700};
  }
`;

const StyledFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 32px;

  .refresh-button {
    ${({ theme }) => theme.font.desktop.body1m};
    color: ${({ theme }) => theme.color.primary700};
  }
`;

const StyledChildrenContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
