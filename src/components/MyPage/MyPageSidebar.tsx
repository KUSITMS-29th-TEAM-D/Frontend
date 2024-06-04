import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { theme } from '@/styles';

const menuItems = [
  { label: '브랜드 관리', key: 'brand' },
  { label: '내 페르소나', key: 'persona' },
  { label: '신청한 경험', key: 'experience' },
  { label: '환경설정', key: 'settings' },
];

export const MypageSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <SidebarContainer>
      {menuItems.map((item) => (
        <MenuItem
          key={item.key}
          $active={location.pathname.includes(item.key)}
          onClick={() => navigate(`/mypage/${item.key}`)}
        >
          <div>{item.label}</div>
        </MenuItem>
      ))}
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  width: 196px;
  height: auto;
  padding-top: 81px;

  background-color: ${({ theme }) => `${theme.color.white}`};
  border-right: 2px ${({ theme }) => `${theme.color.gray150}`} solid;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

const MenuItem = styled.div<{ $active: boolean }>`
  align-self: stretch;
  height: 56px;
  padding-left: 24px;
  padding-right: 24px;
  background-color: ${({ $active }) =>
    $active ? `${theme.color.primary50}` : `${theme.color.white}`};
  border-left: 4px solid transparent;
  border-color: ${({ $active }) => $active && '#915AFB'};
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
