import styled from 'styled-components';
const Container = styled.div`
  width: 368px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  overflow: hidden;
  border-radius: 24px;
`;

const ImageContainer = styled.div`
  width: 368px;
  height: 230px;
  overflow: hidden;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const TextContainer = styled.div`
  align-self: stretch;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
`;

const TopText = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.color.primary600};
  ${({ theme }) => theme.font.desktop.label1m};
  word-wrap: break-word;
`;

const BottomText = styled.div`
  align-self: stretch;
  color: ${({ theme }) => theme.color.gray900};
  ${({ theme }) => theme.font.desktop.body1m};
  text-align: left;
  word-wrap: break-word;
`;

interface ExperienceCardProps {
  imageUrl: string;
  title: string;
  subtitle: string;
}

export const ExperienceCard = ({ imageUrl, title, subtitle }: ExperienceCardProps) => {
  return (
    <Container>
      <ImageContainer>
        <StyledImage src={imageUrl} alt="Card" />
      </ImageContainer>
      <TextContainer>
        <TopText>{title}</TopText>
        <BottomText>{subtitle}</BottomText>
      </TextContainer>
    </Container>
  );
};
