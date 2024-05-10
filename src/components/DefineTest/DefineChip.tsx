import styled from 'styled-components';

import TestChip from '@/components/common/Chip/TestChip';

interface DefineChipProps {
  chipText: string;
}

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

const DefineChip = ({ chipText }: DefineChipProps) => <TestChip chipText={chipText} />;

export const DefineChips1 = () => {
  return (
    <KeywordContainer>
      {chipData1.map((text, index) => (
        <DefineChip key={index} chipText={text} />
      ))}
    </KeywordContainer>
  );
};
