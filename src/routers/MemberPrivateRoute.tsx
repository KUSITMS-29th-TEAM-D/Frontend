import { Navigate, Outlet } from 'react-router-dom';

import { userService } from '@/services/UserService';

export const MemberPrivateRoute = () => {
  const user = userService.getUserState();

  if (user === 'NON_MEMBER') {
    window.alert('로그인이 필요한 페이지입니다.');
    return <Navigate to="/auth" replace />;
  }

  if (user === 'PRE_MEMBER') {
    window.alert('온보딩 후 이용 가능한 페이지입니다.');
    return <Navigate to="/onboarding" replace />;
  }

  return <Outlet />;
};
