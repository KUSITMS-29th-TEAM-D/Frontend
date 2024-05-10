import styled from 'styled-components';

import { SectionContainer } from '@/styles';

import { DefineButtonView1, DefineButtonView2, DefineButtonView3 } from './DefineButtonView';
import { DefineChips1 } from './DefineChip';
import { DefineTextView1, DefineTextView2, DefineTextView3 } from './DefineTextView';

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

export const DefineTestView1 = () => {
  return (
    <>
      <StyledContainer>
        <StyledSectionContainer>
          <Container>
            <DefineTextView1 />
            <DefineChips1 />
            <DefineButtonView1 />
          </Container>
        </StyledSectionContainer>
      </StyledContainer>
    </>
  );
};

export const DefineTestView2 = () => {
  return (
    <>
      <StyledContainer>
        <StyledSectionContainer>
          <Container>
            <DefineTextView2 />
            <DefineChips1 />
            <DefineButtonView2 />
          </Container>
        </StyledSectionContainer>
      </StyledContainer>
    </>
  );
};

export const DefineTestView3 = () => {
  return (
    <>
      <StyledContainer>
        <StyledSectionContainer>
          <Container>
            <DefineTextView3 />
            <DefineChips1 />
            <DefineButtonView3 />
          </Container>
        </StyledSectionContainer>
      </StyledContainer>
    </>
  );
};
