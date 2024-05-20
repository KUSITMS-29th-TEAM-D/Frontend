import { useState } from 'react';

import styled, { css } from 'styled-components';

import { PlainButton } from '@/components/common/Button/PlainButton';
import { DefaultModal } from '@/components/common/Modal/DefaultModal';
import { CATEGORY_TYPE } from '@/constants/discover';

const CATEGORY_LIST = ['health', 'career', 'love', 'leisure'];

export const SelectDiscoverModal = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleStart = () => {
    // TODO: 탐색 시작하기 버튼 클릭 로직 구현
  };

  return (
    <DefaultModal>
      <StyledContentContainer>
        <div className="title">가장 끌리는 주제를 선택해주세요.</div>
        <div className="card-container">
          {CATEGORY_LIST.map((category) => {
            const Icon = CATEGORY_TYPE[category].icon;
            return (
              <StyledCard
                key={category}
                $active={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                <Icon />
                <span>{CATEGORY_TYPE[category].title}</span>
              </StyledCard>
            );
          })}
        </div>
        <PlainButton height="48px" onClick={handleStart}>
          탐색 시작하기
        </PlainButton>
      </StyledContentContainer>
    </DefaultModal>
  );
};

const StyledContentContainer = styled.div`
  height: 100%;
  padding: 8px 18px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .title {
    ${({ theme }) => theme.font.desktop.body1b};
    color: ${({ theme }) => theme.color.gray800};
  }

  .card-container {
    display: flex;
    gap: 35px;
  }
`;

const StyledCard = styled.button<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  background: yellow;
  width: 104px;
  height: 137px;

  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.color.gray200};
  background: ${({ theme }) => theme.color.white};

  svg {
    width: 40px;
    height: 40px;
  }

  span {
    ${({ theme }) => theme.font.desktop.label1m};
    color: ${({ theme }) => theme.color.gray400};
  }

  ${({ $active, theme }) =>
    $active
      ? css`
          border-color: ${theme.color.primary500};
          background: ${theme.color.primary500};

          svg path {
            fill: ${theme.color.white};
          }

          span {
            color: ${({ theme }) => theme.color.white};
          }
        `
      : css`
          &:hover {
            border-color: ${({ theme }) => theme.color.primary200};
            background: ${({ theme }) => theme.color.primary50};

            svg path {
              fill: ${({ theme }) => theme.color.primary700};
            }

            span {
              color: ${({ theme }) => theme.color.primary700};
            }
          }
        `}
`;
