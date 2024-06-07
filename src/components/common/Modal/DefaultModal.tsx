// 모달 구현

import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface DefaultModalProps {
  width?: string;
  height?: string;
  children: React.ReactNode;
}

export const DefaultModal = ({
  width = '618px',
  height = '312px',
  children,
}: DefaultModalProps) => {
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <StyledOverlay $isTest={location.pathname.includes('test')}>
      <StyledModalContainer $width={width} $height={height}>
        {children}
      </StyledModalContainer>
    </StyledOverlay>
  );
};

const StyledOverlay = styled.div<{ $isTest: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  ${({ $isTest }) =>
    $isTest
      ? css`
          width: 100vw;
          height: 100vh;
        `
      : css`
          width: var(--full-width);
          height: var(--full-height);
        `};

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.color.bgModal};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
`;

const StyledModalContainer = styled.div<{ $width: string; $height: string }>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  padding: 24px;

  border-radius: 16px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
`;
