import styled from 'styled-components';

import { DefineChips1, DefineChips2, DefineChips3 } from '@/components/DefineTest/DefineChip';
import {
  DefineTextView1,
  DefineTextView2,
  DefineTextView3,
} from '@/components/DefineTest/DefineTextView';

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;

  background: ${({ theme }) => `${theme.color.primary50}`};
  min-height: 100vh;

  padding: 118px 0 48px 0;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 24px;
    padding-top: 100px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    padding: 20px;
    padding-top: 96px;
  }
`;

const StyledContentContainer = styled.div`
  width: 632px;
  height: 100%;

  margin: 0 auto;
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.device.tablet} {
    width: 552px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
`;

export const DefineTestView1 = () => {
  return (
    <StyledContainer>
      <StyledContentContainer>
        <DefineTextView1 />
        <DefineChips1 />
      </StyledContentContainer>
    </StyledContainer>
  );
};

export const DefineTestView2 = () => {
  return (
    <StyledContainer>
      <StyledContentContainer>
        <DefineTextView2 />
        <DefineChips2 />
      </StyledContentContainer>
    </StyledContainer>
  );
};

export const DefineTestView3 = () => {
  return (
    <StyledContainer>
      <StyledContentContainer>
        <DefineTextView3 />
        <DefineChips3 />
      </StyledContentContainer>
    </StyledContainer>
  );
};
