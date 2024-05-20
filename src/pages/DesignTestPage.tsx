import { useRecoilValue } from 'recoil';

import {
  DesignTestView1,
  DesignTestView2,
  DesignTestView3,
  DesignTestView4,
  DesignTestView5,
} from '@/components/DesignTest/DesignTestView';
import { LoadingPage } from '@/pages/LoadingPage';
import { loadingState } from '@/recoil/loadingState';

export const DesignTestPage1 = () => {
  return (
    <>
      <DesignTestView1 />
    </>
  );
};

export const DesignTestPage2 = () => {
  return (
    <>
      <DesignTestView2 />
    </>
  );
};

export const DesignTestPage3 = () => {
  return (
    <>
      <DesignTestView3 />
    </>
  );
};

export const DesignTestPage4 = () => {
  return (
    <>
      <DesignTestView4 />
    </>
  );
};

export const DesignTestPage5 = () => {
  const loading = useRecoilValue(loadingState);

  if (loading.show) {
    return <LoadingPage />;
  }

  return (
    <>
      <DesignTestView5 />
    </>
  );
};
