import styled from 'styled-components';

import { ReactComponent as Logo } from '@/assets/logos/mainLogo.svg';

const MENU_LIST = [
  {
    title: '새로운 경험 키워드 추천하기',
    path: 'https://docs.google.com/forms/d/e/1FAIpQLSfAjfBz-HBTPFobfKdilHI2j9ZQIiLg8g9bTHLx28ajjNsGcg/viewform?usp=send_form',
  },
  { title: '팀 쿨피스 테크블로그', path: 'https://velog.io/@kusitms-29th-d/posts' },
  { title: '프로그램 등록 문의하기', path: '' },
  { title: '서비스 문의하기', path: 'https://pf.kakao.com/_xjMdLG' },
  {
    title: '개인정보 처리방침',
    path: 'https://docs.google.com/document/d/1lnzEB1apJ0X6Vxpse3O-kP9-DD3eImJZx9FEkM6uXgg/edit',
  },
];

export const Footer = () => {
  return (
    <StyledContainer>
      <StyledMenuContainer>
        <Logo className="logo" />
        <ul>
          {MENU_LIST.map((menu) => (
            <a
              href={menu.path}
              key={menu.title}
              className="menu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>{menu.title}</li>
            </a>
          ))}
        </ul>
      </StyledMenuContainer>
      <StyledDescription>
        <p className="service-description">
          셀피스는 이전의 경험을 통해
          <br />
          새로운 나를 발견하고 정의하며 자기 행복을 위해 새로운 경험을 추천합니다.
        </p>
        <p className="copyright">Copyright © 2024 셀피스, All Rights Reserved.</p>
      </StyledDescription>
    </StyledContainer>
  );
};

const StyledContainer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 24px;

  padding: 50px 64px;
  border-top: 2px solid ${({ theme }) => theme.color.gray150};
  background: ${({ theme }) => theme.color.gray100};

  .logo {
    width: 135px;
  }

  width: 100%;
`;

const StyledMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo path {
    fill: ${({ theme }) => theme.color.gray600};
  }

  ul {
    display: flex;
    gap: 32px;

    ${({ theme }) => theme.font.desktop.label1m};
    color: ${({ theme }) => theme.color.gray700};

    .menu {
      position: relative;
      cursor: pointer;
    }

    .menu::after {
      content: '';
      width: 1px;
      height: 16px;

      position: absolute;
      top: 50%;
      right: -16px;

      transform: translateY(-50%);
      background-color: ${({ theme }) => theme.color.gray500};
      cursor: default;
    }

    .menu:last-child::after {
      display: none;
    }
  }
`;

const StyledDescription = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  .service-description {
    ${({ theme }) => theme.font.desktop.label1r};
    color: ${({ theme }) => theme.color.gray700};
  }

  .copyright {
    ${({ theme }) => theme.font.desktop.label2};
    color: ${({ theme }) => theme.color.gray300};
  }
`;
