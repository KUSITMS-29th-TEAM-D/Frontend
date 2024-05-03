import { Route, Routes } from 'react-router-dom';

import { MainLayout } from '@/components/common/Layout/MainLayout';
import { HomePage } from '@/pages/HomePage';

export const Router = () => {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
