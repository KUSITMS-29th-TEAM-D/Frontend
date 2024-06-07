import { useEffect, useState } from 'react';

import { NonMemberView } from '@/components/HomePage/NonMemberView';
import { NonTesterMemberView } from '@/components/HomePage/NonTesterMemberView';
import { TesterMemberView } from '@/components/HomePage/TesterMemberView';
import { userService } from '@/services/UserService';

export const HomePage = () => {
  const [testState, setTestState] = useState<string>();

  useEffect(() => {
    setTestState(userService.getTestState());
  }, []);

  if (!testState) return <div>loading...</div>;

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

  if (testState === 'NON_TESTER_MEMBER')
    return (
      <div style={{ minWidth: '1280px' }}>
        <NonTesterMemberView />
      </div>
    );
};
