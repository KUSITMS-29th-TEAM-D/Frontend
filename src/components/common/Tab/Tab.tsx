import { useState, ReactNode } from 'react';

import styled from 'styled-components';

const TabContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 128px;
  padding-right: 64px;
  background-color: ${({ theme }) => theme.color.white};
  border-bottom: 4px #f7f7f7 solid;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`;

const Tab = styled.div<{ isActive: boolean }>`
  padding: 20px 32px;
  background-color: ${({ theme }) => theme.color.white};
  justify-content: center;
  align-items: center;
  gap: 8px;
  display: flex;
  border-bottom: ${({ isActive }) => (isActive ? '4px #915AFB solid' : 'none')};
  cursor: pointer;

  & > div {
    color: ${({ isActive }) => (isActive ? '#915AFB' : '#8B8B8B')};
    font-size: ${({ isActive }) => (isActive ? '20px' : '18px')};
    font-family: 'Spoqa Han Sans Neo';
    font-weight: ${({ isActive }) => (isActive ? 700 : 500)};
    line-height: 28px;
    word-wrap: break-word;
  }
`;

const TabPanel = styled.div<{ hidden: boolean }>`
  padding: 20px;
  padding-bottom: 0px;
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
`;

interface TabItem {
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
}

const Tabs = ({ tabs }: TabsProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (index: number) => {
    setValue(index);
  };

  return (
    <div>
      <TabContainer>
        {tabs.map((tab, index) => (
          <Tab key={index} isActive={value === index} onClick={() => handleChange(index)}>
            <div>{tab.label}</div>
          </Tab>
        ))}
      </TabContainer>
      {tabs.map((tab, index) => (
        <TabPanel key={index} hidden={value !== index}>
          {tab.content}
        </TabPanel>
      ))}
    </div>
  );
};

export default Tabs;
