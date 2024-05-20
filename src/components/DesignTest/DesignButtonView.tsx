import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { authClient, noAuthClient } from '@/apis/client';
import { PlainButton } from '@/components/common/Button/PlainButton';
import { userService } from '@/services/UserService';

interface Props {
  warning?: boolean;
  warningMessage?: boolean;
}

const Container = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;

  @media ${({ theme }) => theme.device.tablet} {
    gap: 8px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    gap: 8px;
  }
`;

const ChipContainer = styled.div`
  position: absolute;

  top: -16px;
  left: 50%;

  transform: translate(-50%, -100%);

  width: max-content;
  padding: 8px 20px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => `${theme.color.secondary600}`};
  background: ${({ theme }) => `${theme.color.secondary50}`};

  color: ${({ theme }) => `${theme.color.secondary600}`};
  ${({ theme }) => theme.font.desktop.label1m};
`;

const Text = styled.div`
  color: ${({ theme }) => `${theme.color.gray400}`};
  ${({ theme }) => theme.font.desktop.label1m};
  word-wrap: break-word;
`;

export const DesignButtonView1 = ({ warning, warningMessage }: Props) => {
  const navigate = useNavigate();
  const [showWarn, setShowWarn] = useState(false);

  const handleButtonClick = () => {
    navigate('/test/design/2');
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
      {showWarn && <ChipContainer>키워드를 3개 이하로 선택해 주세요!</ChipContainer>}
      <PlainButton
        variant="gray"
        height="48px"
        width="100%"
        onClick={handleButtonClick}
        disabled={warning}
      >
        다음으로
      </PlainButton>
      <Text>종료하기를 누르면 해당 단계부터 이어서 검사를 진행할 수 있어요!</Text>
    </Container>
  );
};

export const DesignButtonView2 = ({ warning, warningMessage }: Props) => {
  const navigate = useNavigate();
  const [showWarn, setShowWarn] = useState(false);

  const handleButton1Click = () => {
    navigate('/test/design/1');
  };

  const handleButton2Click = () => {
    navigate('/test/design/3');
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
      {showWarn && <ChipContainer>키워드를 3개 이하로 선택해 주세요!</ChipContainer>}
      <ButtonContainer>
        <PlainButton variant="gray" height="48px" width="100%" onClick={handleButton1Click}>
          이전으로
        </PlainButton>
        <PlainButton
          variant="gray"
          height="48px"
          width="100%"
          onClick={handleButton2Click}
          disabled={warning}
        >
          다음으로
        </PlainButton>
      </ButtonContainer>
      <Text>종료하기를 누르면 해당 단계부터 이어서 검사를 진행할 수 있어요!</Text>
    </Container>
  );
};

export const DesignButtonView3 = ({ warning, warningMessage }: Props) => {
  const navigate = useNavigate();
  const [showWarn, setShowWarn] = useState(false);

  const handleButton1Click = () => {
    navigate('/test/design/2');
  };

  const handleButton2Click = () => {
    navigate('/test/design/4');
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
      {showWarn && <ChipContainer>키워드를 5개 이하로 선택해 주세요!</ChipContainer>}
      <ButtonContainer>
        <PlainButton variant="gray" height="48px" width="100%" onClick={handleButton1Click}>
          이전으로
        </PlainButton>
        <PlainButton
          variant="gray"
          height="48px"
          width="100%"
          onClick={handleButton2Click}
          disabled={warning}
        >
          다음으로
        </PlainButton>
      </ButtonContainer>
      <Text>종료하기를 누르면 해당 단계부터 이어서 검사를 진행할 수 있어요!</Text>
    </Container>
  );
};
export const DesignButtonView4 = ({ warning, warningMessage }: Props) => {
  const navigate = useNavigate();
  const [showWarn, setShowWarn] = useState(false);

  const handleButton1Click = () => {
    navigate('/test/design/3');
  };

  const handleButton2Click = () => {
    navigate('/test/design/5');
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
      {showWarn && <ChipContainer>플랫폼을 2개 이하로 선택해 주세요!</ChipContainer>}
      <ButtonContainer>
        <PlainButton variant="gray" height="48px" width="100%" onClick={handleButton1Click}>
          이전으로
        </PlainButton>
        <PlainButton
          variant="gray"
          height="48px"
          width="100%"
          onClick={handleButton2Click}
          disabled={warning}
        >
          다음으로
        </PlainButton>
      </ButtonContainer>
      <Text>종료하기를 누르면 해당 단계부터 이어서 검사를 진행할 수 있어요!</Text>
    </Container>
  );
};

export const DesignButtonView5 = ({ warning, warningMessage }: Props) => {
  const navigate = useNavigate();
  const [showWarn, setShowWarn] = useState(false);

  const handleButton1Click = () => {
    navigate('/test/design/4');
  };

  const handleButton2Click = async () => {
    const selectedChips1 = JSON.parse(sessionStorage.getItem('selectedChips1') || '[]');
    const selectedChips2 = JSON.parse(sessionStorage.getItem('selectedChips2') || '[]');
    const selectedChips3 = JSON.parse(sessionStorage.getItem('selectedChips3') || '[]');
    const selectedChips4 = JSON.parse(sessionStorage.getItem('selectedChips4') || '[]');
    const selectedChips5 = JSON.parse(sessionStorage.getItem('selectedChips5') || '[]');

    const requestData = {
      fields: selectedChips1,
      distinctions: selectedChips2,
      abilities: selectedChips3,
      platforms: selectedChips4,
      career: selectedChips5[0],
    };

    try {
      const client = userService.getUserState() === 'MEMBER' ? authClient : noAuthClient;
      const response = await client.post('/api/personas/design', requestData);
      const { code, message } = response.data;

      if (code === '201') {
        console.log('페르소나 생성 성공');
        navigate('/'); // 결과 페이지로 이동
      } else {
        console.error('페르소나 생성 실패:', message);
      }
    } catch (error) {
      console.error('페르소나 생성 요청 실패:', error);
    }
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
      {showWarn && <ChipContainer>키워드를 1개만 선택해 주세요!</ChipContainer>}
      <ButtonContainer>
        <PlainButton variant="gray" height="48px" width="100%" onClick={handleButton1Click}>
          이전으로
        </PlainButton>
        <PlainButton
          variant="primary2"
          height="48px"
          width="100%"
          onClick={handleButton2Click}
          disabled={warning}
        >
          결과 확인하기
        </PlainButton>
      </ButtonContainer>
      <Text>종료하기를 누르면 해당 단계부터 이어서 검사를 진행할 수 있어요!</Text>
    </Container>
  );
};
