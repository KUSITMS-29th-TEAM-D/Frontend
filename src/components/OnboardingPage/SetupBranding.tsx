import { useState } from 'react';

import styled from 'styled-components';

import { ScoreRangeBar } from '@/components/OnboardingPage/ScoreRangeBar';
import {
  StyledContainer,
  StyledPlainButton,
  StyledQuestion,
  StyledQuestionContainer,
} from '@/components/OnboardingPage/Setup.style';
import { KeywordChip } from '@/components/common/Chip/KeywordChip';
import { KEYWORD_LIST } from '@/constants/onboarding';

export const SetupBranding = () => {
  const onboardingData = sessionStorage.getItem('onboarding');
  const parsedData = onboardingData ? JSON.parse(onboardingData) : null;
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [score, setScore] = useState(50);
  const keywordLists = KEYWORD_LIST.reduce((acc: string[][], _, i) => {
    if (i % 4 === 0) acc.push(KEYWORD_LIST.slice(i, i + 4));
    return acc;
  }, []);

  return (
    <StyledContainer>
      <div className="field">
        <StyledQuestionContainer>
          <div>
            <StyledQuestion>{`셀피스와 함께할 ${parsedData ? parsedData.nickname : ''}님, 스스로에 대해 얼마나 알고 있나요?`}</StyledQuestion>
            <StyledDescription>
              {`셀피스는 자기이해와 PR에 어려움을 겪고 있는 사용자를 위한 퍼스널 브랜딩 서비스에요.\n스스로에 대한 이해도를 1점부터 100점까지 매겨주세요.`}
            </StyledDescription>
          </div>
          <ScoreRangeBar score={score} setScore={setScore} />
        </StyledQuestionContainer>
        <StyledQuestionContainer>
          <div>
            <StyledQuestion>
              {`${parsedData ? parsedData.nickname : ''}님을 표현하는 키워드를 골라주세요.`}
              <span className="highlight">최대 5개 선택</span>
            </StyledQuestion>
            <StyledDescription>
              고른 키워드를 기반으로 셀피스가 경험을 추천해드려요.
            </StyledDescription>
          </div>
          <StyledChipsContainer>
            {keywordLists.map((subArray) => (
              <div key={`${subArray[0]}-${subArray[1]}`} className="sub-array">
                {subArray.map((keyword) => (
                  <KeywordChip
                    key={keyword}
                    selected={selectedKeywords.includes(keyword)}
                    selectHandler={(newKeyword) => {
                      if (selectedKeywords.length < 5) {
                        setSelectedKeywords([...selectedKeywords, newKeyword]);
                      }
                    }}
                    deleteHandler={(newKeyword) =>
                      setSelectedKeywords(
                        selectedKeywords.filter((keyword) => keyword !== newKeyword)
                      )
                    }
                  >
                    {keyword}
                  </KeywordChip>
                ))}
              </div>
            ))}
          </StyledChipsContainer>
        </StyledQuestionContainer>
      </div>
      <StyledPlainButton
        disabled={selectedKeywords.length === 0}
        onClick={() => {
          // TODO: 제출 API 연동 -> 정상 제출 시 다음 페이지로 이동
        }}
      >
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
  flex-direction: column;
  gap: 12px;

  .sub-array {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }
`;
