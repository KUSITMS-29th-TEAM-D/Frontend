import { useState } from 'react';

import styled from 'styled-components';

import { PlainButton } from '@/components/common/Button/PlainButton';
import { Dropdown } from '@/components/common/Dropdown/Dropdown';
import { ButtonInput } from '@/components/common/Input/ButtonInput';
import { INTEREST_LIST, JOB_LIST } from '@/constants/onboarding';

interface SetupBasicInfoProps {
  onNext: () => void;
}

export const SetupBasicInfo = ({ onNext }: SetupBasicInfoProps) => {
  const [selectedJob, setSelectedJob] = useState<string[]>([]);
  const [selectedInterest, setSelectedInterest] = useState<string[]>([]);
  const [nickname, setNickname] = useState('');
  const [checkDuplicate, setCheckDuplicate] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [isSpecialCharacter, setIsSpecialCharacter] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNickname(value);

    setIsDuplicate(false);
    setCheckDuplicate(false);

    if (value.match(/[^a-zA-Z0-9ㄱ-ㅎ가-힣ㅏ-ㅣ\s]/g) !== null) {
      setIsSpecialCharacter(true);
    } else {
      setIsSpecialCharacter(false);
    }
  };

  const handleCheckDuplicate = () => {
    // TODO: 특수문자 입력이 없을 때 버튼이 동작하도록
    // TODO: 중복 확인 API 호출 -> 중복 확인 결과에 따라 setCheckDuplicate, setIsDuplicate
    // 임시
    //setIsDuplicate(true);
    setCheckDuplicate(true);
  };

  return (
    <StyledContainer>
      <div className="field">
        <div>
          <StyledQuestion>당신의 닉네임이 궁금해요. 어떻게 불러드릴까요?</StyledQuestion>
          <ButtonInput
            placeholder="닉네임을 입력해주세요"
            buttonText={checkDuplicate ? '사용 가능' : '중복 확인'}
            value={nickname}
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
        <div>
          <StyledQuestion>당신의 직업이 궁금해요. 어떤 일을 하고 계신가요?</StyledQuestion>
          <Dropdown
            placeholder="직업을 선택해주세요"
            contents={JOB_LIST}
            selected={selectedJob}
            contentMaxHeight={172}
            clickContentHandler={(newSelected: string) => setSelectedJob([newSelected])}
          />
        </div>
        <div>
          <StyledQuestion>
            관심 분야를 선택해주세요. 어떤 경험을 즐기시나요?
            <span className="highlight">최대 2개 선택</span>
          </StyledQuestion>
          <Dropdown
            placeholder="관심분야"
            contents={INTEREST_LIST}
            selected={selectedInterest}
            contentMaxHeight={172}
            multiple
            clickContentHandler={(newSelected: string) => {
              if (selectedInterest.includes(newSelected))
                setSelectedInterest(selectedInterest.filter((item) => item !== newSelected));
              else if (selectedInterest.length < 2)
                setSelectedInterest([...selectedInterest, newSelected]);
            }}
          />
        </div>
      </div>
      <StyledPlainButton
        disabled={selectedJob.length === 0 || selectedInterest.length === 0 || !checkDuplicate}
        onClick={onNext}
      >
        다음으로
      </StyledPlainButton>
    </StyledContainer>
  );
};

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  .field {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;

const StyledQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.font.desktop.body1m};
  color: ${({ theme }) => theme.color.gray900};
  margin-bottom: 8px;

  .highlight {
    ${({ theme }) => theme.font.desktop.label2};
    color: ${({ theme }) => theme.color.primary500};
  }
`;

const StyledPlainButton = styled(PlainButton)`
  margin-top: 20px;
`;

const StyledCondition = styled.div<{ $warning?: boolean }>`
  margin-top: 4px;
  ${({ theme }) => theme.font.desktop.label2};

  color: ${({ $warning, theme }) => ($warning ? theme.color.secondary500 : theme.color.gray600)};
`;