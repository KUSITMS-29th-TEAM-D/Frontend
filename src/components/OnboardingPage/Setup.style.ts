import styled from 'styled-components';

import { PlainButton } from '@/components/common/Button/PlainButton';

export const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  .field {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;

export const StyledQuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.font.desktop.body1m};
  color: ${({ theme }) => theme.color.gray900};

  .highlight {
    ${({ theme }) => theme.font.desktop.label2};
    color: ${({ theme }) => theme.color.primary500};
  }
`;

export const StyledPlainButton = styled(PlainButton)`
  margin-top: 20px;
  height: 48px;
`;
