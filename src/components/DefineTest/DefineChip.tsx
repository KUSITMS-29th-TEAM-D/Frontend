import { useState, useEffect } from 'react';

import styled from 'styled-components';

import TestChip from '@/components/common/Chip/TestChip';

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

const KeywordContainer = styled.div`
  width: 100%;
  height: 100%;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  gap: 16px;
  display: flex;
  flex-wrap: wrap;
`;

export const DefineChips1 = () => {
  const [chipStates, setChipStates] = useState(Array(chipData1.length).fill(1));
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    if (warning) {
      const timer = setTimeout(() => {
        setWarning(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [warning]);

  const handleToggle = (index: number) => {
    const newChipStates = [...chipStates];
    const activeCount = newChipStates.filter((state) => state === 2).length;

    if (newChipStates[index] === 1 && activeCount > 4) {
      setWarning(true);
      return;
    }

    newChipStates[index] = newChipStates[index] === 1 ? 2 : 1;
    setChipStates(newChipStates);
  };

  return (
    <KeywordContainer>
      {chipData1.map((text, index) => (
        <TestChip
          key={index}
          chipText={text}
          state={chipStates[index]}
          onToggle={() => handleToggle(index)}
        />
      ))}
      {warning && <div>키워드를 5개만 선택해 주세요!</div>}
    </KeywordContainer>
  );
};
