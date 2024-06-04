import styled from 'styled-components';

import backgroundImg from '@/assets/backgrounds/loginBackground.png';
import { ReactComponent as SIcon } from '@/assets/logos/logo3d.svg';
import { SocialLoginButton } from '@/components/LoginPage/SocialLoginButton';

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
        <SIcon className="icon" />
      </IconContainer>
      <ButtonContainer>
        <SocialLoginButton provider="NAVER" />
        <SocialLoginButton provider="KAKAO" />
        <SocialLoginButton provider="GOOGLE" />
      </ButtonContainer>
    </MainContainer>
  </ViewContainer>
);

const ViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: var(--full-height);
  background-image: url(${backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: calc(50% + 70px) center;

  @media (min-width: 1108px) {
    background-position: center;
  }
`;

const MainContainer = styled.div`
  width: 100%;
  padding: 45px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  display: flex;
  margin-top: 100px;
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

const IconContainer = styled.div`
  width: 173px;
  height: 173px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;

  .icon {
    width: 201px;
    height: 201px;
    transform: rotate(15deg);
  }
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
