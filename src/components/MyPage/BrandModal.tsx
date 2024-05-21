import styled from 'styled-components';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandModal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <ModalContainer isOpen={isOpen}>
      <ModalContent>
        <Title>제목을 입력하세요.</Title>
        <MiddleContent>
          <ContentInput>
            <InputButton>유형</InputButton>
          </ContentInput>
          <ContentInput></ContentInput>
          <ContentInput></ContentInput>
          <ContentsInput></ContentsInput>
        </MiddleContent>
        <BottomContent></BottomContent>
        <button onClick={onClose}>닫기</button>
      </ModalContent>
    </ModalContainer>
  );
};

const ModalContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ isOpen }) => (isOpen ? 'rgba(0, 0, 0, 0.5)' : 'transparent')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width: 618px;
  height: 338px;
  padding: 32px 24px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  overflow: hidden;
  backdrop-filter: blur(8px);
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
`;

const Title = styled.div`
  width: 570px;
  height: 32px;
  color: #a5a5a5;
  font-size: 25px;
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 500;
  line-height: 32px;
  word-wrap: break-word;
`;
const MiddleContent = styled.div`
  align-self: stretch;
  height: 372px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: flex;
`;
const ContentInput = styled.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  display: inline-flex;
`;
const InputButton = styled.div`
  height: 28px;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  display: flex;
`;
const ContentsInput = styled.div`
  align-self: stretch;
  height: 116px;
  padding: 16px;
  background: #fbfbfb;
  border-radius: 8px;
  border: 2px #efefef solid;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  display: inline-flex;
`;
const BottomContent = styled.div`
  align-self: stretch;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  display: inline-flex;
`;
