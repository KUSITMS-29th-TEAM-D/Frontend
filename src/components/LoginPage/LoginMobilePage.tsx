import styled from 'styled-components';

import backgroundImg from '@/assets/backgrounds/loginBackground.png';
import SIcon from '@/assets/logos/logo3d.svg';
import GoogleLoginButton from '@/components/LoginPage/GoogleLoginButton';
import KakaoLoginButton from '@/components/LoginPage/KakaoLoginButton';
import NaverLoginButton from '@/components/LoginPage/NaverLoginButton';

export const LoginMobilePage = () => (
  <ViewContainer>
    <MainContainer>
      <InnerContainer>
        <TextContainer>
          <div className="content">
            <div>
              <span>
                <span className="highlight">셀피스</span>로 나의 새로운 <br />
                경험 조각을 찾아보세요!
              </span>
              <p>3초면 회원가입이 가능해요</p>
            </div>
          </div>
        </TextContainer>
      </InnerContainer>
      <IconContainer>
        <StyledIcon src={SIcon} alt="3D Icon" />
      </IconContainer>
      <ButtonContainer>
        <NaverLoginButton />
        <KakaoLoginButton />
        <GoogleLoginButton />
      </ButtonContainer>
    </MainContainer>
  </ViewContainer>
);

const ViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  min-height: 700px;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: calc(50% + 70px) center;
  position: relative;
  top: 0;
  left: 0;
  z-index: -1;
`;

const MainContainer = styled.div`
  width: 100%;
  padding: 45px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  display: flex;
  margin-top: 45px;
  margin-bottom: 45px;
`;

const InnerContainer = styled.div`
  align-self: stretch;
  height: fit-content;
  min-height: 100%;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  display: flex;
  overflow: auto;
  text-align: center;
`;

const TextContainer = styled.div`
  .content {
    width: 100%;
    height: 100%;
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;

    span {
      color: ${(props) => props.theme.color.gray800};
      ${({ theme }) => theme.font.mobile.h2};
      text-align: center;

      .highlight {
        color: ${(props) => props.theme.color.primary500};
      }
    }
    p {
      color: ${(props) => props.theme.color.gray600};
      ${({ theme }) => theme.font.mobile.title2};
      margin-top: 10px;
      text-align: center;
    }
  }
`;
const StyledIcon = styled.img`
  width: 220px;
  height: 220px;
  transform: rotate(-15deg);
`;
const IconContainer = styled.div`
  width: 173px;
  height: 173px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

const ButtonContainer = styled.div`
  align-self: stretch;
  height: 168px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  display: flex;
`;
