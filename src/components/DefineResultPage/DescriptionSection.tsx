import styled from 'styled-components';

import Scrollbar from '@/components/Scrollbar';
import { Chip } from '@/components/common/Chip';

interface DescriptionSectionProps {
  // TODO: 타입 재정의 필요
  result: {
    keyword: string;
    piece: string;
    piece2: string;
    ability: string;
    pros: string;
    prefer: string;
    type: string[];
    selected: string[];
  };
}

export const DescriptionSection = ({ result }: DescriptionSectionProps) => {
  return (
    <StyledContainer>
      <div className="inner-container">
        <StyledHollandExplanation>
          <p className="selpiece">
            셀피스의 조각카드는, <span className="highlight">홀랜드 검사</span>를 기반으로
            구성되어있어요 :)
          </p>
          <p className="holland">
            홀랜드 검사는 나의 성격에 적합한 직무의 유형을 파악하는, 직업적 성격 유형 검사랍니다.
          </p>
        </StyledHollandExplanation>
        <StyledDescriptionSection>
          <div className="title">주요 능력</div>
          <p className="DescriptionSection">{result.ability}</p>
        </StyledDescriptionSection>
        <StyledDescriptionSection>
          <div className="title">가치</div>
          <p className="DescriptionSection">{result.ability}</p>
        </StyledDescriptionSection>
        <StyledDescriptionSection>
          <div className="title">이런 부분에서 강점을 보여요!</div>
          <p className="DescriptionSection">{result.pros}</p>
        </StyledDescriptionSection>
        <StyledDescriptionSection>
          <div className="title">이러한 특성의 직업을 선호하는 경향이 있어요!</div>
          <p className="DescriptionSection">{result.prefer}</p>
        </StyledDescriptionSection>
        <StyledDescriptionSection>
          <div className="title">나의 유형 키워드</div>
          <div className="chips">
            {result.type.map((item) => (
              <Chip key={item} primary>
                {item}
              </Chip>
            ))}
          </div>
        </StyledDescriptionSection>
        <StyledDescriptionSection>
          <div className="title">내가 선택한 유형 키워드</div>
          <div className="chips">
            {result.selected.map((item) => (
              <Chip key={item} primary>
                {item}
              </Chip>
            ))}
          </div>
        </StyledDescriptionSection>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.section`
  width: 852px;

  padding: 20px 0px 20px 24px;

  border-radius: 16px;
  border: 2px solid ${({ theme }) => theme.color.primary50};
  background: rgba(255, 255, 255, 0.8);

  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.3));

  .inner-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;

    overflow-y: scroll;
    ${Scrollbar}
  }
`;

const StyledHollandExplanation = styled.div`
  padding: 16px;
  width: max-content;
  margin: 0 auto;

  border-radius: 8px;
  background: ${({ theme }) => theme.color.gray150};

  text-align: center;
  color: ${({ theme }) => theme.color.gray700};

  .selpiece {
    ${({ theme }) => theme.font.desktop.label1m};
    margin-bottom: 4px;
    .highlight {
      color: ${({ theme }) => theme.color.secondary500};
    }
  }

  .holland {
    ${({ theme }) => theme.font.desktop.label2};
  }
`;

const StyledDescriptionSection = styled.div`
  .title {
    ${({ theme }) => theme.font.desktop.body1b};
    color: ${({ theme }) => theme.color.gray900};
    margin-bottom: 8px;
  }

  .DescriptionSection {
    ${({ theme }) => theme.font.desktop.label1r};
    color: ${({ theme }) => theme.color.gray700};
    white-space: pre-wrap;
    word-break: break-all;
  }

  .chips {
    display: flex;
    gap: 8px;
  }
`;
