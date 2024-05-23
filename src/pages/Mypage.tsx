import { useState } from 'react';

import { BrandView } from '@/components/MyPage/BrandView';
import { MyExperienceView } from '@/components/MyPage/MyExperienceView';
import MyPageSidebar from '@/components/MyPage/MyPageSidebar';
import { PersonaView } from '@/components/MyPage/PersonaView';
import { SettingView } from '@/components/MyPage/SettingView';

export const MyPage1 = () => {
  const [activeMenu, setActiveMenu] = useState<string>('브랜드 관리');

  const renderContent = () => {
    switch (activeMenu) {
      case '브랜드 관리':
        return <BrandView />;
      case '내 페르소나':
        return <PersonaView />;
      case '신청한 경험':
        return <MyExperienceView filters={[]} />;
      case '환경설정':
        return <SettingView />;
      default:
        return <BrandView />;
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <MyPageSidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div style={{ flex: 1, overflowY: 'auto' }}>{renderContent()}</div>
    </div>
  );
};
