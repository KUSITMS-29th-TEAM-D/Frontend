import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { userAPI } from '@/apis/userAPI';
import { ScoreRangeBar } from '@/components/OnboardingPage/ScoreRangeBar';
import {
  StyledContainer,
  StyledPlainButton,
  StyledQuestion,
  StyledQuestionContainer,
} from '@/components/OnboardingPage/Setup.style';
import { KeywordChip } from '@/components/common/Chip/KeywordChip';
import { IMAGE_KEYWORD_LIST } from '@/constants/onboarding';
import { onboardingState } from '@/recoil/onboardingState';
import { authService } from '@/services/AuthService';
import { userService } from '@/services/UserService';

export const SetupBranding = () => {
  const [onboarding, setOnboarding] = useRecoilState(onboardingState);
  const navigate = useNavigate();

  const handleSubmit = () => {
    userAPI
      .register(onboarding)
      .then((res) => {
        authService.setAuthToken(res.payload.access_token);
        userService.updateUserNickname(res.payload.nickname);
        authService.deleteRegisterToken();
        navigate('/');
      })
      .catch(() => {
        window.alert('다시 시도해주세요');
      });
  };

  return (
    <StyledContainer>
      <div className="field">
        <StyledQuestionContainer>
          <div>
            <StyledQuestion>{`셀피스와 함께할 ${onboarding.nickname}님, 스스로에 대해 얼마나 알고 있나요?`}</StyledQuestion>
            <StyledDescription>
              {`셀피스는 자기이해와 PR에 어려움을 겪고 있는 사용자를 위한 퍼스널 브랜딩 서비스에요.\n스스로에 대한 이해도를 1점부터 100점까지 매겨주세요.`}
            </StyledDescription>
          </div>
          <ScoreRangeBar score={onboarding.understanding_score} />
        </StyledQuestionContainer>
        <StyledQuestionContainer>
          <div>
            <StyledQuestion>
              {`${onboarding.nickname}님을 표현하는 키워드를 골라주세요.`}
              <span className="highlight">최대 5개 선택</span>
            </StyledQuestion>
            <StyledDescription>
              고른 키워드를 기반으로 셀피스가 경험을 추천해드려요.
            </StyledDescription>
          </div>
          <StyledChipsContainer>
            {IMAGE_KEYWORD_LIST.map((keyword) => (
              <KeywordChip
                key={keyword}
                selected={onboarding.keyword_list.includes(keyword)}
                selectHandler={(newKeyword) => {
                  if (onboarding.keyword_list.length < 5) {
                    setOnboarding({
                      ...onboarding,
                      keyword_list: [...onboarding.keyword_list, newKeyword],
                    });
                  }
                }}
                deleteHandler={(newKeyword) =>
                  setOnboarding({
                    ...onboarding,
                    keyword_list: onboarding.keyword_list.filter(
                      (keyword) => keyword !== newKeyword
                    ),
                  })
                }
              >
                {keyword}
              </KeywordChip>
            ))}
          </StyledChipsContainer>
        </StyledQuestionContainer>
      </div>
      <StyledPlainButton disabled={onboarding.keyword_list.length === 0} onClick={handleSubmit}>
        셀피스 시작하기
      </StyledPlainButton>
    </StyledContainer>
  );
};

const StyledDescription = styled.div`
  ${({ theme }) => theme.font.desktop.label2};
  color: ${({ theme }) => theme.color.gray500};
  white-space: pre-line;
`;

const StyledChipsContainer = styled.div`
  width: 100%;

  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;
