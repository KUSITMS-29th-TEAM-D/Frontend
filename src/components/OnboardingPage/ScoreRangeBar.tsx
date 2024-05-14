import styled from 'styled-components';

interface RangeBarProps {
  score: number;
  setScore: (newScore: number) => void;
}

export const ScoreRangeBar = ({ score, setScore }: RangeBarProps) => {
  return (
    <StyledContainer>
      <div
        className="score"
        style={
          score <= 50
            ? {
                left: `calc(${score}% - ${score * 0.71}px)`, // Adjust the position considering the width of the div
              }
            : { right: `calc(${100 - score}% - ${(100 - score) * 0.71}px)` } // Adjust the position considering the width of the div
        }
      >
        {score}점
      </div>
      <StyledInput
        type="range"
        min={0}
        max={100}
        value={score}
        step={1}
        onChange={(event) => setScore(event.target.valueAsNumber)}
      />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  padding: 10px 0 7px 0;
  position: relative;

  .score {
    position: absolute;
    transform: translateY(-17%);
    z-index: 1;

    ${({ theme }) => theme.font.desktop.body1m};
    color: ${({ theme }) => theme.color.white};
    background: transparent;
    text-align: center;
    width: 71px;

    pointer-events: none;
  }
`;

const StyledInput = styled.input`
  & {
    -webkit-appearance: none;
    appearance: none;
    outline: none;
    cursor: pointer;

    width: 100%;
    height: 16px;

    border-radius: 15px;
    background: ${({ theme }) =>
      `linear-gradient(-90deg, ${theme.color.primary500} 0%, ${theme.color.primary50} 100%)`};
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;

    height: 38px;
    width: 71px;

    background: ${({ theme }) => theme.color.primary500};
    border-radius: 24px;

    transition: 0.2s ease-in-out;
    transform: rotateZ(0deg);
  }

  &::-moz-range-thumb {
    height: 38px;
    width: 71px;
    background: ${({ theme }) => theme.color.primary500};
    border: none;
    border-radius: 24px;
    transform: rotateZ(0deg);
    transition: 0.2s ease-in-out;
  }
`;
