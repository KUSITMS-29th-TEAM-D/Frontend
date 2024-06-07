import { ResultView } from '@/components/DiscoverResultPage/ResultView';
import { NoResultSection } from '@/components/SelfUnderstandPage/NoResultTemplate';
import { useGetDiscoverResult } from '@/hooks/useGetDiscoverResult';

export const DiscoverResultView = () => {
  const { loading, error, isTest } = useGetDiscoverResult();

  if (loading || error) return null;

  if (isTest) return <ResultView />;

  return <NoResultSection tab="Discover" />;
};
