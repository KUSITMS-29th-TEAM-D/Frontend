import styled from 'styled-components';

import {
  DesignChips1,
  DesignChips2,
  DesignChips3,
  DesignChips4,
  DesignChips5,
} from '@/components/DesignTest/DesignChip';
import {
  DesignTextView1,
  DesignTextView2,
  DesignTextView3,
  DesignTextView4,
  DesignTextView5,
} from '@/components/DesignTest/DesignTextView';

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;

  background: ${({ theme }) => `${theme.color.primary50}`};
  //min-height: var(--full-height);
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

export const DesignTestView1 = () => {
  return (
    <StyledContainer>
      <StyledContentContainer>
        <DesignTextView1 />
        <DesignChips1 />
      </StyledContentContainer>
    </StyledContainer>
  );
};

export const DesignTestView2 = () => {
  return (
    <StyledContainer>
      <StyledContentContainer>
        <DesignTextView2 />
        <DesignChips2 />
      </StyledContentContainer>
    </StyledContainer>
  );
};

export const DesignTestView3 = () => {
  return (
    <StyledContainer>
      <StyledContentContainer>
        <DesignTextView3 />
        <DesignChips3 />
      </StyledContentContainer>
    </StyledContainer>
  );
};

export const DesignTestView4 = () => {
  return (
    <StyledContainer>
      <StyledContentContainer>
        <DesignTextView4 />
        <DesignChips4 />
      </StyledContentContainer>
    </StyledContainer>
  );
};

export const DesignTestView5 = () => {
  return (
    <StyledContainer>
      <StyledContentContainer>
        <DesignTextView5 />
        <DesignChips5 />
      </StyledContentContainer>
    </StyledContainer>
  );
};
