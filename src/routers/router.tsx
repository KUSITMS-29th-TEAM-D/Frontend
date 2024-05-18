import { Navigate, Route, Routes } from 'react-router-dom';

import { MainLayout } from '@/components/common/Layout/MainLayout';
import { TestLayout } from '@/components/common/Layout/TestLayout';
import { DefineResultPage } from '@/pages/DefineResultPage';
import { DefineStartPage } from '@/pages/DefineStartPage';
import { DefineTestPage1, DefineTestPage2, DefineTestPage3 } from '@/pages/DefineTestPage';
/* import {
  DesignTestPage1,
  DesignTestPage2,
  DesignTestPage3,
  DesignTestPage4,
  DesignTestPage5,
} from '@/pages/DesignTestPage'; */
import { HomePage } from '@/pages/HomePage';
import { LoginPage } from '@/pages/LoginPage';
import { OnboardingPage } from '@/pages/OnboardingPage';
/* import { RedirectPage } from '@/pages/RedirectPage'; */
import { SelfUnderstandPage } from '@/pages/SelfUnderstandPage';
import { ExceptPreMemberRoute } from '@/routers/ExceptPreMemberRoute';

export const Router = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route element={<ExceptPreMemberRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<LoginPage />} />
          <Route path="/understand" element={<SelfUnderstandPage />} />
          {/* // <Route element={<MemberPrivateRoute />}>
            //<Route path="/mypage" element={<MyPage />} />
          //</Route> */}
        </Route>
      </Route>
      <Route path="test" element={<TestLayout />}>
        <Route path="define">
          <Route index element={<Navigate to="1" replace />}></Route>
          <Route path="1" element={<DefineStartPage />} />
          <Route path="2" element={<DefineTestPage1 />} />
          <Route path="3" element={<DefineTestPage2 />} />
          <Route path="4" element={<DefineTestPage3 />} />
          <Route path=":defineId" element={<DefineResultPage />} />
        </Route>
        {/* <Route path="design/1" element={<DesignTestPage1 />} />
        <Route path="design/2" element={<DesignTestPage2 />} />
        <Route path="design/3" element={<DesignTestPage3 />} />
        <Route path="design/4" element={<DesignTestPage4 />} />
        <Route path="design/5" element={<DesignTestPage5 />} /> */}
      </Route>
      {/* <Route path="/login" element={<RedirectPage />} />
      <Route path="/tt" element={<DefineResultPage />} />
      <Route path="*" element={<Navigate to="/" replace />} /> */}
      <Route path="*" element={<Navigate to="/test/define" replace />} />
    </Routes>
  );
};
