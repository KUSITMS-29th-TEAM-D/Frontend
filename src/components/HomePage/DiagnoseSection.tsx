import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import backgroundIcon from '@/assets/backgrounds/backgroundIcon3D.svg';
import DefineImg from '@/assets/icons/define.png';
import DesignImg from '@/assets/icons/design.png';
import DiscoverImg from '@/assets/icons/discover.png';
import { SectionContainer } from '@/styles';

// TODO: 추후 페이지 경로 수정
const DIAGNOSE_CARD = [
  {
    title: 'Discover 이해',
    subtitle: '과거의 나와 대화하기',
    img: DiscoverImg,
    path: '/test/discover',
  },
  { title: 'Define 정의', subtitle: '성격/진단 테스트', img: DefineImg, path: '/test/define' },
  { title: 'Design 설계', subtitle: '차별점 도출하기', img: DesignImg, path: '/test/design' },
];

export const DiagnoseSection = () => {
  const navigate = useNavigate();

  return (
    <StyledContainer>
      <StyledBackgroundIcon className="icon" />
      <StyledSectionContainer>
        <StyledTitle>
          <div className="title">나를 더 잘 이해하고 싶다면 ?</div>
          <div className="subtitle">
            셀피스에서 <span className="highlight">[자기이해]</span>를 통해 나를 더 알아가요
          </div>
        </StyledTitle>
        <MenuCardContainer>
          {DIAGNOSE_CARD.map((card) => (
            <MenuCard key={card.title} onClick={() => navigate(card.path)}>
              <div className="content-title">
                <div className="title">{card.title}</div>
                <div className="subtitle">{card.subtitle}</div>
              </div>
              <img src={card.img} alt="icon" />
            </MenuCard>
          ))}
        </MenuCardContainer>
      </StyledSectionContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.section`
  position: relative;
  background: ${({ theme }) => theme.color.primary50};
  overflow: hidden;
`;

const StyledBackgroundIcon = styled.div`
  width: 1337px;
  height: 1337px;

  position: absolute;
  top: -250px;
  left: 39.5%;
  transform: translate(-50%, 0);

  background-image: url(${backgroundIcon});
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.46;

  transform: rotate(17.74deg);
  filter: blur(1.8px);
`;

const StyledSectionContainer = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  gap: 48px;

  position: relative;
  z-index: 0;

  padding: 80px 64px;
`;

const StyledTitle = styled.div`
  .title {
    margin-bottom: 16px;

    ${({ theme }) => theme.font.desktop.h1};
    color: ${({ theme }) => theme.color.gray800};
  }

  .subtitle {
    ${({ theme }) => theme.font.desktop.title2};
    color: ${({ theme }) => theme.color.gray700};

    .highlight {
      color: ${({ theme }) => theme.color.primary500};
    }
  }
`;

const MenuCardContainer = styled.div`
  display: flex;
  gap: 32px;
`;

const MenuCard = styled.button`
  width: 363px;
  height: 430px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  padding: 53px 33px;
  background: ${({ theme }) => theme.color.white};
  border-radius: 16px;

  box-shadow:
    0px 4px 43.2px 0px rgba(198, 141, 255, 0.36),
    0px 4px 32.2px 0px rgba(255, 255, 255, 0.61);

  .content-title {
    ${({ theme }) => theme.color.black};
    text-align: center;

    .title {
      ${({ theme }) => theme.font.desktop.title1};
      margin-bottom: 4px;
    }

    .subtitle {
      ${({ theme }) => theme.font.desktop.body1m};
    }
  }

  img {
    width: 205px;
    height: 205px;
  }

  &:hover {
    img {
      width: 255px;
      height: 255px;
    }
  }
`;
