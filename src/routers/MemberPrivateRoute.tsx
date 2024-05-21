import { Navigate, Outlet } from 'react-router-dom';

import { userService } from '@/services/UserService';

export const MemberPrivateRoute = () => {
  const user = userService.getUserState();

  if (user !== 'MEMBER') {
    window.alert('로그인이 필요한 페이지입니다.');
    return <Navigate to="/auth" replace />;
  }

  return <Outlet />;
};
