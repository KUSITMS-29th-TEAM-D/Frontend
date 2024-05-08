import React from 'react';

import styled from 'styled-components';

import { SectionContainer } from '@/styles';

import { DefineComponent, DesignComponent, DiscoverComponent } from './UnderstandCard';

const CardContainer = styled.div`
  width: 680px;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  display: inline-flex;
`;
const CardInerContainer = styled.div`
  box-shadow: 0px 0px 10px rgba(87, 11, 255, 0.15);
  border-radius: 16px;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  display: flex;
`;

const CardInnerContainer = styled.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  display: inline-flex;
`;

const StyledContainer = styled.section`
  background: ${({ theme }) => `linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 27%,
      rgba(232, 221, 254, 0.45) 40%,
      ${theme.color.secondary100} 100%
    ),
    ${theme.color.white}`};
`;

const StyledSectionContainer = styled(SectionContainer)`
  padding: 64px;
  padding-top: 140px;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  overflow: hidden;
`;

const SubContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: flex-start;
  display: inline-flex;
`;

const TextContainer = styled.div`
  width: 380px;
  height: 120px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: inline-flex;
  text-align: left;
`;

const TextTitle = styled.span`
  color: ${(props) => props.theme.color.gray900};
  ${({ theme }) => theme.font.desktop.h1};
`;

const TextHighlight = styled.span`
  color: ${(props) => props.theme.color.primary500};
  ${({ theme }) => theme.font.desktop.h1};
`;

const TextDetail = styled.div`
  align-self: stretch;
  color: ${(props) => props.theme.color.gray900};
  ${({ theme }) => theme.font.desktop.title2};
`;

const UnderstandView = () => {
  return (
    <StyledContainer>
      <StyledSectionContainer>
        <SubContainer>
          <TextContainer>
            <div>
              <TextTitle>
                나를 이해하고
                <br />
                브랜딩하는
              </TextTitle>
              <TextHighlight> 셀피스</TextHighlight>
            </div>
            <TextDetail>셀피스에서 찾은 나의 조각을 새롭게 발전시키고 싶다면?</TextDetail>
          </TextContainer>
          <CardContainer>
            <CardInerContainer>
              <DiscoverComponent />
            </CardInerContainer>
            <CardInnerContainer>
              <DefineComponent />
              <DesignComponent />
            </CardInnerContainer>
          </CardContainer>
        </SubContainer>
      </StyledSectionContainer>
    </StyledContainer>
  );
};

export default UnderstandView;
