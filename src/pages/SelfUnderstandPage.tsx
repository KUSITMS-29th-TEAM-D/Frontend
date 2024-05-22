import SelfUnderstandView from '@/components/SelfUnderstandPage/SelfUnderstandView';
import { TestResultSection } from '@/components/SelfUnderstandPage/TestResultSection';

export const SelfUnderstandPage = () => {
  return (
    <div style={{ minWidth: '1280px' }}>
      <SelfUnderstandView />
      <TestResultSection />
    </div>
  );
};
