import { useEffect, useState } from 'react';

import styled from 'styled-components';

import Scrollbar from '@/components/Scrollbar';
import { PlainButton } from '@/components/common/Button/PlainButton';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (
    title: string,
    description: string,
    date: string,
    status: '준비' | '진행중' | '완료'
  ) => void;
}

export const BrandCardModal = ({ isOpen, onClose, onAdd }: ModalProps) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [startDate, setStartDate] = useState('2024.05.15');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<'준비' | '진행중' | '완료'>('준비');

  useEffect(() => {
    if (isOpen) {
      setTitle('');
      setType('');
      setStartDate('2024.05.15');
      setDate('');
      setDescription('');
      setStatus('준비');
    }
  }, [isOpen]);

  const handleAdd = () => {
    onAdd(title, description, date, status);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <StyledContainer isOpen={isOpen}>
      <Container>
        <Title
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요."
        />
        <Frame>
          <FrameRow>
            <Label>유형</Label>
            <Input
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
              placeholder="유형을 입력해주세요."
            />
          </FrameRow>
          <FrameRow>
            <Label>진행상태</Label>
            <PlainButton
              variant={status === '준비' ? 'gray' : 'disabled'}
              height="48px"
              width="87px"
              onClick={() => setStatus('준비')}
            >
              준비
            </PlainButton>
            <PlainButton
              variant={status === '진행중' ? 'gray' : 'disabled'}
              height="48px"
              width="87px"
              onClick={() => setStatus('진행중')}
            >
              진행
            </PlainButton>
            <PlainButton
              variant={status === '완료' ? 'gray' : 'disabled'}
              height="48px"
              width="74px"
              onClick={() => setStatus('완료')}
            >
              완료
            </PlainButton>
          </FrameRow>
          <FrameRow>
            <Label>게시일</Label>
            <Input type="text" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </FrameRow>
          <FrameRow>
            <Label>마감일</Label>
            <Input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="20XX.XX.XX"
            />
          </FrameRow>
          <FrameRow>
            <DescriptionInput
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="설명을 입력해주세요."
            />
          </FrameRow>
        </Frame>
        <FrameRow>
          <PlainButton variant="disabled" height="48px" onClick={onClose}>
            취소하기
          </PlainButton>
          <PlainButton variant="gray" height="48px" onClick={handleAdd}>
            추가하기
          </PlainButton>
        </FrameRow>
      </Container>
    </StyledContainer>
  );
};

const StyledContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  width: var(--full-width);
  height: var(--full-height);
  //padding: 24px;
  background: ${({ theme }) => theme.color.bgModal};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 618px;
  height: 556px;
  padding: 32px 24px;
  background: ${({ theme }) => `${theme.color.white}`};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  display: inline-flex;
`;

const Title = styled.input`
  width: 570px;
  height: 32px;
  color: ${({ theme }) => `${theme.color.gray300}`};
  ${({ theme }) => theme.font.desktop.title2};
  word-wrap: break-word;

  &::placeholder {
    color: ${({ theme }) => `${theme.color.gray300}`};
  }
`;

const Frame = styled.div`
  align-self: stretch;
  height: 372px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: flex;
`;

const FrameRow = styled.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  display: inline-flex;
`;

const Input = styled.input`
  flex: 1;
  height: 48px;
  padding: 8px 12px;
  background: ${({ theme }) => `${theme.color.white}`};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.13);
  border-radius: 8px;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  display: flex;

  ${({ theme }) => theme.font.desktop.body2r};
  color: ${({ theme }) => `${theme.color.gray700}`};

  &::placeholder {
    color: ${({ theme }) => `${theme.color.gray300}`};
  }
`;

const DescriptionInput = styled.textarea`
  resize: none;
  border: none;
  padding: 0;
  margin: 0;

  width: 100%;
  height: 116px;
  padding: 16px;
  background: ${({ theme }) => `${theme.color.gray50}`};
  border-radius: 8px;
  border: 2px solid #efefef;

  ${({ theme }) => theme.font.desktop.body2r};
  color: ${({ theme }) => `${theme.color.gray700}`};

  &::placeholder {
    color: ${({ theme }) => `${theme.color.gray300}`};
  }

  overflow-y: auto;
  ${Scrollbar}
`;

const Label = styled.div`
  width: 90px;
  height: 28px;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  display: flex;
  color: ${({ theme }) => `${theme.color.gray700}`};
  ${({ theme }) => theme.font.desktop.body1m};
  word-wrap: break-word;
`;
