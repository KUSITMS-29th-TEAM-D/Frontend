import { Navigate, Outlet } from 'react-router-dom';

import { userService } from '@/services/UserService';

export const MemberPrivateRoute = () => {
  const user = userService.getUserState();

  if (user !== 'MEMBER') {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
