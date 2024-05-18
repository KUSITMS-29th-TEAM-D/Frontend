import { ResultView } from '@/components/DesignResultPage/ResultView';

export const DesignResultView = () => {
  // API 호출

  // 결과가 있을 경우
  return <ResultView style={{ height: '644px' }} />;

  // 결과가 없을 경우
  //return <NoResultSection tab="Design" />;
};
