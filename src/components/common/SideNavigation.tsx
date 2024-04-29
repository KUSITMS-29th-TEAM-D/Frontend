import { useEffect } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as ArrowIcon } from '@/assets/icons/arrowRight.svg';
import { ReactComponent as CloseIcon } from '@/assets/icons/close.svg';
import { PlainButton } from '@/components/common/PlainButton';
import { NAVIGATION_MENU } from '@/constants/navigation';

interface SideNavigationProps {
  isLoggedIn: boolean;
  setOpen: (show: boolean) => void;
}

export const SideNavigation = ({ isLoggedIn, setOpen }: SideNavigationProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <StyledContainer>
      <StyledContent>
        <StyledMenuButtonList>
          <button className="close-button" onClick={() => setOpen(false)}>
            <CloseIcon />
          </button>
          {NAVIGATION_MENU.map((item) => (
            <Link to={item.path} className="menu-button" key={item.menu}>
              <span>{item.menu}</span>
              <ArrowIcon />
            </Link>
          ))}
        </StyledMenuButtonList>
        <StyledUserButtonList>
          {/* TODO: 각 페이지 path로 이동하도록 click 핸들러 추가 */}
          {isLoggedIn ? (
            <>
              <PlainButton variant="primary" height="48px">
                마이페이지
              </PlainButton>
              <PlainButton variant="gray" height="48px">
                로그아웃
              </PlainButton>
            </>
          ) : (
            <PlainButton variant="gray" height="48px">
              로그인
            </PlainButton>
          )}
        </StyledUserButtonList>
      </StyledContent>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  right: 0;

  background: ${({ theme }) => theme.color.bgModal};
`;

const StyledContent = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 320px;
  height: 100%;

  background: ${({ theme }) => theme.color.white};
`;

const StyledMenuButtonList = styled.div`
  display: flex;
  flex-direction: column;

  .close-button {
    margin: 16px 20px 16px auto;
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
