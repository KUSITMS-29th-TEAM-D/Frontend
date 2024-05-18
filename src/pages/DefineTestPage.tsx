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
    <>
      <DefineTestView1 />
    </>
  );
};

export const DefineTestPage2 = () => {
  return (
    <>
      <DefineTestView2 />
    </>
  );
};

export const DefineTestPage3 = () => {
  const loading = useRecoilValue(loadingState);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <DefineTestView3 />
    </>
  );
};
