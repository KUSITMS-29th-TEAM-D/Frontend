import { useState } from 'react';

import styled from 'styled-components';

import { ReactComponent as AddIcon } from '@/assets/icons/add.svg';

interface InputChipProps {
  onAdd: (chip: string) => void;
}

const InputChipContainer = styled.div`
  width: 102px;
  height: 34px;
  padding: 7px 12px;
  background: ${({ theme }) => `${theme.color.gray100}`};
  color: ${({ theme }) => `${theme.color.gray700}`};
  border-radius: 8px;
  border: 1px ${({ theme }) => `${theme.color.gray200}`} solid;
  display: inline-flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background: ${({ theme }) => `${theme.color.gray150}`};
  }
`;

const InputField = styled.input`
  ${({ theme }) => theme.font.desktop.label1m};
  color: ${({ theme }) => `${theme.color.gray700}`};
  background-color: transparent;
  border: none;
  outline: none;
  min-width: 50px;
  flex-grow: 1;
  &::placeholder {
    background-color: transparent;
    color: ${({ theme }) => `${theme.color.gray700}`};
  }
`;

const IconContainer = styled.div`
  width: 16px;
  height: 16px;
`;

const InputChip = ({ onAdd }: InputChipProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim()) {
      onAdd(inputValue.trim());
      setInputValue('');
    }
  };

  const handleKeyPress = (e: { key: string }) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <InputChipContainer>
      <InputField
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="추가하기"
      />
      <IconContainer>
        <AddIcon />
      </IconContainer>
    </InputChipContainer>
  );
};

export default InputChip;
