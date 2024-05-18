import { useNavigate } from 'react-router-dom';

import { ResultView } from '@/components/DesignResultPage/ResultView';
import { PlainButton } from '@/components/common/Button/PlainButton';

export const DesignResultPage = () => {
  const navigate = useNavigate();

  return (
    <ResultView style={{ minHeight: '100vh' }}>
      <PlainButton
        variant="gray"
        width="597px"
        height="48px"
        onClick={() => navigate('/test/design/1')}
      >
        다시 설정하기
      </PlainButton>
    </ResultView>
  );
};
