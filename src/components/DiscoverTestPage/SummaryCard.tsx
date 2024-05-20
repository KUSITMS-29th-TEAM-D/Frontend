import styled from 'styled-components';

import { ReactComponent as CareerIcon } from '@/assets/icons/career.svg';
import { ReactComponent as HealthIcon } from '@/assets/icons/health.svg';
import { ReactComponent as LeisureIcon } from '@/assets/icons/leisure.svg';
import { ReactComponent as LoveIcon } from '@/assets/icons/love.svg';

const CARD_TYPE = {
  health: {
    title: '건강',
    icon: <HealthIcon />,
  },
  career: {
    title: '커리어',
    icon: <CareerIcon />,
  },
  love: {
    title: '사랑',
    icon: <LoveIcon />,
  },
  leisure: {
    title: '여가',
    icon: <LeisureIcon />,
  },
};

interface SummaryCardProps {
  type: keyof typeof CARD_TYPE;
  title: string;
  description: string;
}

export const SummaryCard = ({ type, title, description }: SummaryCardProps) => {
  return (
    <StyledContainer>
      <StyledHeader>
        {CARD_TYPE[type].icon}
        <span>{CARD_TYPE[type].title}</span>
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
