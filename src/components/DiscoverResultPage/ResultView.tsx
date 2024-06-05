import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { personaAPI } from '@/apis/personaAPI';
import { SummaryCard } from '@/components/DiscoverTestPage/SummaryCard';
import { CategoryButton } from '@/components/common/Button/CategoryButton';
import { PlainButton } from '@/components/common/Button/PlainButton';
import { userService } from '@/services/UserService';
import { moveDown, moveLeft, moveRight, moveUp } from '@/styles';

const CATEGORY_LIST: { [key: string]: string } = {
  all: '전체',
  health: '건강',
  career: '커리어',
  love: '사랑',
  leisure: '여가',
};

export const ResultView = ({ showSummary = false }: { showSummary?: boolean }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [categoryKeywords, setCategoryKeywords] = useState<{ [key: string]: string[] }>({
    all: [],
    health: [],
    career: [],
    love: [],
    leisure: [],
  });
  const [summary, setSummary] = useState<{ [key: string]: string[] } | undefined>(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllKeywords = async () => {
      try {
        const response = await personaAPI.getDiscoverAllKeyword();
        setCategoryKeywords({ ...categoryKeywords, all: response.payload.keywords });
      } catch (error) {
        console.error('Failed to fetch all keywords:', error);
      }
    };

    const fetchSummary = async () => {
      try {
        const response = await personaAPI.getDefaultSummary();
        setSummary(response.payload);
      } catch (error) {
        console.error('Failed to fetch summary:', error);
      }
    };

    fetchAllKeywords();
    fetchSummary();
  }, []);

  useEffect(() => {
    const fetchCategoryKeywords = async (category: string) => {
      if (categoryKeywords[category]) {
        try {
          const response = await personaAPI.getDiscoverCategoryKeyword(category);
          setCategoryKeywords((prev) => ({
            ...prev,
            [category]: response.payload.keywords, // Assuming the payload has a keywords array
          }));
        } catch (error) {
          console.error(`Failed to fetch keywords for category ${category}:`, error);
        }
      }
    };

    if (selectedCategory !== 'all') {
      fetchCategoryKeywords(selectedCategory);
    }
  }, [selectedCategory, categoryKeywords]);

  return (
    <StyledContainer $showSummary={showSummary}>
      <StyledInnerContainer>
        <StyledHeader>
          <div className="notice">이해하기 테스트의 결과에요!</div>
          <div className="title">
            <span className="highlight">셀피스</span>에서 분석한 지금까지의{' '}
            <span className="highlight">{userService.getUserNickname()}님</span>
            은, 이런 사람이에요.
          </div>
          <StyledChipContainer>
            {Object.keys(CATEGORY_LIST).map((category) => (
              <CategoryButton
                active={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              >
                {CATEGORY_LIST[category]}
              </CategoryButton>
            ))}
          </StyledChipContainer>
        </StyledHeader>
        <StyledContent>
          {categoryKeywords[selectedCategory].length !== 0 ? (
            <div className="result">
              {showSummary && (
                <div className="description">
                  <span className="highlight">상위 6개</span>만 보여주고 있어요!
                </div>
              )}
              <BubbleSection $noResult={categoryKeywords[selectedCategory].length === 0}>
                {categoryKeywords[selectedCategory].map((keyword, index) => (
                  <StyledBubble key={keyword} className={`b${index}`} $weight={1 - 0.1 * index}>
                    <span>{keyword}</span>
                  </StyledBubble>
                ))}
              </BubbleSection>
              {!showSummary && (
                <div className="description">
                  <span className="highlight">상위 6개</span>만 보여주고 있어요!
                </div>
              )}
              {showSummary && (
                <ResultSection>
                  <div className="title">{`${userService.getUserNickname()}님과의 대화한 내용을 요약했어요!`}</div>
                  <div className="card-container">
                    {selectedCategory === 'all' &&
                      summary &&
                      Object.values(summary)
                        .map((arr) => (arr.length > 0 ? arr[0] : ''))
                        .map(
                          (item, index) =>
                            item !== null &&
                            item !== '' && (
                              <SummaryCard
                                category={Object.keys(CATEGORY_LIST)[index + 1]}
                                descriptions={[item]}
                              />
                            )
                        )}
                    {selectedCategory !== 'all' &&
                      summary &&
                      summary[selectedCategory].map((item) => (
                        <SummaryCard category={selectedCategory} descriptions={[item]} />
                      ))}
                  </div>
                </ResultSection>
              )}
            </div>
          ) : (
            <div className="no-result">
              <NoResultText>
                <div className="title">
                  아직 <span className="highlight">{CATEGORY_LIST[selectedCategory]}</span> 테스트를
                  완료하지 않았어요!
                </div>
                <div className="subtitle">남은 테스트를 진행해주세요.</div>
              </NoResultText>
              <StyledNoBubble>
                <span>?</span>
              </StyledNoBubble>
            </div>
          )}
        </StyledContent>
        {categoryKeywords[selectedCategory].length === 0 && (
          <PlainButton
            width="376px"
            height="48px"
            onClick={() => {
              navigate('/test/discover');
            }}
            style={{ marginTop: '56px' }}
          >
            테스트 이어하기
          </PlainButton>
        )}
      </StyledInnerContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div<{ $showSummary: boolean }>`
  padding-top: ${({ $showSummary }) => ($showSummary ? '76px' : '9px')};
  min-width: 100%;

  display: flex;
  justify-content: center;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 53.94%, #ccb3fd 100%), #fff;
`;

const StyledInnerContainer = styled.div`
  width: 1280px;
  padding: 40px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .notice {
    ${({ theme }) => theme.font.desktop.body1b};
    color: ${({ theme }) => theme.color.gray400};
    margin-bottom: 10px;
  }

  .title {
    ${({ theme }) => theme.font.desktop.title1};
    color: ${({ theme }) => theme.color.gray800};
  }

  .highlight {
    color: ${({ theme }) => theme.color.primary500};
  }
`;

const StyledChipContainer = styled.div`
  padding-top: 24px;
  display: flex;
  gap: 8px;
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;

  .highlight {
    color: ${({ theme }) => theme.color.primary500};
  }

  .no-result {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .result {
    text-align: center;
    margin: 24px 0;

    .description {
      ${({ theme }) => theme.font.desktop.body1m};
      color: ${({ theme }) => theme.color.gray800};
      margin-bottom: 24px;
    }
  }
`;

const BubbleSection = styled.div<{ $noResult: boolean }>`
  width: 800px;
  height: 350px;
  padding: 0 38px;
  margin: 0 auto;
  position: relative;

  ${({ $noResult }) => $noResult && css``}
`;

const ResultSection = styled.div`
  .title {
    ${({ theme }) => theme.font.desktop.body1b};
    color: ${({ theme }) => theme.color.gray800};
    margin-bottom: 24px;
    margin-top: 36px;
  }

  .card-container {
    display: flex;
    gap: 12px;

    > * {
      flex: 1;
    }
  }
`;

const StyledNoBubble = styled.div`
  width: 184px;
  height: 184px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  color: ${({ theme }) => theme.color.primary800};
  ${({ theme }) => theme.font.desktop.body1b};

  border-radius: 50%;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(255, 255, 255, 0) 76%,
    rgba(204, 179, 253, 0.4) 100%
  );

  box-shadow:
    -0.319px 51.263px 151.773px 0px rgba(48, 13, 115, 0.12),
    -0.04px 6.444px 21.116px 0px rgba(48, 13, 115, 0.06);

  animation: ${moveUp} 3000ms ease-in-out infinite;
`;

const StyledBubble = styled.div<{ $weight: number }>`
  width: ${({ $weight }) => $weight * 244}px;
  height: ${({ $weight }) => $weight * 244}px;

  display: flex;
  justify-content: center;
  align-items: center;
  will-change: transform;

  text-align: center;
  color: ${({ theme }) => theme.color.primary800};
  ${({ theme }) => theme.font.desktop.body1b};

  position: absolute;

  border-radius: 50%;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(255, 255, 255, 0) 76%,
    rgba(204, 179, 253, 0.4) 100%
  );

  box-shadow:
    -0.319px 51.263px 151.773px 0px rgba(48, 13, 115, 0.12),
    -0.04px 6.444px 21.116px 0px rgba(48, 13, 115, 0.06);

  &.b0 {
    bottom: 7%;
    right: 15%;

    animation:
      ${moveDown} 2000ms ease-in-out infinite,
      ${moveLeft} 3000ms ease-in-out infinite;
  }

  &.b1 {
    top: 5%;
    left: 30%;

    animation:
      ${moveDown} 3000ms ease-in-out infinite,
      ${moveRight} 2000ms ease-in-out infinite;
  }

  &.b2 {
    bottom: 6%;
    left: 15%;

    animation:
      ${moveUp} 2500ms ease-in-out infinite,
      ${moveLeft} 3000ms ease-in-out infinite;
  }

  &.b3 {
    top: 4%;
    left: 4%;

    animation:
      ${moveUp} 2300ms ease-in-out infinite,
      ${moveLeft} 2700ms ease-in-out infinite;
  }

  &.b4 {
    top: 10%;
    right: 5%;

    animation:
      ${moveDown} 2500ms ease-in-out infinite,
      ${moveRight} 2300ms ease-in-out infinite;
  }

  &.b5 {
    bottom: 10%;
    right: 5%;

    animation:
      ${moveUp} 2600ms ease-in-out infinite,
      ${moveRight} 3000ms ease-in-out infinite;
  }

  &.sole {
    background: green;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const NoResultText = styled.div`
  text-align: center;
  margin-top: 56px;
  margin-bottom: 24px;

  .title {
    ${({ theme }) => theme.font.desktop.title2};
    color: ${({ theme }) => theme.color.gray700};
  }

  .subtitle {
    ${({ theme }) => theme.font.desktop.body1m};
    color: ${({ theme }) => theme.color.gray500};
  }
`;
