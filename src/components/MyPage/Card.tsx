import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  height: auto;
  padding: 20px;
  background: white;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.13);
  border-radius: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  display: inline-flex;
`;

const InnerContainer = styled.div`
  align-self: stretch;
  height: 72px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
  display: flex;
`;

const Title = styled.div`
  align-self: stretch;
  color: #242424;
  font-size: 18px;
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 500;
  line-height: 28px;
  word-wrap: break-word;
`;

const Description = styled.div`
  align-self: stretch;
  color: #6f6f6f;
  font-size: 12px;
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-wrap;
  max-height: 100px;
`;

const Card = () => {
  return (
    <Container>
      <InnerContainer>
        <Title>ERD 설계 방법에 관하여</Title>
        <Description>
          모든 국민은 종교의 자유를 가진다. 사면·감형 및 복권에 관한 사항은 법률로 정한다. 국회는
          국정을 감사하거나 특정한 국정사안에 대하여 조사할 수 있으며, 이에 필요한 서류의 제출 또는
          증인의 출석과 증언이나 의견의 진술을 요구할 수 있다.
          <br />
          재의의 요구가 있을 때에는 국회는 재의에 붙이고, 재적의원과반수의 출석과 출석의원 3분의 2
          이상의 찬성으로 전과 같은 의결을 하면 그 법률안은 법률로서 확정된다.
        </Description>
      </InnerContainer>
    </Container>
  );
};

export default Card;
