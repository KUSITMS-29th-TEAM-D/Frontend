import styled from 'styled-components';

import { CATEGORY_TYPE } from '@/constants/discover';

interface SummaryCardProps {
  category: keyof typeof CATEGORY_TYPE;
  title: string;
  description: string;
}

export const SummaryCard = ({ category, title, description }: SummaryCardProps) => {
  const Icon = CATEGORY_TYPE[category].icon;

  return (
    <StyledContainer>
      <StyledHeader>
        <Icon />
        <span>{CATEGORY_TYPE[category].title}</span>
      </StyledHeader>
      <StyledContent>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </StyledContent>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;

  border-radius: 8px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.13);
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    width: 16px;
    height: 16px;
    path {
      fill: ${({ theme }) => theme.color.primary400};
      stroke: ${({ theme }) => theme.color.primary400};
    }
  }

  span {
    ${({ theme }) => theme.font.desktop.label1m};
    color: ${({ theme }) => theme.color.primary400};
  }
`;

const StyledContent = styled.div`
  .title {
    ${({ theme }) => theme.font.desktop.label1m};
    color: ${({ theme }) => theme.color.gray800};
    margin-bottom: 4px;
  }

  .description {
    ${({ theme }) => theme.font.desktop.label2};
    color: ${({ theme }) => theme.color.gray500};
  }
`;
