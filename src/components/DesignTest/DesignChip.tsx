import { useState, useEffect } from 'react';

import styled from 'styled-components';

import { ReactComponent as Instagram } from '@/assets/icons/instagram.svg';
import { ReactComponent as LinkedIn } from '@/assets/icons/linkedIn.svg';
import { ReactComponent as Medium } from '@/assets/icons/medium.svg';
import { ReactComponent as NaverBlog } from '@/assets/icons/naverBlog.svg';
import { ReactComponent as Pinterest } from '@/assets/icons/pinterest.svg';
import { ReactComponent as YouTube } from '@/assets/icons/youtube.svg';
import {
  DesignButtonView1,
  DesignButtonView2,
  DesignButtonView3,
  DesignButtonView4,
  DesignButtonView5,
} from '@/components/DesignTest/DesignButtonView';
import InputChip from '@/components/common/Chip/InputChip';
import { KeywordChip } from '@/components/common/Chip/KeywordChip';
import { PlatformChip } from '@/components/common/Chip/PlatformChip';
import { CHIP_DATA1, CHIP_DATA2, CHIP_DATA3, CHIP_DATA4, CHIP_DATA5 } from '@/constants/designChip';

export const DesignChips1 = () => {
  const [chipStates, setChipStates] = useState(Array(CHIP_DATA1.length).fill(1));
  const [warning, setWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState(false);

  useEffect(() => {
    const activeCount = chipStates.filter(($state) => $state === 2).length;
    setWarning(activeCount < 1 || activeCount > 3);
    setWarningMessage(activeCount > 3);
  }, [chipStates]);

  const handleToggle = (index: number) => {
    const newChipStates = [...chipStates];
    if (newChipStates[index] === 2) {
      newChipStates[index] = 1;
    } else {
      newChipStates[index] = 2;
    }

    setChipStates(newChipStates);

    const selectedChips1 = newChipStates.reduce((selected, $state, i) => {
      if ($state === 2) {
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
          <KeywordChip
            key={index}
            selected={chipStates[index] !== 1}
            toggleHandler={() => handleToggle(index)}
          >
            {text}
          </KeywordChip>
        ))}
      </KeywordContainer>
      <DesignButtonView1 warning={warning} warningMessage={warningMessage} />
    </StyledContainer>
  );
};
export const DesignChips2 = () => {
  const [chipStates, setChipStates] = useState(Array(CHIP_DATA2.length).fill(1));
  const [chips, setChips] = useState(CHIP_DATA2);
  const [warning, setWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState(false);

  useEffect(() => {
    const activeCount = chipStates.filter((state) => state === 2).length;
    setWarning(activeCount < 1 || activeCount > 3);
    setWarningMessage(activeCount > 3);
  }, [chipStates]);

  const handleToggle = (index: number) => {
    const newChipStates = [...chipStates];
    newChipStates[index] = newChipStates[index] === 2 ? 1 : 2;
    setChipStates(newChipStates);

    const selectedChips2 = newChipStates.reduce((selected, state, i) => {
      if (state === 2) {
        selected.push(chips[i]);
      }
      return selected;
    }, []);

    sessionStorage.setItem('selectedChips2', JSON.stringify(selectedChips2));
  };
  const handleAddChip = (chip: string) => {
    const newChips = [...chips, chip];
    const newChipStates = [...chipStates, 2];
    setChips(newChips);
    setChipStates(newChipStates);
    const selectedChips2 = newChipStates.reduce((selected, state, i) => {
      if (state === 2) {
        selected.push(newChips[i]);
      }
      return selected;
    }, []);
    sessionStorage.setItem('selectedChips2', JSON.stringify(selectedChips2));
  };

  return (
    <StyledContainer>
      <KeywordContainer>
        {chips.map((text, index) => (
          <KeywordChip
            key={index}
            selected={chipStates[index] !== 1}
            toggleHandler={() => handleToggle(index)}
          >
            {text}
          </KeywordChip>
        ))}
        <InputChip onAdd={handleAddChip} />
      </KeywordContainer>
      <DesignButtonView2 warning={warning} warningMessage={warningMessage} />
    </StyledContainer>
  );
};

export const DesignChips3 = () => {
  const [chipStates, setChipStates] = useState(Array(CHIP_DATA3.length).fill(1));
  const [chips, setChips] = useState(CHIP_DATA3);
  const [warning, setWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState(false);

  useEffect(() => {
    const activeCount = chipStates.filter((state) => state === 2).length;
    setWarning(activeCount < 1 || activeCount > 5);
    setWarningMessage(activeCount > 5);
  }, [chipStates]);

  const handleToggle = (index: number) => {
    const newChipStates = [...chipStates];
    newChipStates[index] = newChipStates[index] === 2 ? 1 : 2;
    setChipStates(newChipStates);

    const selectedChips3 = newChipStates.reduce((selected, state, i) => {
      if (state === 2) {
        selected.push(chips[i]);
      }
      return selected;
    }, []);

    sessionStorage.setItem('selectedChips3', JSON.stringify(selectedChips3));
  };
  const handleAddChip = (chip: string) => {
    const newChips = [...chips, chip];
    const newChipStates = [...chipStates, 2];
    setChips(newChips);
    setChipStates(newChipStates);
    const selectedChips3 = newChipStates.reduce((selected, state, i) => {
      if (state === 2) {
        selected.push(newChips[i]);
      }
      return selected;
    }, []);
    sessionStorage.setItem('selectedChips3', JSON.stringify(selectedChips3));
  };

  return (
    <StyledContainer>
      <KeywordContainer>
        {chips.map((text, index) => (
          <KeywordChip
            key={index}
            selected={chipStates[index] !== 1}
            toggleHandler={() => handleToggle(index)}
          >
            {text}
          </KeywordChip>
        ))}
        <InputChip onAdd={handleAddChip} />
      </KeywordContainer>
      <DesignButtonView3 warning={warning} warningMessage={warningMessage} />
    </StyledContainer>
  );
};

export const DesignChips4 = () => {
  const [chipStates, setChipStates] = useState(Array(CHIP_DATA4.length).fill(1));
  const [warning, setWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState(false);

  useEffect(() => {
    const activeCount = chipStates.filter((state) => state === 2).length;
    setWarning(activeCount < 1 || activeCount > 2);
    setWarningMessage(activeCount > 2);
  }, [chipStates]);

  const handleToggle = (index: number) => {
    const newChipStates = [...chipStates];

    if (newChipStates[index] === 2) {
      newChipStates[index] = 1;
    } else {
      newChipStates[index] = 2;
    }

    setChipStates(newChipStates);

    const selectedChips4 = newChipStates.reduce((selected, state, i) => {
      if (state === 2) {
        selected.push(CHIP_DATA4[i]);
      }
      return selected;
    }, []);

    sessionStorage.setItem('selectedChips4', JSON.stringify(selectedChips4));
  };

  return (
    <StyledContainer>
      <PlatformContainer>
        {CHIP_DATA4.map((platform, index) => (
          <PlatformChip
            key={index}
            chipIcon={ICON_MAP[platform]}
            state={chipStates[index]}
            index={index}
            onToggle={handleToggle}
            text={platform}
          />
        ))}
      </PlatformContainer>
      <DesignButtonView4 warning={warning} warningMessage={warningMessage} />
    </StyledContainer>
  );
};

export const DesignChips5 = () => {
  const [chipStates, setChipStates] = useState(Array(CHIP_DATA5.length).fill(1));
  const [chips, setChips] = useState(CHIP_DATA5);
  const [warning, setWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState(false);

  useEffect(() => {
    const activeCount = chipStates.filter((state) => state === 2).length;
    setWarning(activeCount < 1 || activeCount > 1);
    setWarningMessage(activeCount > 1);
  }, [chipStates]);

  const handleToggle = (index: number) => {
    const newChipStates = [...chipStates];
    newChipStates[index] = newChipStates[index] === 2 ? 1 : 2;
    setChipStates(newChipStates);

    const selectedChip = newChipStates[index] === 2 ? chips[index] : '';
    sessionStorage.setItem('selectedChip5', selectedChip);
  };

  const handleAddChip = (chip: string) => {
    sessionStorage.setItem('selectedChip5', chip);

    const newChips = [...chips, chip];
    const newChipStates = [...chipStates, 2];
    setChips(newChips);
    setChipStates(newChipStates);
  };

  return (
    <StyledContainer>
      <KeywordContainer>
        {chips.map((text, index) => (
          <KeywordChip
            key={index}
            selected={chipStates[index] !== 1}
            toggleHandler={() => handleToggle(index)}
          >
            {text}
          </KeywordChip>
        ))}
        <InputChip onAdd={handleAddChip} />
      </KeywordContainer>
      <DesignButtonView5 warning={warning} warningMessage={warningMessage} />
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
  gap: 12px;

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

const PlatformContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 12px;

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

const ICON_MAP: { [key: string]: React.ReactNode } = {
  Youtube: <YouTube />,
  LinkedIn: <LinkedIn />,
  'Naver Blog': <NaverBlog />,
  Pinterest: <Pinterest />,
  Instagram: <Instagram />,
  Medium: <Medium />,
};
