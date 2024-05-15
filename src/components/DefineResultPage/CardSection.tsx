import { useRef, useState } from 'react';

import html2canvas from 'html2canvas';
import styled from 'styled-components';

import { ReactComponent as ChangeIcon } from '@/assets/icons/change.svg';
import { ReactComponent as DownloadIcon } from '@/assets/icons/download.svg';
import { ReactComponent as KakaoIcon } from '@/assets/icons/kakaoIcon.svg';

interface CardSectionProps {
  piece: string;
}

export const CardSection = ({ piece }: CardSectionProps) => {
  const [isFront, setIsFront] = useState(true);
  const captureRef = useRef<HTMLImageElement>(null);

  const handleSaveImage = () => {
    if (!captureRef.current) return;

    const capture = captureRef.current;

    html2canvas(capture, { scrollY: -window.scrollY }).then((canvas) => {
      const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
      const link = document.createElement('a');
      link.href = image;
      link.download = `define-result-${isFront ? 'front' : 'back'}.jpg`;
      link.click();
    });
  };

  return (
    <StyledCardSection>
      <StyledImageContainer>
        <img
          src={`/src/assets/cards/${isFront ? 'front' : 'back'}/${piece}.png`}
          alt="card"
          ref={captureRef}
        />
        <div className="hover-view">
          <StyledChangeButton type="button" onClick={() => setIsFront((prev) => !prev)}>
            <ChangeIcon />
          </StyledChangeButton>
          <StyleButtonContainer>
            <button type="button" className="download-button" onClick={handleSaveImage}>
              <DownloadIcon />
              <span>이미지로 저장</span>
              <div />
            </button>
            <button
              type="button"
              className="share-button"
              onClick={() => {
                // TODO: 공유 기능 구현
              }}
            >
              <KakaoIcon />
              <span>카카오로 공유</span>
              <div />
            </button>
          </StyleButtonContainer>
        </div>
      </StyledImageContainer>
      <div className="notice">카드에 마우스를 가져가 보세요!</div>
    </StyledCardSection>
  );
};

const StyledCardSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .notice {
    text-align: center;
    ${({ theme }) => theme.font.desktop.label1m};
    color: ${({ theme }) => theme.color.primary700};
  }
`;

// TODO: Change 버튼 클릭시 카드 앞뒤 돌아가는 애니메이션 추가

const StyledImageContainer = styled.div`
  width: 264px;
  height: 426px;

  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 13px;
  }

  .hover-view {
    visibility: hidden;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    padding: 20px;

    border-radius: 13px;
    background: ${({ theme }) => theme.color.bgModal};
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
    backdrop-filter: blur(4px);

    button {
      color: white;
    }
  }

  &:hover .hover-view {
    visibility: visible;
  }
`;

const StyledChangeButton = styled.button`
  display: flex;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const StyleButtonContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 8px;

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 48px;
    padding: 8px 16px;
    border-radius: 8px;

    span {
      ${({ theme }) => theme.font.desktop.label1m};
    }
  }

  .download-button {
    background: ${({ theme }) => theme.color.primary50};

    span {
      color: ${({ theme }) => theme.color.primary700};
    }
  }

  .share-button {
    background: #fee500;

    span {
      color: #191600;
    }
  }

  div {
    width: 24px;
  }
`;
