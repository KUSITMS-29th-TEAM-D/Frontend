import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { personaAPI } from '@/apis/personaAPI';
import { StartSection } from '@/components/DefineTestPage/StartSection';
import { TestSection } from '@/components/DefineTestPage/TestSection';
import { CHIP_DATA1, CHIP_DATA2, CHIP_DATA3 } from '@/constants/defineChip';
import { useFunnel } from '@/hooks/useFunnel';
import { LoadingPage } from '@/pages/LoadingPage';
import { loadingHandlerState } from '@/recoil/loadingHandlerState';
import { loadingState } from '@/recoil/loadingState';
import { userService } from '@/services/UserService';

const STEPS = ['start', 'first', 'second', 'third'];
const KEY = ['selectedChips1', 'selectedChips2', 'selectedChips3'];

export const DefineTestPage = () => {
  const [loading, setLoading] = useRecoilState(loadingState);
  const [loadingHandler, setLoadingHandler] = useRecoilState(loadingHandlerState);
  const navigate = useNavigate();
  const { Funnel, Step, setStep, currentStep } = useFunnel(STEPS[0]);

  useEffect(() => {
    KEY.some((key, index) => {
      const chips = JSON.parse(sessionStorage.getItem(key) || '[]');
      if (chips.length !== 5) {
        setStep(STEPS[index + 1]);
        return true;
      }
      return false;
    });
  }, []);

  const prevClickHandler = (prevStep: string) => {
    setStep(prevStep);
  };

  const nextClickHandler = (nextStep: string) => {
    setStep(nextStep);
    console.log(nextStep);
  };

  const handleSubmit = () => {
    const requestData = {
      stage_one_keywords: JSON.parse(sessionStorage.getItem(KEY[0]) || '[]'),
      stage_two_keywords: JSON.parse(sessionStorage.getItem(KEY[1]) || '[]'),
      stage_three_keywords: JSON.parse(sessionStorage.getItem(KEY[2]) || '[]'),
    };

    setLoading({ show: true, speed: 50 });

    personaAPI
      .registerDefine(userService.getUserState() === 'MEMBER', requestData)
      .then((response) => {
        const { code, message, payload } = response;

        if (code === '201') {
          KEY.map((key) => sessionStorage.removeItem(key));

          setLoadingHandler({
            ...loadingHandler,
            handleCompleted: () => {
              navigate(`/test/define/${payload.define_persona_id}`);
            },
          });
        } else {
          console.error('페르소나 생성 실패:', message);
          setLoading({ ...loading, show: false });
        }
      })
      .catch((error) => {
        console.error('페르소나 생성 요청 실패:', error);
        window.alert('페르소나 생성 요청 실패');
        setLoading({ ...loading, show: false });
      });
  };

  if (loading.show) {
    return <LoadingPage />;
  }

  return (
    <Funnel>
      <Step name="start">
        <StartSection onNext={() => nextClickHandler(STEPS[1])} />
      </Step>
      <Step name="first">
        <TestSection
          chipData={CHIP_DATA1}
          sessionStorageKey={KEY[0]}
          steps={STEPS}
          currentStep={currentStep}
          onNext={() => nextClickHandler(STEPS[2])}
        />
      </Step>
      <Step name="second">
        <TestSection
          chipData={CHIP_DATA2}
          sessionStorageKey={KEY[1]}
          steps={STEPS}
          currentStep={currentStep}
          onPrev={() => prevClickHandler(STEPS[1])}
          onNext={() => nextClickHandler(STEPS[3])}
        />
      </Step>
      <Step name="third">
        <TestSection
          chipData={CHIP_DATA3}
          sessionStorageKey={KEY[2]}
          steps={STEPS}
          currentStep={currentStep}
          onPrev={() => prevClickHandler(STEPS[2])}
          onNext={handleSubmit}
          lastSection
        />
      </Step>
    </Funnel>
  );
};
