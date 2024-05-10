import styled from 'styled-components';

import { SectionContainer } from '@/styles';

import {
  DesignButtonView1,
  DesignButtonView2,
  DesignButtonView3,
  DesignButtonView4,
  DesignButtonView5,
} from './DesignButtonView';
import { DesignChips1 } from './DesignChip';
import {
  DesignTextView1,
  DesignTextView2,
  DesignTextView3,
  DesignTextView4,
  DesignTextView5,
} from './DesignTextView';

const StyledSectionContainer = styled(SectionContainer)`
  padding: 64px;
  padding-top: 140px;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  overflow: hidden;
`;

const StyledContainer = styled.section`
  background: ${({ theme }) => `${theme.color.primary50}`};
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 102px;
  display: inline-flex;
`;

export const DesignTestView1 = () => {
  return (
    <>
      <StyledContainer>
        <StyledSectionContainer>
          <Container>
            <DesignTextView1 />
            <DesignChips1 />
            <DesignButtonView1 />
          </Container>
        </StyledSectionContainer>
      </StyledContainer>
    </>
  );
};

export const DesignTestView2 = () => {
  return (
    <>
      <StyledContainer>
        <StyledSectionContainer>
          <Container>
            <DesignTextView2 />
            <DesignChips1 />
            <DesignButtonView2 />
          </Container>
        </StyledSectionContainer>
      </StyledContainer>
    </>
  );
};

export const DesignTestView3 = () => {
  return (
    <>
      <StyledContainer>
        <StyledSectionContainer>
          <Container>
            <DesignTextView3 />
            <DesignChips1 />
            <DesignButtonView3 />
          </Container>
        </StyledSectionContainer>
      </StyledContainer>
    </>
  );
};

export const DesignTestView4 = () => {
  return (
    <>
      <StyledContainer>
        <StyledSectionContainer>
          <Container>
            <DesignTextView4 />
            <DesignChips1 />
            <DesignButtonView4 />
          </Container>
        </StyledSectionContainer>
      </StyledContainer>
    </>
  );
};

export const DesignTestView5 = () => {
  return (
    <>
      <StyledContainer>
        <StyledSectionContainer>
          <Container>
            <DesignTextView5 />
            <DesignChips1 />
            <DesignButtonView5 />
          </Container>
        </StyledSectionContainer>
      </StyledContainer>
    </>
  );
};
