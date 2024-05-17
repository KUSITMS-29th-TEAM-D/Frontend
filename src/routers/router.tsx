import { Navigate, Route, Routes } from 'react-router-dom';

import { MainLayout } from '@/components/common/Layout/MainLayout';
import { TestLayout } from '@/components/common/Layout/TestLayout';
import { DefineResultPage } from '@/pages/DefineResultPage';
import { DefineStartPage } from '@/pages/DefineStartPage';
import { DefineTestPage1, DefineTestPage2, DefineTestPage3 } from '@/pages/DefineTestPage';
import {
  DesignTestPage1,
  DesignTestPage2,
  DesignTestPage3,
  DesignTestPage4,
  DesignTestPage5,
} from '@/pages/DesignTestPage';
import { HomePage } from '@/pages/HomePage';
import { LoginPage } from '@/pages/LoginPage';
import { OnboardingPage } from '@/pages/OnboardingPage';
import { RedirectPage } from '@/pages/RedirectPage';
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
          {/* <Route element={<MemberPrivateRoute />}>
            <Route path="/mypage" element={<MyPage />} />
          </Route> */}
        </Route>
      </Route>
      <Route path="/test" element={<TestLayout />}>
        <Route element={<ExceptPreMemberRoute />}>
          <Route index element={<Navigate to="define/1" replace />}></Route>
          <Route path="define/start" element={<DefineStartPage />} />
          <Route path="define/1" element={<DefineTestPage1 />} />
          <Route path="define/2" element={<DefineTestPage2 />} />
          <Route path="define/3" element={<DefineTestPage3 />} />
          <Route path="define/result" element={<DefineResultPage />} />
          <Route path="design/1" element={<DesignTestPage1 />} />
          <Route path="design/2" element={<DesignTestPage2 />} />
          <Route path="design/3" element={<DesignTestPage3 />} />
          <Route path="design/4" element={<DesignTestPage4 />} />
          <Route path="design/5" element={<DesignTestPage5 />} />
        </Route>
      </Route>
      <Route path="/login" element={<RedirectPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
