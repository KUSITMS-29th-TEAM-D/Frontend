import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { personaAPI } from '@/apis/personaAPI';
import { PlainButton } from '@/components/common/Button/PlainButton';
import { loadingHandlerState } from '@/recoil/loadingHandlerState';
import { loadingState } from '@/recoil/loadingState';
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

export const DefineButtonView1 = ({ warning, warningMessage }: Props) => {
  const navigate = useNavigate();
  const [showWarn, setShowWarn] = useState(false);

  const handleButtonClick = () => {
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
      {showWarn && <ChipContainer>키워드를 5개만 선택해 주세요!</ChipContainer>}
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

export const DefineButtonView2 = ({ warning, warningMessage }: Props) => {
  const navigate = useNavigate();
  const [showWarn, setShowWarn] = useState(false);

  const handleButton1Click = () => {
    navigate('/test/define/2');
  };

  const handleButton2Click = () => {
    navigate('/test/define/4');
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
      {showWarn && <ChipContainer>키워드를 5개만 선택해 주세요!</ChipContainer>}
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

export const DefineButtonView3 = ({ warning, warningMessage }: Props) => {
  const navigate = useNavigate();
  const [showWarn, setShowWarn] = useState(false);
  const setLoading = useSetRecoilState(loadingState);
  const [loadingHandler, setLoadingHandler] = useRecoilState(loadingHandlerState);

  const handleButton1Click = () => {
    navigate('/test/define/3');
  };

  const handleButton2Click = () => {
    const selectedChips1 = JSON.parse(sessionStorage.getItem('selectedChips1') || '[]');
    const selectedChips2 = JSON.parse(sessionStorage.getItem('selectedChips2') || '[]');
    const selectedChips3 = JSON.parse(sessionStorage.getItem('selectedChips3') || '[]');

    const requestData = {
      stage_one_keywords: selectedChips1,
      stage_two_keywords: selectedChips2,
      stage_three_keywords: selectedChips3,
    };

    setLoading(true);

    personaAPI
      .register(userService.getUserState() === 'MEMBER', requestData)
      .then((response) => {
        const { code, message, payload } = response;

        if (code === '201') {
          console.log('페르소나 생성 성공');
          setLoadingHandler({
            ...loadingHandler,
            handleCompleted: () => {
              navigate(`/test/define/${payload.define_persona_id}`);
            },
          });
        } else {
          console.error('페르소나 생성 실패:', message);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error('페르소나 생성 요청 실패:', error);
        window.alert('페르소나 생성 요청 실패');
      });
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
      {showWarn && <ChipContainer>키워드를 5개만 선택해 주세요!</ChipContainer>}
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
