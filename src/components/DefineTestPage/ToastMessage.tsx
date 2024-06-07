import { useEffect, useState } from 'react';

import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { toastState } from '@/recoil/toastState';

export const ToastMessage = () => {
  const [toast, setToast] = useRecoilState(toastState);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (toast.show && !toast.isShown) {
      const setShowTimeout = setTimeout(() => {
        setShow(true);
      }, 1);

      const setClosingTimeout = setTimeout(() => {
        setIsClosing(true);
      }, 4000);

      const setToastReset = setTimeout(() => {
        setToast({ isShown: true, show: false });
        setIsClosing(false);
        setShow(false);
      }, 4300);

      return () => {
        clearTimeout(setShowTimeout);
        clearTimeout(setClosingTimeout);
        clearTimeout(setToastReset);
      };
    }
  }, [toast.show]);

  if (!toast.show) return null;

  return (
    <StyledContainer className={isClosing ? 'closing show' : `${show && 'show'}`}>
      <StyledText>키워드를 5개만 선택해 주세요!</StyledText>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  opacity: 0;
  &.show {
    opacity: 1;
  }
  &.closing {
    opacity: 0;
  }

  transition: opacity 300ms ease-in-out;

  width: 100%;
  display: flex;
  justify-content: center;

  position: absolute;
  left: 0;
  bottom: 100px;

  @media ${({ theme }) => theme.device.mobile} {
    bottom: 120px;
  }
`;

const StyledText = styled.div`
  width: max-content;
  padding: 8px 20px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => `${theme.color.secondary600}`};
  background: ${({ theme }) => `${theme.color.secondary50}`};

  color: ${({ theme }) => `${theme.color.secondary600}`};
  ${({ theme }) => theme.font.desktop.label1m};
`;
