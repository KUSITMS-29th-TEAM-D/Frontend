import { Route, Routes } from 'react-router-dom';

import { MainLayout } from '@/components/common/Layout/MainLayout';
import { ResponsiveLayout } from '@/components/common/Layout/ResponsiveLayout';
import { TestLayout } from '@/components/common/Layout/TestLayout';
import { DefineTestPage1, DefineTestPage2, DefineTestPage3 } from '@/pages/DefineTestPage';
import { HomePage } from '@/pages/HomePage';
import { LoginPage } from '@/pages/LoginPage';
import { RedirectPage } from '@/pages/RedirectPage';
import { SelfUnderstandPage } from '@/pages/SelfUnderstandPage';

import {
  DesignTestPage1,
  DesignTestPage2,
  DesignTestPage3,
  DesignTestPage4,
  DesignTestPage5,
} from './pages/DesignTestPage';

export const Router = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/understand" element={<SelfUnderstandPage />} />
      </Route>
      <Route element={<ResponsiveLayout />}>
        <Route path="/auth" element={<LoginPage />} />
      </Route>
      <Route path="/login" element={<RedirectPage />} />
      <Route element={<TestLayout />}>
        <Route path="test" element={<TestLayout />}>
          <Route path="define/1" element={<DefineTestPage1 />} />
          <Route path="define/2" element={<DefineTestPage2 />} />
          <Route path="define/3" element={<DefineTestPage3 />} />
          <Route path="design/1" element={<DesignTestPage1 />} />
          <Route path="design/2" element={<DesignTestPage2 />} />
          <Route path="design/3" element={<DesignTestPage3 />} />
          <Route path="design/4" element={<DesignTestPage4 />} />
          <Route path="design/5" element={<DesignTestPage5 />} />
        </Route>
      </Route>
    </Routes>
  );
};
