import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import { ReactComponent as ArrowIcon } from '@/assets/icons/arrowDown.svg';
import { PlainButton } from '@/components/common/Button/PlainButton';
import { CARD_IMAGE } from '@/constants/card';
import { SectionContainer } from '@/styles';

interface BrandingSectionProps {
  isLoggedIn?: boolean;
}

export const BrandingSection = ({ isLoggedIn }: BrandingSectionProps) => {
  const navigate = useNavigate();

  return (
    <StyledContainer>
      <StyledSectionContainer>
        <StyledTitle>
          <div className="title">
            <span className="highlight">셀피스</span>와 함께 나를 브랜딩해봐요.
          </div>
          <div className="subtitle">
            내가 가진 강점은 무엇인지, 나의 차별점은 무엇인지
            <br />
            셀피스와 함께 알아갈 수 있어요.
          </div>
          {isLoggedIn && (
            <PlainButton
              variant="primary"
              width="376px"
              height="48px"
              style={{ marginTop: '24px' }}
              onClick={() => {
                navigate('test/design');
              }}
            >
              자기이해 바로가기
            </PlainButton>
          )}
        </StyledTitle>
        <AutoPlay>
          {CARD_IMAGE.concat(CARD_IMAGE)
            .concat(CARD_IMAGE)
            .map((card) => (
              <StyledCard key={card.name}>
                <img src={card.front} className="front" alt="card" />
                <img src={card.back} className="back" alt="card" />
              </StyledCard>
            ))}
        </AutoPlay>
        {!isLoggedIn && (
          <StyledContents>
            <span>
              이런 조각들로, 스스로의 적성을 파악하고
              <br />내 브랜드의 차별전략을 수립해요
            </span>
            <ArrowIcon width="48px" />
          </StyledContents>
        )}
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
`;

const StyledSectionContainer = styled(SectionContainer)`
  padding: 64px;
  padding-top: 140px;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  overflow: hidden;
`;

const StyledTitle = styled.div`
  text-align: center;

  .title {
    margin-bottom: 16px;

    ${({ theme }) => theme.font.desktop.h1};
    color: ${({ theme }) => theme.color.gray800};

    .highlight {
      color: ${({ theme }) => theme.color.primary600};
    }
  }

  .subtitle {
    ${({ theme }) => theme.font.desktop.title2};
    color: ${({ theme }) => theme.color.gray800};
  }
`;

const autoPlay = keyframes`
  0% {
    transition: translateX(0);
  }
  100% {
    transform: translateX(calc(-245px * 8));
  }
`;

const AutoPlay = styled.div`
  display: flex;
  gap: 20px;

  width: fit-content;
  margin: 56px 0;

  animation: ${autoPlay} 20s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const StyledCard = styled.div`
  width: 225px;
  height: 360px;

  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 13px;

    position: absolute;
    top: 0;
    left: 0;

    transition-duration: 2s;
    backface-visibility: hidden;
  }

  .front {
    z-index: 1;
  }

  .back {
    transform: rotateY(-180deg);
  }

  &:hover .front {
    transform: rotateY(-180deg);
  }

  &:hover .back {
    transform: rotateY(0deg);
  }
`;

const StyledContents = styled.div`
  ${({ theme }) => theme.font.desktop.body1b};
  color: ${({ theme }) => theme.color.gray800};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  padding-top: 30px;
`;
