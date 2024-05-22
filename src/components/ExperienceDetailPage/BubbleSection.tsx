import styled from 'styled-components';

import { moveDown, moveLeft, moveRight, moveUp } from '@/styles';

interface BubbleSectionProps {
  keywords: string[];
}

export const BubbleSection = ({ keywords }: BubbleSectionProps) => {
  return (
    <StyledContainer>
      <div className="title">
        이런 <span className="highlight">이미지 키워드</span>의 사람이 선호하는 경험이에요.
      </div>
      <StyledBubbleContainer>
        {keywords.map((keyword, index) => (
          <StyledBubble
            key={keyword}
            className={`b${index}`}
            $weight={1 - ((1 - 0.48) / (keywords.length - 1)) * index}
          >
            <span>{keyword}</span>
          </StyledBubble>
        ))}
      </StyledBubbleContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.section`
  width: 100%;

  .title {
    ${({ theme }) => theme.font.desktop.title1};
    color: ${({ theme }) => theme.color.gray700};
    margin-bottom: 24px;

    .highlight {
      color: ${({ theme }) => theme.color.primary500};
    }
  }
`;

const StyledBubbleContainer = styled.div`
  height: 481px;
  position: relative;

  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.color.primary100};
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 59.5%, #e1d1ff 100%), #fff;
`;

const StyledBubble = styled.div<{ $weight: number }>`
  width: ${({ $weight }) => $weight * 270}px;
  height: ${({ $weight }) => $weight * 270}px;

  display: flex;
  justify-content: center;
  align-items: center;
  will-change: transform;

  text-align: center;
  color: ${({ theme }) => theme.color.primary800};
  ${({ theme }) => theme.font.desktop.body1b};

  position: absolute;

  border-radius: 50%;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(255, 255, 255, 0) 76%,
    rgba(204, 179, 253, 0.4) 100%
  );

  box-shadow:
    -0.319px 51.263px 151.773px 0px rgba(48, 13, 115, 0.12),
    -0.04px 6.444px 21.116px 0px rgba(48, 13, 115, 0.06);

  &.b0 {
    bottom: 10%;
    left: 30%;

    animation:
      ${moveDown} 2000ms ease-in-out infinite,
      ${moveLeft} 3000ms ease-in-out infinite;
  }

  &.b1 {
    top: 12%;
    right: 32%;

    animation:
      ${moveDown} 3000ms ease-in-out infinite,
      ${moveRight} 2000ms ease-in-out infinite;
  }

  &.b2 {
    bottom: 20%;
    right: 17%;

    animation:
      ${moveUp} 2500ms ease-in-out infinite,
      ${moveLeft} 3000ms ease-in-out infinite;
  }

  &.b3 {
    top: 20%;
    left: 20%;

    animation:
      ${moveUp} 2300ms ease-in-out infinite,
      ${moveLeft} 2700ms ease-in-out infinite;
  }

  &.b4 {
    top: 10%;
    right: 14%;

    animation:
      ${moveDown} 2500ms ease-in-out infinite,
      ${moveRight} 2300ms ease-in-out infinite;
  }

  &.b5 {
    top: 20%;
    left: 10%;

    animation:
      ${moveUp} 2600ms ease-in-out infinite,
      ${moveRight} 3000ms ease-in-out infinite;
  }

  &.b6 {
    bottom: 14%;
    left: 20%;

    animation:
      ${moveDown} 3000ms ease-in-out infinite,
      ${moveRight} 2800ms ease-in-out infinite;
  }
`;
