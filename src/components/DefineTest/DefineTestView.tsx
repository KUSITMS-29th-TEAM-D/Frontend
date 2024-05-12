import styled from 'styled-components';

import { SectionContainer } from '@/styles';

import { DefineChips1, DefineChips2, DefineChips3 } from './DefineChip';
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
  width: 100%;
`;

const StyledInnerContainer = styled.div`
  width: 100%;
  height: 702px;
  padding-top: 42px;
  padding-bottom: 48px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
`;

const Container = styled.div`
  width: 100%;
  height: 376px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 52px;
  display: flex;
`;

export const DefineTestView1 = () => {
  return (
    <>
      <StyledContainer>
        <StyledInnerContainer>
          <Container>
            <DefineTextView1 />
            <DefineChips1 />
          </Container>
        </StyledInnerContainer>
      </StyledContainer>
    </>
  );
};

export const DefineTestView2 = () => {
  return (
    <>
      <StyledContainer>
        <StyledSectionContainer>
          <StyledInnerContainer>
            <Container>
              <DefineTextView2 />
              <DefineChips2 />
            </Container>
          </StyledInnerContainer>
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
          <StyledInnerContainer>
            <Container>
              <DefineTextView3 />
              <DefineChips3 />
            </Container>
          </StyledInnerContainer>
        </StyledSectionContainer>
      </StyledContainer>
    </>
  );
};
