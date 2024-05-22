import { Outlet } from 'react-router-dom';

import { Footer } from '@/components/common/Footer';
import { TopNavigation } from '@/components/common/Navigation/TopNavigation';

export const MainLayout = () => {
  return (
    <>
      <TopNavigation />
      <Outlet />
      {/* TODO: 홈 / 진단홈 / 경험홈 / 마이페이지홈에서만 Footer가 보이도록 수정 */}
      {!true && <Footer />}
    </>
  );
};
