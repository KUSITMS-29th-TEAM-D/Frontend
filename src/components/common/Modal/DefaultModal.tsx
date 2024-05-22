// 모달 구현

import React, { useEffect } from 'react';

import styled from 'styled-components';

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
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <StyledOverlay>
      <StyledModalContainer $width={width} $height={height}>
        {children}
      </StyledModalContainer>
    </StyledOverlay>
  );
};

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  width: 100vw;
  height: 100vh;

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
`;
