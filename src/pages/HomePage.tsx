import { useEffect, useState } from 'react';

import { NonMemberView } from '@/components/HomePage/NonMemberView';
import { NonTesterMemberView } from '@/components/HomePage/NonTesterMemberView';
import { TesterMemberView } from '@/components/HomePage/TesterMemberView';
import { userService } from '@/services/UserService';

export const HomePage = () => {
  const [testState, setTestState] = useState('NON_MEMBER');

  useEffect(() => {
    setTestState(userService.getTestState());
  }, []);

  if (testState === 'NON_MEMBER') {
    return (
      <div style={{ minWidth: '1280px' }}>
        <NonMemberView />
      </div>
    );
  }

  if (testState === 'TESTER_MEMBER')
    return (
      <div style={{ minWidth: '1280px' }}>
        <TesterMemberView />
      </div>
    );

  return (
    <div style={{ minWidth: '1280px' }}>
      <NonTesterMemberView />
    </div>
  );
};
