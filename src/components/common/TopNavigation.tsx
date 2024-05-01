import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as MenuIcon } from '@/assets/icons/menu.svg';
import { ReactComponent as UserIcon } from '@/assets/icons/user.svg';
import { ReactComponent as MainLogo } from '@/assets/mainLogo.svg';
import { SideNavigation } from '@/components/common/SideNavigation';
import { SmallButton } from '@/components/common/SmallButton';
import { NAVIGATION_MENU } from '@/constants/navigation';

export const TopNavigation = () => {
  const [loggedIn, setLoggedIn] = useState(false); // 로그인 여부를 확인하기 위한 임시 코드
  const [showSideNav, setShowSideNav] = useState(false);
  const navigate = useNavigate();

  return (
    <StyledContainer>
      <StyledInnerContainer>
        <Link to="/">
          <MainLogo height="36px" />
        </Link>
        <StyledMenuContainer>
          <StyledNavigationMenu>
            {NAVIGATION_MENU.map((item) => (
              <SmallButton
                key={item.menu}
                onClick={() => {
                  navigate(item.path);
                }}
              >
                {item.menu}
              </SmallButton>
            ))}
          </StyledNavigationMenu>
          {loggedIn ? (
            <StyledUserButton>
              <UserIcon />
            </StyledUserButton>
          ) : (
            <SmallButton
              filled
              width="100px"
              onClick={() => {
                // TODO: 로그인 페이지로 이동하도록 수정
                setLoggedIn((prev) => !prev);
              }}
            >
              로그인
            </SmallButton>
          )}
        </StyledMenuContainer>
        <StyledMenuButton
          onClick={() => {
            //TODO: 마이페이지로 이동하도록 수정
            setShowSideNav((prev) => !prev);
          }}
        >
          <MenuIcon />
        </StyledMenuButton>
        {showSideNav && <SideNavigation isLoggedIn={loggedIn} setOpen={setShowSideNav} />}
      </StyledInnerContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.color.primary100};
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(5px);

  @media ${({ theme }) => theme.device.mobile} {
    background: ${({ theme }) => theme.color.white};
  }
`;

const StyledInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 42px;
  margin: 0 auto;

  @media ${({ theme }) => theme.device.mobile} {
    padding: 16px 8px 16px 24px;
  }
`;

const StyledMenuContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;

const StyledNavigationMenu = styled.div`
  display: flex;
`;

const StyledMenuButton = styled.button`
  display: none;
  padding: 0px 12px;

  @media ${({ theme }) => theme.device.mobile} {
    display: block;
  }
`;

const StyledUserButton = styled.button`
  padding: 8px;

  border-radius: 8px;
  background: ${({ theme }) => theme.color.primary50};

  path {
    fill: ${({ theme }) => theme.color.primary500};
  }
`;
