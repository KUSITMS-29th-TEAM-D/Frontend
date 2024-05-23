import styled, { css } from 'styled-components';

interface StyledImageProps {
  $variant: 'type1' | 'type2';
}

const Container = styled.div`
  width: 368px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  overflow: hidden;
  cursor: pointer;
`;

const ImageContainer = styled.div<StyledImageProps>`
  width: 368px;
  height: 230px;
  overflow: hidden;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ${({ $variant }) =>
    $variant === 'type2' &&
    css`
      &:hover {
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(17, 17, 17, 0.36);
          border-radius: 24px;
          z-index: 1;
        }

        ${Overlay} {
          display: flex;
        }
      }
    `}
`;

const StyledImage = styled.img<StyledImageProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  &:hover {
    ${({ $variant }) =>
      $variant === 'type1' &&
      css`
        transform: scale(1.1);
      `}
  }
`;

const Overlay = styled.div`
  flex: 1 1 0;
  align-self: stretch;
  padding: 24px;
  display: none;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
`;

const LinkButtonOverlay = styled.div`
  align-self: stretch;
  height: 48px;
  padding: 8px 24px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  & > div {
    text-align: center;
    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.font.desktop.label1m};
    word-wrap: break-word;
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

const TopText = styled.div<StyledImageProps>`
  text-align: center;
  color: ${({ theme, $variant }) =>
    $variant === 'type1' ? theme.color.primary600 : theme.color.secondary600};
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

interface ExperienceCardProps extends StyledImageProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  programsId: number;
  onClick: () => void;
}

export const ExperienceCard = ({
  imageUrl,
  title,
  subtitle,
  $variant,
  onClick,
}: ExperienceCardProps) => {
  return (
    <Container onClick={onClick}>
      <ImageContainer $variant={$variant}>
        <StyledImage src={imageUrl} alt="Card" $variant={$variant} />
        {$variant === 'type2' && (
          <Overlay>
            <LinkButtonOverlay>
              <div>외부 링크로 이동</div>
            </LinkButtonOverlay>
          </Overlay>
        )}
      </ImageContainer>
      <TextContainer>
        <TopText $variant={$variant}>{title}</TopText>
        <BottomText>{subtitle}</BottomText>
      </TextContainer>
    </Container>
  );
};
