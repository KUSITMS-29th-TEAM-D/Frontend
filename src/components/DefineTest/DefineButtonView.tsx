import { useEffect, useState } from 'react';

//import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { PlainButton } from '../common/Button/PlainButton';
import { Chip } from '../common/Chip/Chip';

interface Props {
  warning?: boolean;
  warningMessage?: boolean;
}

const Container = styled.div`
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  display: inline-flex;
  margin: 102px;
`;

const ButtonContainer = styled.div`
  justify-content: center;
  align-items: flex-start;
  gap: 15px;
  display: inline-flex;
`;
const ButtonInnerContainer = styled.div`
  justify-content: center;
  align-items: flex-start;
  gap: 15px;
  display: inline-flex;
`;
const ChipContainer = styled.div`
  width: 220px;
  height: 36px;
  padding: 0 20px;
  background: ${({ theme }) => `${theme.color.secondary50}`};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => `${theme.color.secondary600}`};
  justify-content: center;
  align-items: center;
  gap: 8px;
  display: inline-flex;
`;
const ChipText = styled.div`
  text-align: center;
  color: ${({ theme }) => `${theme.color.secondary600}`};
  ${({ theme }) => theme.font.desktop.label1m};
`;
const ButtonWidthBigContainer = styled.div`
  width: 582px;
  @media ${({ theme }) => theme.device.tablet} {
    width: 552px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
`;

const ButtonWidthSmallContainer = styled.div`
  width: 291px;
  @media ${({ theme }) => theme.device.tablet} {
    width: 272px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
`;

const Text = styled.div`
  color: ${({ theme }) => `${theme.color.gray400}`};
  ${({ theme }) => theme.font.desktop.label1m};
  word-wrap: break-word;
`;

export const DefineButtonView1 = ({ warning, warningMessage }: Props) => {
  const navigate = useNavigate();
  const [showWarn, setShowWarn] = useState(false);

  const handleButtonClick = () => {
    navigate('/test/define/2');
  };
  useEffect(() => {
    if (warningMessage) {
      setShowWarn(true);
      const timer = setTimeout(() => {
        setShowWarn(false);
      }, 5000);

      return () => clearTimeout(timer);
    } else {
      setShowWarn(false);
    }
  }, [warningMessage]);
  return (
    <Container>
      {showWarn && (
        <ChipContainer>
          <ChipText>키워드를 5개만 선택해 주세요!</ChipText>
        </ChipContainer>
      )}
      <ButtonContainer>
        <ButtonWidthBigContainer>
          <PlainButton
            variant="gray"
            height="48px"
            width="100%"
            onClick={handleButtonClick}
            disabled={warning}
          >
            다음으로
          </PlainButton>
        </ButtonWidthBigContainer>
      </ButtonContainer>

      <Text>종료하기를 누르면 해당 단계부터 이어서 검사를 진행할 수 있어요!</Text>
    </Container>
  );
};

export const DefineButtonView2 = ({ warning, warningMessage }: Props) => {
  const navigate = useNavigate();
  const [showWarn, setShowWarn] = useState(false);
  const handleButton1Click = () => {
    navigate('/test/define/1');
  };
  const handleButton2Click = () => {
    navigate('/test/define/3');
  };
  useEffect(() => {
    if (warningMessage) {
      setShowWarn(true);
      const timer = setTimeout(() => {
        setShowWarn(false);
      }, 5000);

      return () => clearTimeout(timer);
    } else {
      setShowWarn(false);
    }
  }, [warningMessage]);
  return (
    <Container>
      {showWarn && <Chip>키워드를 5개만 선택해 주세요!</Chip>}
      <ButtonContainer>
        <ButtonInnerContainer>
          <ButtonWidthSmallContainer>
            <PlainButton variant="gray" height="48px" width="100%" onClick={handleButton1Click}>
              이전으로
            </PlainButton>
          </ButtonWidthSmallContainer>
          <ButtonWidthSmallContainer>
            <PlainButton
              variant="gray"
              height="48px"
              width="100%"
              onClick={handleButton2Click}
              disabled={warning}
            >
              다음으로
            </PlainButton>
          </ButtonWidthSmallContainer>
        </ButtonInnerContainer>
      </ButtonContainer>
      <Text>종료하기를 누르면 해당 단계부터 이어서 검사를 진행할 수 있어요!</Text>
    </Container>
  );
};
export const DefineButtonView3 = ({ warning, warningMessage }: Props) => {
  const navigate = useNavigate();
  const [showWarn, setShowWarn] = useState(false);

  const handleButton1Click = () => {
    navigate('/test/define/2');
  };

  const handleButton2Click = () => {
    const selectedChips1 = JSON.parse(sessionStorage.getItem('selectedChips1') || '[]');
    const selectedChips2 = JSON.parse(sessionStorage.getItem('selectedChips2') || '[]');
    const selectedChips3 = JSON.parse(sessionStorage.getItem('selectedChips3') || '[]');
    console.log(selectedChips1, selectedChips2, selectedChips3);
    /*axios
      .post('/api', {
        selectedChips1,
        selectedChips2,
        selectedChips3,
      })
      .then((response) => {
        console.log('보내짐', response.data);
      })
      .catch((error) => {
        console.error('실패', error);
      });*/
    navigate('/'); //TODO 임시로 넣은 경로라서 나중에 수정해야 함
  };

  useEffect(() => {
    if (warningMessage) {
      setShowWarn(true);
      const timer = setTimeout(() => {
        setShowWarn(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [warningMessage]);

  return (
    <Container>
      {showWarn && <Chip>키워드를 5개만 선택해 주세요!</Chip>}
      <ButtonContainer>
        <ButtonInnerContainer>
          <ButtonWidthSmallContainer>
            <PlainButton variant="gray" height="48px" width="291px" onClick={handleButton1Click}>
              이전으로
            </PlainButton>
          </ButtonWidthSmallContainer>
          <ButtonWidthSmallContainer>
            <PlainButton
              variant="primary2"
              height="48px"
              width="291px"
              onClick={handleButton2Click}
              disabled={warning}
            >
              결과 확인하기
            </PlainButton>
          </ButtonWidthSmallContainer>
        </ButtonInnerContainer>
      </ButtonContainer>
    </Container>
  );
};
