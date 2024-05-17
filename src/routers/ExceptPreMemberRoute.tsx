import { Navigate, Outlet } from 'react-router-dom';

import { userService } from '@/services/UserService';

export const ExceptPreMemberRoute = () => {
  const user = userService.getUserState();

  if (user === 'PRE_MEMBER') {
    return <Navigate to="/onboarding" replace />;
  }

  return <Outlet />;
};
