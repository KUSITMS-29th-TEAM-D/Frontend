import { useState } from 'react';

import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { userAPI } from '@/apis/userAPI';
import {
  StyledContainer,
  StyledPlainButton,
  StyledQuestion,
  StyledQuestionContainer,
} from '@/components/OnboardingPage/Setup.style';
import { Dropdown } from '@/components/common/Dropdown/Dropdown';
import { ButtonInput } from '@/components/common/Input/ButtonInput';
import { INTEREST_LIST, JOB_LIST } from '@/constants/onboarding';
import { onboardingState } from '@/recoil/onboardingState';

interface SetupBasicInfoProps {
  onNext: () => void;
}

export const SetupBasicInfo = ({ onNext }: SetupBasicInfoProps) => {
  const [checkDuplicate, setCheckDuplicate] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [isSpecialCharacter, setIsSpecialCharacter] = useState(false);
  const [onboarding, setOnboarding] = useRecoilState(onboardingState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setOnboarding({ ...onboarding, nickname: value });

    setIsDuplicate(false);
    setCheckDuplicate(false);

    if (value.match(/[^a-zA-Z0-9ㄱ-ㅎ가-힣ㅏ-ㅣ\s]/g) !== null) {
      setIsSpecialCharacter(true);
    } else {
      setIsSpecialCharacter(false);
    }
  };

  const handleCheckDuplicate = () => {
    userAPI
      .duplicateCheck(onboarding.nickname)
      .then(() => {
        setIsDuplicate(false);
        setCheckDuplicate(true);
      })
      .catch(() => {
        setIsDuplicate(true);
        setCheckDuplicate(false);
      });
  };

  return (
    <StyledContainer>
      <div className="field">
        <StyledQuestionContainer>
          <StyledQuestion>당신의 닉네임이 궁금해요. 어떻게 불러드릴까요?</StyledQuestion>
          <div>
            <ButtonInput
              placeholder="닉네임을 입력해주세요"
              buttonText={checkDuplicate ? '사용 가능' : '중복 확인'}
              value={onboarding.nickname}
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
        </StyledQuestionContainer>
        <StyledQuestionContainer>
          <StyledQuestion>당신의 직업이 궁금해요. 어떤 일을 하고 계신가요?</StyledQuestion>
          <Dropdown
            placeholder="직업을 선택해주세요"
            contents={JOB_LIST}
            selected={onboarding.job}
            contentMaxHeight="172px"
            clickContentHandler={(newSelected: string) =>
              setOnboarding({ ...onboarding, job: newSelected })
            }
          />
        </StyledQuestionContainer>
        <StyledQuestionContainer>
          <StyledQuestion>
            관심 분야를 선택해주세요. 어떤 경험을 즐기시나요?
            <span className="highlight">최대 2개 선택</span>
          </StyledQuestion>
          <Dropdown
            placeholder="관심분야"
            contents={INTEREST_LIST}
            selected={onboarding.interest_list}
            contentMaxHeight="172px"
            multiple
            clickContentHandler={(newSelected: string) => {
              if (onboarding.interest_list.includes(newSelected))
                setOnboarding({
                  ...onboarding,
                  interest_list: onboarding.interest_list.filter((item) => item !== newSelected),
                });
              else if (onboarding.interest_list.length < 2)
                setOnboarding({
                  ...onboarding,
                  interest_list: [...onboarding.interest_list, newSelected],
                });
            }}
          />
        </StyledQuestionContainer>
      </div>
      <StyledPlainButton
        disabled={onboarding.job === '' || onboarding.interest_list.length === 0 || !checkDuplicate}
        onClick={onNext}
      >
        다음으로
      </StyledPlainButton>
    </StyledContainer>
  );
};

const StyledCondition = styled.div<{ $warning?: boolean }>`
  margin-top: 4px;
  ${({ theme }) => theme.font.desktop.label2};

  color: ${({ $warning, theme }) => ($warning ? theme.color.secondary500 : theme.color.gray600)};
`;
