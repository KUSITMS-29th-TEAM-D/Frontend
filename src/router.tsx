import { Route, Routes } from 'react-router-dom';

import RedirectPage from './components/Redirect/RedirectPage';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<RedirectPage />} />
      <Route path="/users/login" element={<LoginPage />} />
    </Routes>
  );
};
