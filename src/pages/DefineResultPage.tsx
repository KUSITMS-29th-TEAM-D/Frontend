import styled from 'styled-components';

import { CardSection } from '@/components/DefineResultPage/CardSection';
import { DescriptionSection } from '@/components/DefineResultPage/DescriptionSection';

const Dummy = {
  keyword: '예술을 찾아 탐험하는',
  piece: '크리에이터',
  piece2: 'Creator',
  ability: '새로운 아이디어를 탐색하고 창의적인 표현을 통해 세상을 이해하는 능력',
  value: ['생산성', '지혜', '창의성'],
  pros: '기계적 운동적인 능력은 있으나 대인관계능력은 조금 부족해요.\n연구 능력과 수학적, 과학적인 능력은 높지만 지도력이나 설득력이 부족할 때도 있어요.\n상징적 자유적 비체계적 능력은 있으나 체계적 순서적인 능력은 부족해요.',
  prefer:
    '예술적 창조와 표현, 변화와 다양성을 좋아하고, 틀에 박힌것을 싫어해요. 모호하고 자유로운 활동들을 좋아하고 관찰적, 상징적 현상의 창조적인 탐구를 수반하는 활동들에 흥미를 보여요. 그러나 사회적이고 반복적인 활동들에서는 관심이 부족한 경향이 있어요.예술적 창조와 표현, 변화와 다양성을 좋아하고, 틀에 박힌것을 싫어해요. 모호하고 자유로운 활동들을 좋아하고 관찰적, 상징적 현상의 창조적인 탐구를 수반하는 활동들에 흥미를 보여요. 그러나 사회적이고 반복적인 활동들에서는 관심이 부족한 경향이 있어요.예술적 창조와 표현, 변화와 다양성을 좋아하고, 틀에 박힌것을 싫어해요. 모호하고 자유로운 활동들을 좋아하고 관찰적, 상징적 현상의 창조적인 탐구를 수반하는 활동들에 흥미를 보여요. 그러나 사회적이고 반복적인 활동들에서는 관심이 부족한 경향이 있어요.',
  type: ['현실형', '예술형', '탐구형'],
  selected: ['솔직한', '배려깊은', '적극적인'],
};

export const DefineResultPage = () => {
  return (
    <StyledContainer>
      <StyledInnerContainer>
        <StyledTitle>
          <div className="description">정의하기 테스트의 결과에요!</div>
          <div className="result">
            <span>{Dummy.keyword} 당신은, </span>
            <span className="highlight">
              {Dummy.piece} {Dummy.piece2}
            </span>
          </div>
        </StyledTitle>
        <StyledContent>
          <CardSection piece={Dummy.piece2.toLowerCase()} />
          <DescriptionSection result={Dummy} />
        </StyledContent>
      </StyledInnerContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.section`
  min-height: 100vh;
  padding: 40px 64px;

  background: ${({ theme }) =>
    `linear-gradient(180deg, ${theme.color.white} 0%, ${theme.color.primary100} 100%)`};

  @media ${({ theme }) => theme.device.tablet} {
    padding: 24px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    padding: 24px;
  }
`;

const StyledInnerContainer = styled.div`
  width: fit-content;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
`;

const StyledTitle = styled.div`
  text-align: center;

  .description {
    ${({ theme }) => theme.font.desktop.body1b};
    color: ${({ theme }) => theme.color.gray600};
    margin-bottom: 10px;
  }

  .result {
    ${({ theme }) => theme.font.desktop.title1};
    color: ${({ theme }) => theme.color.gray700};

    .highlight {
      color: ${({ theme }) => theme.color.primary500};
    }
  }

  @media ${({ theme }) => theme.device.tablet} {
    .description {
      ${({ theme }) => theme.font.mobile.body1b};
    }

    .result {
      ${({ theme }) => theme.font.mobile.title1};
      display: flex;
      flex-direction: column;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    .description {
      ${({ theme }) => theme.font.mobile.body1b};
    }

    .result {
      ${({ theme }) => theme.font.mobile.title1};
      display: flex;
      flex-direction: column;
    }
  }
`;

const StyledContent = styled.div`
  display: flex;
  gap: 36px;
  height: 458px;
  width: fit-content;

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
    align-items: center;
    height: auto;
  }

  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;
