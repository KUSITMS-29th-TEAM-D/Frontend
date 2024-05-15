import { useRecoilValue } from 'recoil';

import {
  DefineTestView1,
  DefineTestView2,
  DefineTestView3,
} from '@/components/DefineTest/DefineTestView';
import { LoadingPage } from '@/pages/LoadingPage';
import { loadingState } from '@/recoil/loadingState';

export const DefineTestPage1 = () => {
  return (
    <div>
      <DefineTestView1 />
    </div>
  );
};

export const DefineTestPage2 = () => {
  return (
    <div>
      <DefineTestView2 />
    </div>
  );
};

export const DefineTestPage3 = () => {
  const loading = useRecoilValue(loadingState);

  if (loading.showLoading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <DefineTestView3 />
    </div>
  );
};
