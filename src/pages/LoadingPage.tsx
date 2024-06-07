import { useEffect, useState } from 'react';

import { useRecoilState, useRecoilValue } from 'recoil';
import styled, { keyframes } from 'styled-components';

import { ReactComponent as Logo } from '@/assets/logos/logo3d.svg';
import { loadingHandlerState } from '@/recoil/loadingHandlerState';
import { loadingState } from '@/recoil/loadingState';
import { setScreenSize } from '@/utils/setScreenSize';

export const LoadingPage = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useRecoilState(loadingState);
  const loadingHandler = useRecoilValue(loadingHandlerState);
  const interval = loading.speed;

  useEffect(() => {
    setScreenSize();
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [interval]);

  useEffect(() => {
    if (progress >= 100) {
      loadingHandler.handleCompleted();
      setLoading({ ...loading, show: false });
    }
  }, [progress]);

  return (
    <StyledContainer>
      <StyledGradient />
      <StyledContent>
        <Logo className="logo" />
        <ProgressBarContainer>
          <ProgressBar $progress={progress} $speed={loading.speed} />
        </ProgressBarContainer>
        <p>나의 경험을 분석중이에요!</p>
      </StyledContent>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  padding: 20px;
  padding-top: 96px;

  position: relative;
`;

const gradientDesktopAnimation = keyframes`
  0% {
    width: 400px;
    height: 400px;
  }
  100% {
    width: 680px;
    height: 680px;
  }
`;

const gradientTabletAnimation = keyframes`
  0% {
    width: 400px;
    height: 400px;
  }
  100% {
    width: 550px;
    height: 550px;
  }
`;

const gradientMobileAnimation = keyframes`
  0% {
    width: 250px;
    height: 250px;
  }
  100% {
    width: 300px;
    height: 300px;
  }
`;

const StyledGradient = styled.div`
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(204, 179, 253, 1) 0%,
    rgba(204, 179, 253, 0) 100%
  );

  animation: ${gradientDesktopAnimation} 1.5s linear infinite alternate;

  @media ${({ theme }) => theme.device.tablet} {
    animation: ${gradientTabletAnimation} 1.5s linear infinite alternate;
  }

  @media ${({ theme }) => theme.device.mobile} {
    animation: ${gradientMobileAnimation} 1.5s linear infinite alternate;
  }
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 474px;

  @media ${({ theme }) => theme.device.tablet} {
    width: 300px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 300px;
  }

  .logo {
    width: 278.57px;
    height: 278.57px;
    transform: rotate(24.21deg);
  }

  p {
    color: ${({ theme }) => theme.color.gray600};
    ${({ theme }) => theme.font.desktop.title2};

    @media ${({ theme }) => theme.device.tablet} {
      ${({ theme }) => theme.font.mobile.title2};
    }

    @media ${({ theme }) => theme.device.mobile} {
      ${({ theme }) => theme.font.mobile.title2};
    }
  }
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background: ${({ theme }) => theme.color.gray150};
  border-radius: 50px;
  position: relative;
  overflow: hidden;

  margin-bottom: 31px;
`;

const ProgressBar = styled.div<{ $progress: number; $speed: number }>`
  height: 100%;
  width: ${(props) => props.$progress}%;
  background: ${({ theme }) => theme.color.primary500};
  border-radius: inherit;
  text-align: right;
  transition: width ${({ $speed }) => $speed}ms ease-in-out;

  position: absolute;
  top: 0;
  left: 0;
`;
