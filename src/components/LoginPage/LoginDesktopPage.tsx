import styled from 'styled-components';

import backgroundImg from '@/assets/backgrounds/loginBackground.png';
import { ReactComponent as SIcon } from '@/assets/logos/logo3d.svg';
import GoogleLoginButton from '@/components/LoginPage/GoogleLoginButton';
import KakaoLoginButton from '@/components/LoginPage/KakaoLoginButton';
import NaverLoginButton from '@/components/LoginPage/NaverLoginButton';

export const LoginDesktopPage = () => (
  <ViewContainer>
    <HorizontalLayout>
      <MainContainer>
        <TextContainer>
          <div className="content">
            <span>
              <span className="highlight">셀피스</span>로 나의 새로운 <br />
              경험 조각을 찾아보세요!
            </span>
            <p>3초면 회원가입이 가능해요</p>
          </div>
        </TextContainer>
        <ButtonContainer>
          <NaverLoginButton />
          <KakaoLoginButton />
          <GoogleLoginButton />
        </ButtonContainer>
      </MainContainer>
      <IconContainer>
        <SIcon />
      </IconContainer>
    </HorizontalLayout>
  </ViewContainer>
);

export const ViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImg});
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const MainContainer = styled.div`
  padding: 76px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 72px;
`;

export const TextContainer = styled.div`
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    gap: 16px;

    span {
      color: ${(props) => props.theme.color.gray800};
      text-align: left;
      font-size: 40px;
      font-weight: 700;
      line-height: 50px;

      .highlight {
        color: ${(props) => props.theme.color.primary500};
      }
    }
    p {
      color: ${(props) => props.theme.color.gray600};
      ${({ theme }) => theme.font.desktop.title2};
    }
  }
`;

export const ButtonContainer = styled.div`
  align-self: stretch;
  height: 168px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HorizontalLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  gap: 50px;
`;
