import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { TestSectionTitle } from '@/components/DefineTestPage/TestSectionTitle';
import { ToastMessage } from '@/components/DefineTestPage/ToastMessage';
import { PlainButton } from '@/components/common/Button/PlainButton';
import { KeywordChip } from '@/components/common/Chip/KeywordChip';
import useSessionStorage from '@/hooks/useSessionStorage';
import { toastState } from '@/recoil/toastState';

interface StepProps {
  chipData: string[];
  sessionStorageKey: string;
  steps: string[];
  currentStep: string;
  onNext?: () => void;
  onPrev?: () => void;
  lastSection?: boolean;
}

export const TestSection = ({
  chipData,
  sessionStorageKey,
  steps,
  currentStep,
  onNext,
  onPrev,
  lastSection = false,
}: StepProps) => {
  const [toast, setToast] = useRecoilState(toastState);
  const [selectedChips, setSelectedChips] = useSessionStorage<string[]>(sessionStorageKey, []);

  const handleSelect = (chip: string) => {
    const newSelectedChips = [...selectedChips, chip];
    setSelectedChips(newSelectedChips);
    if (newSelectedChips.length > 5) {
      setToast({ ...toast, show: true });
    } else {
      setToast({ isShown: false, show: false });
    }
  };

  const handleDelete = (chip: string) => {
    const newSelectedChips = selectedChips.filter((c) => c !== chip);
    setSelectedChips(newSelectedChips);
    if (newSelectedChips.length > 5) {
      setToast({ ...toast, show: true });
    } else {
      setToast({ isShown: false, show: false });
    }
  };

  return (
    <StyledContainer>
      <StyledContentContainer>
        <TestSectionTitle steps={steps} currentStep={currentStep} />
        <StyledStepContainer>
          <StyledChipContainer>
            {chipData.map((chip, index) => (
              <KeywordChip
                key={index}
                selected={selectedChips.includes(chip)}
                selectHandler={handleSelect}
                deleteHandler={handleDelete}
              >
                {chip}
              </KeywordChip>
            ))}
          </StyledChipContainer>
          <div>
            <StyledButtonContainer>
              {onPrev && (
                <PlainButton height="48px" onClick={onPrev}>
                  이전으로
                </PlainButton>
              )}
              {onNext && !lastSection && (
                <PlainButton height="48px" onClick={onNext} disabled={selectedChips.length !== 5}>
                  다음으로
                </PlainButton>
              )}
              {onNext && lastSection && (
                <PlainButton
                  variant="primary2"
                  height="48px"
                  onClick={onNext}
                  disabled={selectedChips.length !== 5}
                >
                  결과 확인하기
                </PlainButton>
              )}
            </StyledButtonContainer>
            <StyledExplanation>
              {'종료하기를 누르면 해당 단계부터\n이어서 검사를 진행할 수 있어요!'}
            </StyledExplanation>
          </div>
          <ToastMessage />
        </StyledStepContainer>
      </StyledContentContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${({ theme }) => `${theme.color.primary50}`};

  min-height: 100vh;

  padding: 24px;
  padding-top: 100px;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 24px;
    padding-top: 100px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    padding: 20px;
    padding-top: 96px;
  }

  //zoom: 1.25;

  background:;
`;

const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 632px;
  height: 100%;
  max-height: 800px;
  flex: 1;

  @media ${({ theme }) => theme.device.tablet} {
    width: 552px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
`;

const StyledStepContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 70px;

  position: relative;
`;

const StyledChipContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;

  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 32px;
    gap: 8px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 32px;
    gap: 8px;
  }
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;

  @media ${({ theme }) => theme.device.tablet} {
    gap: 8px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    gap: 8px;
  }
`;

const StyledExplanation = styled.div`
  ${({ theme }) => theme.font.desktop.label1m};
  color: ${({ theme }) => theme.color.gray400};

  margin-top: 15px;
  text-align: center;

  @media ${({ theme }) => theme.device.tablet} {
    ${({ theme }) => theme.font.mobile.label1m};
  }

  @media ${({ theme }) => theme.device.mobile} {
    ${({ theme }) => theme.font.mobile.label1m};
    white-space: pre-line;
  }
`;
