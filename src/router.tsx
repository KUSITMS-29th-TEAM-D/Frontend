import { Route, Routes } from 'react-router-dom';

import { MainLayout } from '@/components/common/Layout/MainLayout';
import { ResponsiveLayout } from '@/components/common/Layout/ResponsiveLayout';
import { HomePage } from '@/pages/HomePage';
import { LoginPage } from '@/pages/LoginPage';
import { OnboardingPage } from '@/pages/OnboardingPage';
import { RedirectPage } from '@/pages/RedirectPage';
import { SelfUnderstandPage } from '@/pages/SelfUnderstandPage';

export const Router = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/understand" element={<SelfUnderstandPage />} />
      </Route>
      <Route element={<ResponsiveLayout />}>
        <Route path="/auth" element={<LoginPage />} />
      </Route>
      <Route path="/login" element={<RedirectPage />} />
    </Routes>
  );
};
