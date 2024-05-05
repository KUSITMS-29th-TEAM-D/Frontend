import styled, { keyframes } from 'styled-components';

import { ReactComponent as ArrowIcon } from '@/assets/icons/arrowDown.svg';
import { Chip } from '@/components/common/Chip';
import { SectionContainer } from '@/styles';

const Dummy = {
  piece: '크리에이터',
  name: '민선',
  brand: 'creator',
  chips: [
    { content: '감성적인', weight: 1.0 },
    { content: '도전적인', weight: 0.9 },
    { content: '탐색적인', weight: 0.8 },
    { content: '활동적인', weight: 0.7 },
    { content: '열정적인', weight: 0.6 },
    { content: '현실적인', weight: 0.5 },
    { content: '관습적인', weight: 0.45 },
  ],
};

export const PieceSection = () => {
  return (
    <StyledContainer>
      <StyledSectionContainer>
        <StyledTitle>
          <div className="user-info">
            <span className="highlight">{Dummy.piece} 조각</span>을 가진{' '}
            <span className="highlight">{Dummy.name}</span>님,
          </div>
          <div className="intro">셀피스와 함께 나를 브랜딩해봐요.</div>
        </StyledTitle>
        <StyledCardContainer>
          <StyledCard src={`/src/assets/cards/${Dummy.brand}.svg`} alt="card" />
          {Dummy.chips.map((chip, index) => (
            <StyledBubble key={chip.content} className={`b${index}`} $weight={chip.weight}>
              <span>{chip.content}</span>
            </StyledBubble>
          ))}
        </StyledCardContainer>
        <StyledContents>
          <StyledChipsContainer>
            {Dummy.chips.map((chip) => (
              <Chip key={chip.content} primary>
                {chip.content}
              </Chip>
            ))}
          </StyledChipsContainer>
          <div>
            키워드를 가진 <span className="highlight">{Dummy.name}</span>님께
            <br />
            이런 경험을 추천드리고 싶어요.
          </div>
          <ArrowIcon width="48px" />
        </StyledContents>
      </StyledSectionContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.section`
  background: ${({ theme }) => `linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 27%,
      rgba(232, 221, 254, 0.45) 65%,
      ${theme.color.primary200} 100%
    ),
    ${theme.color.white}`};

  .highlight {
    color: ${({ theme }) => theme.color.primary600};
  }
`;

const StyledSectionContainer = styled(SectionContainer)`
  padding: 64px;
  padding-top: 140px;

  text-align: center;
`;

const StyledTitle = styled.div`
  .user-info {
    margin-bottom: 16px;

    ${({ theme }) => theme.font.desktop.h1};
    color: ${({ theme }) => theme.color.black};
  }

  .intro {
    ${({ theme }) => theme.font.desktop.title1};
    color: ${({ theme }) => theme.color.gray600};
  }
`;

const StyledCardContainer = styled.div`
  width: 100%;

  position: relative;
  z-index: 0;
`;

const StyledCard = styled.img`
  height: 440px;
  margin: 56px 0;
`;

const moveDown = keyframes`50% {
    transform: translateY(-20px);
  }`;

const moveUp = keyframes`50% {
    transform: translateY(20px);
  }`;

const moveRight = keyframes`50% {
    transform: translateX(20px);
  }`;

const moveLeft = keyframes`50% {
    transform: translateX(-20px);
  }`;

const StyledBubble = styled.div<{ $weight: number }>`
  width: ${({ $weight }) => $weight * 360}px;
  height: ${({ $weight }) => $weight * 360}px;

  display: flex;
  justify-content: center;
  align-items: center;
  will-change: transform;

  color: ${({ theme }) => theme.color.primary800};
  ${({ theme }) => theme.font.desktop.title1};

  position: absolute;
  z-index: -1;

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
    bottom: 5%;
    left: 15%;

    animation:
      ${moveDown} 2000ms ease-in-out infinite,
      ${moveLeft} 3000ms ease-in-out infinite;
  }

  &.b1 {
    bottom: 10%;
    right: 13%;

    animation:
      ${moveDown} 3000ms ease-in-out infinite,
      ${moveRight} 2000ms ease-in-out infinite;
  }

  &.b2 {
    top: 2%;
    left: 3%;

    animation:
      ${moveDown} 2500ms ease-in-out infinite,
      ${moveLeft} 3000ms ease-in-out infinite;
  }

  &.b3 {
    top: 5%;
    right: 3%;

    animation:
      ${moveUp} 2300ms ease-in-out infinite,
      ${moveLeft} 2700ms ease-in-out infinite;
  }

  &.b4 {
    bottom: 10%;
    right: 0%;

    animation:
      ${moveDown} 2500ms ease-in-out infinite,
      ${moveRight} 2300ms ease-in-out infinite;
  }

  &.b5 {
    bottom: 10%;
    left: 0%;

    animation:
      ${moveUp} 2600ms ease-in-out infinite,
      ${moveRight} 3000ms ease-in-out infinite;
  }

  &.b6 {
    top: 3%;
    right: 24%;

    animation:
      ${moveDown} 3000ms ease-in-out infinite,
      ${moveRight} 2800ms ease-in-out infinite;
  }
`;

const StyledChipsContainer = styled.div`
  display: flex;
  gap: 16px;

  padding: 30px 0 38px 0;
`;

const StyledContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  ${({ theme }) => theme.font.desktop.title1};
`;
