import { ReactNode } from 'react';

import styled from 'styled-components';

import { theme } from '@/styles';

const TabContainer = styled.div`
  width: 1280px;
  height: 100%;
  padding-left: 64px;
  padding-right: 64px;
  background-color: ${({ theme }) => theme.color.white};
  border-bottom: 4px solid ${theme.color.gray100};
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`;

const Tab = styled.div<{ $isActive: boolean }>`
  padding: 20px 32px;
  background-color: ${({ theme }) => theme.color.white};
  justify-content: center;
  align-items: center;
  gap: 8px;
  display: flex;
  border-bottom: ${({ $isActive }) =>
    $isActive ? `4px solid ${theme.color.primary500}` : ' 4px solid transparent;'};
  cursor: pointer;

  & > div {
    color: ${({ $isActive }) =>
      $isActive ? `${theme.color.primary500}` : `${theme.color.gray400}`};
    ${({ theme }) => theme.font.desktop.body1m};
    word-wrap: break-word;
  }
`;

const TabPanel = styled.div<{ $hidden: boolean }>`
  padding-bottom: 0px;
  display: ${({ $hidden }) => ($hidden ? 'none' : 'block')};
`;

interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const Tabs = ({ tabs, activeTab, setActiveTab }: TabsProps) => {
  const handleChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <Container>
        <TabContainer>
          {tabs.map((tab) => (
            <Tab key={tab.id} $isActive={activeTab === tab.id} onClick={() => handleChange(tab.id)}>
              <div>{tab.label}</div>
            </Tab>
          ))}
        </TabContainer>
      </Container>
      <div>
        {tabs.map((tab) => (
          <TabPanel key={tab.id} $hidden={activeTab !== tab.id}>
            {tab.content}
          </TabPanel>
        ))}
      </div>
    </>
  );
};

export default Tabs;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
