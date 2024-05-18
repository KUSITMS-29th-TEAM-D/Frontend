import { styled } from 'styled-components';

export const ImageSection = () => {
  return (
    <StyledContainer>
      <TitleContainer>프로그램 소개</TitleContainer>
      <ImageBorderContainer>
        <ImageContainer>기ㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣ다란 이미지</ImageContainer>
      </ImageBorderContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  display: inline-flex;
`;

const TitleContainer = styled.div`
  text-align: center;
  color: ${({ theme }) => `${theme.color.gray900}`};
  ${({ theme }) => theme.font.desktop.title1};
`;

const ImageBorderContainer = styled.div`
  align-self: stretch;
  padding: 32px;
  background-color: ${({ theme }) => `${theme.color.white}`};
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid ${({ theme }) => `${theme.color.gray150}`};
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  display: flex;
`;

const ImageContainer = styled.div`
  align-self: stretch;
`;
