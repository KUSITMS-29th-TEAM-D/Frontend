import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  height: auto;
  padding: 20px;
  background: ${({ theme }) => `${theme.color.white}`};
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
  color: ${({ theme }) => `${theme.color.gray800}`};
  ${({ theme }) => theme.font.desktop.body1m};
  word-wrap: break-word;
`;

const Description = styled.div`
  align-self: stretch;
  color: ${({ theme }) => `${theme.color.gray500}`};
  ${({ theme }) => theme.font.desktop.label2};
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-wrap;
  max-height: 100px;
`;

const Card = ({ title, description }: { title: string; description: string }) => {
  return (
    <Container>
      <InnerContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </InnerContainer>
    </Container>
  );
};

export default Card;
