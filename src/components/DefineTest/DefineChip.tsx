import { useState, useEffect } from 'react';

import styled from 'styled-components';

import {
  DefineButtonView1,
  DefineButtonView2,
  DefineButtonView3,
} from '@/components/DefineTest/DefineButtonView';
import TestChip from '@/components/common/Chip/TestChip';
import { CHIP_DATA1, CHIP_DATA2, CHIP_DATA3 } from '@/constants/defineChip';

export const DefineChips1 = () => {
  const [chipStates, setChipStates] = useState(Array(CHIP_DATA1.length).fill(1));
  const [warning, setWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState(false);

  useEffect(() => {
    const activeCount = chipStates.filter((state) => state === 2).length;
    setWarning(activeCount < 5 || activeCount > 5);
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

    const selectedChips1 = newChipStates.reduce((selected, state, i) => {
      if (state === 2) {
        selected.push(CHIP_DATA1[i]);
      }
      return selected;
    }, []);
    sessionStorage.setItem('selectedChips1', JSON.stringify(selectedChips1));
  };

  return (
    <StyledContainer>
      <KeywordContainer>
        {CHIP_DATA1.map((text, index) => (
          <TestChip
            key={index}
            chipText={text}
            state={chipStates[index]}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </KeywordContainer>
      <DefineButtonView1 warning={warning} warningMessage={warningMessage} />
    </StyledContainer>
  );
};
export const DefineChips2 = () => {
  const [chipStates, setChipStates] = useState(Array(CHIP_DATA2.length).fill(1));
  const [warning, setWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState(false);

  useEffect(() => {
    const activeCount = chipStates.filter((state) => state === 2).length;
    setWarning(activeCount < 5 || activeCount > 5);
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

    const selectedChips = newChipStates.reduce((selected, state, i) => {
      if (state === 2) {
        selected.push(CHIP_DATA2[i]);
      }
      return selected;
    }, []);

    sessionStorage.setItem('selectedChips2', JSON.stringify(selectedChips));
  };

  return (
    <StyledContainer>
      <KeywordContainer>
        {CHIP_DATA2.map((text, index) => (
          <TestChip
            key={index}
            chipText={text}
            state={chipStates[index]}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </KeywordContainer>
      <DefineButtonView2 warning={warning} warningMessage={warningMessage} />
    </StyledContainer>
  );
};

export const DefineChips3 = () => {
  const [chipStates, setChipStates] = useState(Array(CHIP_DATA3.length).fill(1));
  const [warning, setWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState(false);

  useEffect(() => {
    const activeCount = chipStates.filter((state) => state === 2).length;
    setWarning(activeCount < 5 || activeCount > 5);
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

    const selectedChips = newChipStates.reduce((selected, state, i) => {
      if (state === 2) {
        selected.push(CHIP_DATA3[i]);
      }
      return selected;
    }, []);

    sessionStorage.setItem('selectedChips3', JSON.stringify(selectedChips));
  };

  return (
    <StyledContainer>
      <KeywordContainer>
        {CHIP_DATA3.map((text, index) => (
          <TestChip
            key={index}
            chipText={text}
            state={chipStates[index]}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </KeywordContainer>
      <DefineButtonView3 warning={warning} warningMessage={warningMessage} />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 95px;
  justify-content: space-between;
`;

const KeywordContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;

  margin-top: 52px;

  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 32px;
    gap: 8px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 32px;
    gap: 8px;
  }
`;