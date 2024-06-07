import { Navigate, Route, Routes } from 'react-router-dom';

import { BrandView } from '@/components/MyPage/BrandView';
import { MyExperienceView } from '@/components/MyPage/MyExperienceView';
import { PersonaView } from '@/components/MyPage/PersonaView';
import { SettingView } from '@/components/MyPage/SettingView';
import { MainLayout } from '@/components/common/Layout/MainLayout';
import { MyPageLayout } from '@/components/common/Layout/MyPageLayout';
import { TestLayout } from '@/components/common/Layout/TestLayout';
import { DefineResultPage } from '@/pages/DefineResultPage';
import { DefineTestPage } from '@/pages/DefineTestPage';
import { DesignResultPage } from '@/pages/DesignResultPage';
import { DesignStartPage } from '@/pages/DesignStartPage';
import {
  DesignTestPage1,
  DesignTestPage2,
  DesignTestPage3,
  DesignTestPage4,
  DesignTestPage5,
} from '@/pages/DesignTestPage';
import { DiscoverResultPage } from '@/pages/DiscoverResultPage';
import { DiscoverStartPage } from '@/pages/DiscoverStartPage';
import { DiscoverTestPage } from '@/pages/DiscoverTestPage';
import { ExperienceDetailPage } from '@/pages/ExperienceDetailPage';
import { ExperienceRecommendPage } from '@/pages/ExperienceRecommendPage';
import { HomePage } from '@/pages/HomePage';
import { LoginPage } from '@/pages/LoginPage';
import { OnboardingPage } from '@/pages/OnboardingPage';
import { RedirectPage } from '@/pages/RedirectPage';
import { SelfUnderstandPage } from '@/pages/SelfUnderstandPage';
import { MemberPrivateRoute } from '@/routers/MemberPrivateRoute';

export const Router = () => {
  /* return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/login" element={<RedirectPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<LoginPage />} />
        <Route path="/understand" element={<SelfUnderstandPage />} />
        <Route element={<MemberPrivateRoute />}>
          <Route path="/program" element={<ExperienceRecommendPage />} />
          <Route path="/program/:type/:id" element={<ExperienceDetailPage />} />
          <Route path="mypage" element={<MyPageLayout />}>
            <Route index element={<Navigate to="brand" replace />} />
            <Route path="brand" element={<BrandView />} />
            <Route path="persona" element={<PersonaView />} />
            <Route path="experience" element={<MyExperienceView />} />
            <Route path="settings" element={<SettingView />} />
          </Route>
        </Route>
      </Route>
      <Route path="test" element={<TestLayout />}>
        <Route path="define">
          <Route index element={<Navigate to="1" replace />}></Route>
          <Route path="1" element={<DefineTestPage />} />
          <Route path=":defineId" element={<DefineResultPage />} />
        </Route>
        <Route element={<MemberPrivateRoute />}>
          <Route path="design">
            <Route index element={<Navigate to="1" replace />}></Route>
            <Route path="1" element={<DesignStartPage />} />
            <Route path="2" element={<DesignTestPage1 />} />
            <Route path="3" element={<DesignTestPage2 />} />
            <Route path="4" element={<DesignTestPage3 />} />
            <Route path="5" element={<DesignTestPage4 />} />
            <Route path="6" element={<DesignTestPage5 />} />
            <Route path="result" element={<DesignResultPage />} />
          </Route>
          <Route path="discover">
            <Route path="" element={<DiscoverStartPage />} />
            <Route path="start" element={<DiscoverTestPage />} />
            <Route path="result" element={<DiscoverResultPage />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  ); */

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/login" element={<RedirectPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/" element={<DefineTestPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/auth" element={<LoginPage />} />
        <Route path="/understand" element={<SelfUnderstandPage />} />
        <Route element={<MemberPrivateRoute />}>
          <Route path="/program" element={<ExperienceRecommendPage />} />
          <Route path="/program/:type/:id" element={<ExperienceDetailPage />} />
          <Route path="mypage" element={<MyPageLayout />}>
            <Route index element={<Navigate to="brand" replace />} />
            <Route path="brand" element={<BrandView />} />
            <Route path="persona" element={<PersonaView />} />
            <Route path="experience" element={<MyExperienceView />} />
            <Route path="settings" element={<SettingView />} />
          </Route>
        </Route>
      </Route>
      <Route path="test" element={<TestLayout />}>
        <Route path="define">
          <Route index element={<Navigate to="1" replace />}></Route>
          <Route path="1" element={<DefineTestPage />} />
          <Route path=":defineId" element={<DefineResultPage />} />
        </Route>
        <Route element={<MemberPrivateRoute />}>
          <Route path="design">
            <Route index element={<Navigate to="1" replace />}></Route>
            <Route path="1" element={<DesignStartPage />} />
            <Route path="2" element={<DesignTestPage1 />} />
            <Route path="3" element={<DesignTestPage2 />} />
            <Route path="4" element={<DesignTestPage3 />} />
            <Route path="5" element={<DesignTestPage4 />} />
            <Route path="6" element={<DesignTestPage5 />} />
            <Route path="result" element={<DesignResultPage />} />
          </Route>
          <Route path="discover">
            <Route path="" element={<DiscoverStartPage />} />
            <Route path="start" element={<DiscoverTestPage />} />
            <Route path="result" element={<DiscoverResultPage />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};
