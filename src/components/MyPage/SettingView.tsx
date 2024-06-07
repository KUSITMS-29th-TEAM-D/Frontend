import { useEffect, useState } from 'react';

import styled, { css } from 'styled-components';

import { userAPI } from '@/apis/userAPI';
import { ReactComponent as CheckIcon } from '@/assets/icons/check.svg';
import { ReactComponent as UserIcon } from '@/assets/icons/user.svg';
import { PlainButton } from '@/components/common/Button/PlainButton';
import { ButtonInput } from '@/components/common/Input/ButtonInput';
import { DefaultInput } from '@/components/common/Input/DefaultInput';
import { tokenService } from '@/services/TokenService';
import { userService } from '@/services/UserService';
import { UserData } from '@/types/user.type';

export const SettingView = () => {
  const [checkAlarm, setCheckAlarm] = useState(false);
  const [userInfo, setUserInfo] = useState<UserData>();
  const [checkDuplicate, setCheckDuplicate] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [isSpecialCharacter, setIsSpecialCharacter] = useState(false);

  useEffect(() => {
    userAPI.getUserInfo().then((res) => {
      setUserInfo(res.payload);
    });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    userInfo && setUserInfo({ ...userInfo, nickname: value });

    setIsDuplicate(false);
    setCheckDuplicate(false);

    if (value.match(/[^a-zA-Z0-9ㄱ-ㅎ가-힣ㅏ-ㅣ\s]/g) !== null) {
      setIsSpecialCharacter(true);
    } else {
      setIsSpecialCharacter(false);
    }
  };

  const handleCheckDuplicate = () => {
    if (userInfo) {
      userAPI
        .duplicateCheck(userInfo.nickname)
        .then(() => {
          setIsDuplicate(false);
          setCheckDuplicate(true);
        })
        .catch(() => {
          setIsDuplicate(true);
          setCheckDuplicate(false);
        });
    }
  };

  const handleLogout = async () => {
    try {
      await userAPI.logout();
      window.alert('로그아웃 되었습니다.');
      tokenService.onLogout();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async () => {
    if (userInfo) {
      try {
        await userAPI.updateUserInfo({
          nickname: userInfo.nickname,
          job: userInfo.job,
          understanding_score: userInfo.understanding_score,
        });
        userService.updateUserNickname(userInfo.nickname);
        window.alert('수정되었습니다.');
      } catch (error) {
        console.error(error);
      }
    }
  };

  if (userInfo)
    return (
      <StyledContainer>
        <StyledDefaultSetting>
          <div className="title">기본설정</div>
          <StyledDefaultSettingContent>
            <div className="profile">
              <StyledUserImage>
                <UserIcon width={62} height={62} />
              </StyledUserImage>
              <div className="section">
                <div className="section-title">
                  <span>닉네임 설정</span>
                  <p>한글 8자, 영문 및 숫자 10자까지 입력 가능해요.</p>
                </div>
                <div>
                  <ButtonInput
                    placeholder="닉네임을 입력해주세요"
                    buttonText={checkDuplicate ? '사용 가능' : '중복 확인'}
                    value={userInfo.nickname}
                    onChange={handleInputChange}
                    buttonClickHandler={handleCheckDuplicate}
                    warning={isDuplicate}
                    buttonDisabled={checkDuplicate}
                  />
                  {!isSpecialCharacter && !isDuplicate && !checkDuplicate && (
                    <StyledCondition>중복된 이름·특수문자 사용불가</StyledCondition>
                  )}
                  {isSpecialCharacter && (
                    <StyledCondition $warning={true}>특수문자 사용 불가</StyledCondition>
                  )}
                  {!isSpecialCharacter && isDuplicate && !checkDuplicate && (
                    <StyledCondition $warning>닉네임 중복으로 사용 불가</StyledCondition>
                  )}
                  {!isSpecialCharacter && !isDuplicate && checkDuplicate && (
                    <StyledCondition>중복 확인 완료</StyledCondition>
                  )}
                </div>
              </div>
            </div>
            <div className="section">
              <span>소셜 로그인</span>
              <DefaultInput disabled value="sms020417@gmail.com" />
            </div>
            <div className="section">
              <span>직업</span>
              <DefaultInput
                placeholder="직업을 입력해주세요"
                value={userInfo.job}
                onChange={(e) => setUserInfo({ ...userInfo, job: e.target.value })}
              />
            </div>
            <div className="section">
              <span>링크등록</span>
              <DefaultInput
                placeholder="URL을 입력해주세요"
                value="https://www.instagram.com/min.man.mim/"
              />
              <DefaultInput placeholder="URL을 입력해주세요" />
            </div>
          </StyledDefaultSettingContent>
          <div className="button-container">
            <PlainButton variant="gray" height="48px" onClick={handleLogout}>
              로그아웃
            </PlainButton>
            <PlainButton variant="primary2" height="48px" onClick={handleUpdate}>
              수정하기
            </PlainButton>
          </div>
        </StyledDefaultSetting>
        <StyledMemberShipSetting>
          <StyledMemberShip>
            <div>
              <div className="title">셀피스 멤버십</div>
              <div className="content">
                <span>
                  현재 이용 중인 멤버십이 없어요.
                  <br />
                  셀피스 프리미엄에 가입하고 더 다양한 경험을 누려보세요!
                </span>
              </div>
            </div>
            <PlainButton variant="primary" height="48px">
              셀피스 프리미엄 구독하러 가기
            </PlainButton>
          </StyledMemberShip>
          <StyledPaymentMethod>
            <div className="title">결제수단 관리</div>
            <div className="content">
              <span>결제 수단</span>
              <span>현재 등록되어 있는 결제 수단이 없어요.</span>
            </div>
            <PlainButton variant="primary" height="48px">
              결제 수단 등록
            </PlainButton>
          </StyledPaymentMethod>
          <StyledAlarm>
            <div className="title-container">
              <div className="title">알림설정</div>
              <div className="alarm">
                <span>이메일 알림 받기</span>
                <CheckBox
                  $checked={checkAlarm}
                  onClick={() => {
                    setCheckAlarm((prev) => !prev);
                  }}
                >
                  {checkAlarm && <CheckIcon />}
                </CheckBox>
              </div>
            </div>
            <span className="content">
              셀피스에서는 이벤트가 발생할 때 (예: 경험 신청이 완료되었을 때) 이메일을 통해 알림을
              보낼 수 있습니다. 이 설정은 사용자의 설정에 의해 변경될 수 있습니다.
            </span>
          </StyledAlarm>
        </StyledMemberShipSetting>
      </StyledContainer>
    );
};

const StyledContainer = styled.div`
  padding: 24px;
  padding-top: calc(var(--top-navigation-height) + 24px);

  display: flex;
  gap: 24px;
`;

const StyledSection = styled.div`
  min-width: 506px;
  padding: 20px;

  border-radius: 16px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.13);

  .title {
    ${({ theme }) => theme.font.desktop.body1b};
    color: ${({ theme }) => theme.color.gray700};
  }
`;

const StyledDefaultSetting = styled(StyledSection)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .button-container {
    display: flex;
    gap: 8px;
  }
`;

const StyledDefaultSettingContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .profile {
    display: flex;
    gap: 16px;
  }

  .section {
    display: flex;
    flex-direction: column;
    gap: 8px;

    width: 100%;
    span {
      ${({ theme }) => theme.font.desktop.body2m};
      color: ${({ theme }) => theme.color.gray700};
      margin-bottom: 4px;
    }

    .section-title {
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        ${({ theme }) => theme.font.desktop.label2};
        color: ${({ theme }) => theme.color.gray400};
      }
    }
  }
`;

const StyledCondition = styled.div<{ $warning?: boolean }>`
  margin-top: 4px;
  ${({ theme }) => theme.font.desktop.label2};

  color: ${({ $warning, theme }) => ($warning ? theme.color.secondary500 : theme.color.gray600)};
`;

const StyledUserImage = styled.div`
  width: fit-content;
  padding: 24px;

  border-radius: 16px;
  background: ${({ theme }) => theme.color.primary50};

  path {
    fill: ${({ theme }) => theme.color.primary500};
  }
`;

const StyledMemberShipSetting = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const StyledMemberShip = styled(StyledSection)`
  height: 218px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .content {
    margin-top: 8px;
    span {
      ${({ theme }) => theme.font.desktop.label1r};
      color: ${({ theme }) => theme.color.gray500};
    }
  }
`;

const StyledPaymentMethod = styled(StyledSection)`
  height: 218px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .content {
    display: flex;
    flex-direction: column;
    gap: 4px;

    span:first-child {
      ${({ theme }) => theme.font.desktop.body1m};
      color: ${({ theme }) => theme.color.gray800};
    }

    span:last-child {
      ${({ theme }) => theme.font.desktop.label1r};
      color: ${({ theme }) => theme.color.gray500};
    }
  }
`;

const StyledAlarm = styled(StyledSection)`
  height: 124px;

  .title-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .alarm {
    display: flex;
    align-items: center;
    gap: 8px;

    ${({ theme }) => theme.font.desktop.body2r};
    color: ${({ theme }) => theme.color.gray700};
  }

  .content {
    ${({ theme }) => theme.font.desktop.label1r};
    color: ${({ theme }) => theme.color.gray500};
  }
`;

const CheckBox = styled.button<{ $checked: boolean }>`
  flex-shrink: 0;
  width: 24px;
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $checked, theme }) =>
    $checked
      ? css`
          background: ${theme.color.primary500};
          border: 1px solid ${theme.color.primary500};
        `
      : css`
          background: ${theme.color.white};
          border: 1px solid ${theme.color.gray300};
        `}
`;
