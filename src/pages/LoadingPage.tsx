import { useEffect, useState } from 'react';

import { useRecoilState } from 'recoil';
import styled, { keyframes } from 'styled-components';

import { ReactComponent as Logo } from '@/assets/logos/logo3d.svg';
import { loadingState } from '@/recoil/loadingState';

export const LoadingPage = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useRecoilState(loadingState);
  const interval = 100;

  useEffect(() => {
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
      loading.handleCompleted();
      setLoading({ ...loading, showLoading: false });
    }
  }, [progress, loading, setLoading]);

  return (
    <StyledContainer>
      <StyledGradient />
      <StyledContent>
        <Logo className="logo" />
        <ProgressBarContainer>
          <ProgressBar $progress={progress} />
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

  height: 100vh;
  padding: 20px;

  position: relative;
`;

const gradientAnimation = keyframes`
  0% {
    width: 400px;
    height: 400px;
  }
  100% {
    width: 680px;
    height: 680px;
  }
`;

const StyledGradient = styled.div`
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(204, 179, 253, 1) 0%,
    rgba(204, 179, 253, 0) 100%
  );

  animation: ${gradientAnimation} 1.5s linear infinite alternate;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .logo {
    width: 278.57px;
    height: 278.57px;
    transform: rotate(24.21deg);
  }

  p {
    color: ${({ theme }) => theme.color.gray600};
    ${({ theme }) => theme.font.desktop.title2};
  }
`;

const ProgressBarContainer = styled.div`
  width: 474px;
  height: 8px;
  background: ${({ theme }) => theme.color.gray150};
  border-radius: 50px;
  position: relative;
  overflow: hidden;

  margin-bottom: 31px;
`;

const ProgressBar = styled.div<{ $progress: number }>`
  height: 100%;
  width: ${(props) => props.$progress}%;
  background: ${({ theme }) => theme.color.primary500};
  border-radius: inherit;
  text-align: right;
  transition: width 0.3s ease-in-out;

  position: absolute;
  top: 0;
  left: 0;
`;
