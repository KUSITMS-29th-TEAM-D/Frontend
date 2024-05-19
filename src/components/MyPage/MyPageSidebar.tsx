import React from 'react';

import styled from 'styled-components';

import { theme } from '@/styles';

const SidebarContainer = styled.div`
  width: 196px;
  height: 100%;
  padding-top: 76px;
  background-color: ${({ theme }) => `${theme.color.white}`};
  border-right: 2px ${({ theme }) => `${theme.color.gray150}`} solid;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const MenuItem = styled.div<{ $active: boolean }>`
  align-self: stretch;
  height: 56px;
  padding-left: 24px;
  padding-right: 24px;
  background-color: ${({ $active }) =>
    $active ? `${theme.color.primary50}` : `${theme.color.white}`};
  border-left: ${({ $active }) => ($active ? '4px #915AFB solid' : 'none')};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  cursor: pointer;

  & > div {
    text-align: center;
    color: ${({ $active }) => ($active ? `${theme.color.primary500}` : `${theme.color.gray600}`)};
    ${({ theme }) => theme.font.desktop.body1m};
    word-wrap: break-word;
  }
  &:hover {
    background-color: ${(props) => props.theme.color.gray150};
  }
`;

interface SidebarProps {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeMenu, setActiveMenu }) => {
  const menuItems = [
    { label: '브랜드 관리', key: '브랜드 관리' },
    { label: '내 페르소나', key: '내 페르소나' },
    { label: '신청한 경험', key: '신청한 경험' },
    { label: '환경설정', key: '환경설정' },
  ];

  return (
    <SidebarContainer>
      {menuItems.map((item) => (
        <MenuItem
          key={item.key}
          $active={activeMenu === item.key}
          onClick={() => setActiveMenu(item.key)}
        >
          <div>{item.label}</div>
        </MenuItem>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
