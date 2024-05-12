import { useState, useEffect } from 'react';

import styled from 'styled-components';

import TestChip from '@/components/common/Chip/TestChip';

import { DefineButtonView1, DefineButtonView2, DefineButtonView3 } from './DefineButtonView';

const chipData1 = [
  '남성적임',
  '솔직함',
  '검소함',
  '소박함',
  '말이적음',
  '어울리기 좋아함',
  '단순함',
  '이상주의적',
  '분석적',
  '이해심 많음',
  '잘도와줌',
  '봉사적',
  '감정적',
  '사람 좋아함',
  '친절함',
  '신체적으로 건강함',
];

const chipData2 = [
  '남성적임',
  '솔직함',
  '검소함',
  '소박함',
  '말이적음',
  '어울리기 좋아함',
  '단순함',
  '이상주의적',
  '분석적',
  '이해심 많음',
  '잘도와줌',
  '봉사적',
  '감정적',
  '사람 좋아함',
  '친절함',
  '신체적으로 건강함',
];

const chipData3 = [
  '남성적임',
  '솔직함',
  '검소함',
  '소박함',
  '말이적음',
  '어울리기 좋아함',
  '단순함',
  '이상주의적',
  '분석적',
  '이해심 많음',
  '잘도와줌',
  '봉사적',
  '감정적',
  '사람 좋아함',
  '친절함',
  '신체적으로 건강함',
];

const KeywordContainer = styled.div`
  width: 632px;
  height: 100%;
  justify-content: center;
  align-items: center;
  column-gap: 12px;
  display: inline-flex;
  flex-wrap: wrap;
  margin-top: 25px;
`;
export const DefineChips1 = () => {
  const [chipStates, setChipStates] = useState(Array(chipData1.length).fill(1));
  const [warning, setWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState(false);

  useEffect(() => {
    const activeCount = chipStates.filter((state) => state === 2).length;
    setWarning(activeCount < 1 || activeCount > 5);
    setWarningMessage(activeCount > 5);
  }, [chipStates]);

  const handleToggle = (index: number) => {
    const newChipStates = [...chipStates];
    const currentCount = newChipStates.filter((state) => state === 2).length;

    if (newChipStates[index] === 2) {
      newChipStates[index] = 1;
    } else if (currentCount < 6) {
      newChipStates[index] = 2;
    }

    setChipStates(newChipStates);
  };

  return (
    <>
      <KeywordContainer>
        {chipData1.map((text, index) => (
          <TestChip
            key={index}
            chipText={text}
            state={chipStates[index]}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </KeywordContainer>

      <DefineButtonView1 warning={warning} warningMessage={warningMessage} />
    </>
  );
};

export const DefineChips2 = () => {
  const [chipStates, setChipStates] = useState(Array(chipData2.length).fill(1));
  const [warning, setWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState(false);

  useEffect(() => {
    const activeCount = chipStates.filter((state) => state === 2).length;
    setWarning(activeCount < 1 || activeCount > 5);
    setWarningMessage(activeCount > 5);
  }, [chipStates]);

  const handleToggle = (index: number) => {
    const newChipStates = [...chipStates];
    const currentCount = newChipStates.filter((state) => state === 2).length;

    if (newChipStates[index] === 2) {
      newChipStates[index] = 1;
    } else if (currentCount < 6) {
      newChipStates[index] = 2;
    }

    setChipStates(newChipStates);
  };

  return (
    <>
      <KeywordContainer>
        {chipData2.map((text, index) => (
          <TestChip
            key={index}
            chipText={text}
            state={chipStates[index]}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </KeywordContainer>
      <DefineButtonView2 warning={warning} warningMessage={warningMessage} />
    </>
  );
};

export const DefineChips3 = () => {
  const [chipStates, setChipStates] = useState(Array(chipData3.length).fill(1));
  const [warning, setWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState(false);

  useEffect(() => {
    const activeCount = chipStates.filter((state) => state === 2).length;
    setWarning(activeCount < 1 || activeCount > 5);
    setWarningMessage(activeCount > 5);
  }, [chipStates]);

  const handleToggle = (index: number) => {
    const newChipStates = [...chipStates];
    const currentCount = newChipStates.filter((state) => state === 2).length;

    if (newChipStates[index] === 2) {
      newChipStates[index] = 1;
    } else if (currentCount < 6) {
      newChipStates[index] = 2;
    }

    setChipStates(newChipStates);
  };

  return (
    <>
      <KeywordContainer>
        {chipData3.map((text, index) => (
          <TestChip
            key={index}
            chipText={text}
            state={chipStates[index]}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </KeywordContainer>
      <DefineButtonView3 warning={warning} warningMessage={warningMessage} />
    </>
  );
};
