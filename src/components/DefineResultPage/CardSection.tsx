import { useEffect, useRef, useState } from 'react';

import styled, { css } from 'styled-components';

import { ReactComponent as ChangeIcon } from '@/assets/icons/change.svg';
import { DownloadButton, KakaoShareButton } from '@/components/DefineResultPage/Button';
import { deviceSizes } from '@/styles/theme/device';
import { DefineResult } from '@/types/test.type';
import { kakaoShare } from '@/utils/kakaoShare';

interface CardSectionProps {
  result: DefineResult;
}

export const CardSection = ({ result }: CardSectionProps) => {
  const [isFront, setIsFront] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const captureRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDownloadImage = () => {
    // TODO: 이미지 다운로드 기능 구현
  };

  const handleShareResult = () => {
    kakaoShare(result.name, result.define_persona_id);
  };

  const handleClickImage = () => {
    if (windowWidth < deviceSizes.desktop) {
      setIsFront((prev) => !prev);
    }
  };

  return (
    <StyledCardSection>
      <div className="notice">
        {windowWidth >= deviceSizes.desktop
          ? '카드에 마우스를 가져가 보세요!'
          : '카드를 클릭해 보세요!'}
      </div>
      <StyledImageContainer
        $desktop={windowWidth >= deviceSizes.desktop}
        onClick={handleClickImage}
      >
        <img
          src={isFront ? result.front_img_url : result.back_img_url}
          alt="card"
          ref={captureRef}
        />
        {windowWidth >= deviceSizes.desktop && (
          <div className="hover-view">
            <StyledChangeButton type="button" onClick={() => setIsFront((prev) => !prev)}>
              <ChangeIcon />
            </StyledChangeButton>
            <StyleButtonContainer>
              <DownloadButton desktop onClick={handleDownloadImage} />
              <KakaoShareButton onClick={handleShareResult} />
            </StyleButtonContainer>
          </div>
        )}
      </StyledImageContainer>
      {windowWidth < deviceSizes.desktop && (
        <StyledMobileButtonContainer>
          <KakaoShareButton onClick={handleShareResult} />
          <DownloadButton onClick={handleDownloadImage} />
        </StyledMobileButtonContainer>
      )}
    </StyledCardSection>
  );
};

const StyledCardSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  width: 100%;

  .notice {
    text-align: center;
    ${({ theme }) => theme.font.mobile.body1m};
    color: ${({ theme }) => theme.color.primary700};

    @media ${({ theme }) => theme.device.desktop} {
      ${({ theme }) => theme.font.mobile.title2};
    }
  }
`;

// TODO: Change 버튼 클릭시 카드 앞뒤 돌아가는 애니메이션 추가

const StyledImageContainer = styled.div<{ $desktop: boolean }>`
  width: 264px;
  height: 426px;
  border-radius: 13px;
  overflow: hidden;

  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }

  .hover-view {
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
    background: ${({ theme }) => theme.color.bgModal};
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
    backdrop-filter: blur(4px);

    button {
      color: white;
    }
  }

  ${({ $desktop }) =>
    $desktop &&
    css`
      .hover-view {
        visibility: hidden;
      }

      &:hover .hover-view {
        visibility: visible;
      }
    `}
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
`;

const StyledMobileButtonContainer = styled.div`
  width: 100%;
  max-width: 764px;

  display: flex;
  justify-content: space-between;
  gap: 12px;

  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column-reverse;
    gap: 8px;
  }
`;
