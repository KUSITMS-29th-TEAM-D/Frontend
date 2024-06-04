import styled from 'styled-components';

const Card = ({ title, description }: { title: string; description: string }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 300px;
  height: 112px;
  padding: 20px;
  background: ${({ theme }) => `${theme.color.white}`};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.13);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.div`
  color: ${({ theme }) => `${theme.color.gray800}`};
  ${({ theme }) => theme.font.desktop.body1m};
  word-wrap: break-word;
`;

const Description = styled.div`
  color: ${({ theme }) => `${theme.color.gray500}`};
  ${({ theme }) => theme.font.desktop.label2};
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-wrap;
`;
