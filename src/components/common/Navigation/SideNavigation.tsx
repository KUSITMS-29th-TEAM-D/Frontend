import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { userAPI } from '@/apis/userAPI';
import { ReactComponent as ArrowIcon } from '@/assets/icons/arrowRight.svg';
import { ReactComponent as CloseIcon } from '@/assets/icons/close.svg';
import { PlainButton } from '@/components/common/Button/PlainButton';
import { NAVIGATION_MENU } from '@/constants/navigation';
import { tokenService } from '@/services/TokenService';

interface SideNavigationProps {
  isLoggedIn: boolean;
  setOpen: (show: boolean) => void;
}

export const SideNavigation = ({ isLoggedIn, setOpen }: SideNavigationProps) => {
  const navigate = useNavigate();
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    setScreenSize();

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const setScreenSize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  const handleLogout = async () => {
    try {
      await userAPI.logout();
      window.alert('로그아웃 되었습니다.');
      tokenService.onLogout();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledContainer>
      <StyledContent>
        <div className="inner-container">
          <StyledMenuButtonList>
            <button className="close-button" onClick={() => setOpen(false)}>
              <CloseIcon className="icon" />
            </button>
            {NAVIGATION_MENU.map((item) => (
              <button
                key={item.menu}
                className="menu-button"
                type="button"
                onClick={() => {
                  navigate(item.path);
                  setOpen(false);
                }}
              >
                <span>{item.menu}</span>
                <ArrowIcon />
              </button>
            ))}
          </StyledMenuButtonList>
          <StyledUserButtonList>
            {isLoggedIn ? (
              <>
                <PlainButton
                  variant="primary"
                  height="48px"
                  onClick={() => {
                    navigate('/mypage');
                    setOpen(false);
                  }}
                >
                  마이페이지
                </PlainButton>
                <PlainButton variant="gray" height="48px" onClick={handleLogout}>
                  로그아웃
                </PlainButton>
              </>
            ) : (
              <PlainButton
                variant="gray"
                height="48px"
                onClick={() => {
                  navigate('/auth');
                  setOpen(false);
                }}
              >
                로그인
              </PlainButton>
            )}
          </StyledUserButtonList>
        </div>
      </StyledContent>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;
  height: 100%;

  position: fixed;
  z-index: 10;

  background: ${({ theme }) => theme.color.bgModal};
`;

const StyledContent = styled.nav`
  width: 320px;
  height: 100%;

  background: ${({ theme }) => theme.color.white};

  .inner-container {
    height: calc(var(--vh, 1vh) * 125);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const StyledMenuButtonList = styled.div`
  display: flex;
  flex-direction: column;

  .close-button {
    margin: 16px 20px 16px auto;

    .icon {
      width: 24px;
      height: 24px;
    }
  }

  .menu-button {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 12px 16px 12px 32px;
    background: ${({ theme }) => theme.color.white};

    span {
      ${({ theme }) => theme.font.mobile.title1};
      color: ${({ theme }) => theme.color.gray800};
    }

    svg {
      margin: 12px;
    }

    &:hover {
      background: ${({ theme }) => theme.color.gray100};
    }
  }
`;

const StyledUserButtonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 20px 32px;
`;
