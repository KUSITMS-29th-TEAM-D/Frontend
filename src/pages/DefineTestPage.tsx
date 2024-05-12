import {
  DefineTestView1,
  DefineTestView2,
  DefineTestView3,
} from '@/components/DefineTest/DefineTestView';
import TestNavigation from '@/components/common/Navigation/TestNavigation';

export const DefineTestPage1 = () => {
  return (
    <div>
      <TestNavigation />
      <DefineTestView1 />
    </div>
  );
};

export const DefineTestPage2 = () => {
  return (
    <div>
      <TestNavigation />
      <DefineTestView2 />
    </div>
  );
};

export const DefineTestPage3 = () => {
  return (
    <div>
      <TestNavigation />
      <DefineTestView3 />
    </div>
  );
};
