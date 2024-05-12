import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { PlainButton } from '../common/Button/PlainButton';
import { Chip } from '../common/Chip/Chip';

interface Props {
  warning?: boolean;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  display: inline-flex;
`;

const ButtonContainer = styled.div`
  justify-content: center;
  align-items: flex-start;
  gap: 15px;
  display: inline-flex;
`;

const Text = styled.div`
  color: ${({ theme }) => `${theme.color.gray400}`};
  ${({ theme }) => theme.font.desktop.label1m};
  word-wrap: break-word;
`;

export const DefineButtonView1 = ({ warning }: Props) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/test/define/2');
  };

  return (
    <Container>
      <ButtonContainer>
        <PlainButton
          variant="gray"
          height="48px"
          width="582px"
          onClick={handleButtonClick}
          disabled={warning}
        >
          다음으로
        </PlainButton>
      </ButtonContainer>
      <Text>종료하기를 누르면 해당 단계부터 이어서 검사를 진행할 수 있어요!</Text>
      {warning && <Chip>키워드를 5개만 선택해 주세요!</Chip>}
    </Container>
  );
};

export const DefineButtonView2 = () => {
  const navigate = useNavigate();
  const handleButton1Click = () => {
    navigate('/test/define/1');
  };
  const handleButton2Click = () => {
    navigate('/test/define/3');
  };
  return (
    <Container>
      <ButtonContainer>
        <PlainButton variant="gray" height="48px" width="232px" onClick={handleButton1Click}>
          이전으로
        </PlainButton>
        <PlainButton variant="gray" height="48px" width="232px" onClick={handleButton2Click}>
          다음으로
        </PlainButton>
      </ButtonContainer>
      <Text>종료하기를 누르면 해당 단계부터 이어서 검사를 진행할 수 있어요!</Text>
    </Container>
  );
};

export const DefineButtonView3 = () => {
  const navigate = useNavigate();
  const handleButton1Click = () => {
    navigate('/test/define/2');
  };
  const handleButton2Click = () => {
    navigate('/'); //TODO 임시로 넣은 경로라서 나중에 수정해야 함
  };
  return (
    <Container>
      <ButtonContainer>
        <PlainButton variant="gray" height="48px" width="232px" onClick={handleButton1Click}>
          이전으로
        </PlainButton>
        <PlainButton variant="gray" height="48px" width="232px" onClick={handleButton2Click}>
          결과 확인하기
        </PlainButton>
      </ButtonContainer>
    </Container>
  );
};
