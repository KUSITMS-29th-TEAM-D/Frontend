import { useEffect, useRef, useState } from 'react';

import html2canvas from 'html2canvas';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { styled } from 'styled-components';

import { personaAPI } from '@/apis/personaAPI';
import LockImage from '@/assets/icons/lock.svg';
import DiscoverImage from '@/assets/myPage/MypageDiscover.png';
import { DownloadButton } from '@/components/DefineResultPage/Button';
import Card from '@/components/MyPage/Card';
import { PlainButton } from '@/components/common/Button/PlainButton';
import { PERSONA } from '@/constants/persona';
import { userService } from '@/services/UserService';
import { DefineResult } from '@/types/test.type';

export const PersonaView = () => {
  const [defineResult, setDefineResult] = useState<DefineResult | null>(null);
  const [isFront, setIsFront] = useState(true);
  const captureRef = useRef<HTMLImageElement>(null);
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
  };

  useEffect(() => {
    personaAPI.getDefineMember().then((res) => {
      setDefineResult(res.payload);
    });
  }, []);

  const handleDownloadImage = () => {
    if (!captureRef.current || !defineResult) return;

    const capture = captureRef.current;

    html2canvas(capture, { scrollY: -window.scrollY }).then((canvas) => {
      const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
      const link = document.createElement('a');
      link.href = image;
      link.download = `${defineResult.name}-${isFront ? 'front' : 'back'}.png`;
      link.click();
    });
  };

  return (
    <StyledContainer>
      <StyledInnerContainer>
        <StyledTopContainer>
          <TopContainer>
            {defineResult && (
              <>
                <div className="title">
                  <span className="highlight">{PERSONA[defineResult.name]}</span> 조각을 가진,{' '}
                  <span className="highlight">{userService.getUserNickname()}</span>님의 페르소나
                </div>
                <img
                  src={isFront ? defineResult.front_img_url : defineResult.back_img_url}
                  alt="card"
                  className="image-container"
                  ref={captureRef}
                  onClick={() => setIsFront((prev) => !prev)}
                />
                <div className="button-container">
                  <PlainButton
                    width="376px"
                    height="48px"
                    variant="primary2"
                    onClick={() => {
                      navigate('/understand');
                    }}
                  >
                    자세히보기
                  </PlainButton>
                  <DownloadButton onClick={handleDownloadImage} />
                </div>
              </>
            )}
          </TopContainer>
          <BottomContainer>
            <BottomTitleContainer>
              <BottomTitle>
                <Highlight>Discover </Highlight>나를 깊게 이해해요
              </BottomTitle>
            </BottomTitleContainer>
            <BottomCardContainer>
              <StyledSlider>
                <Slider {...settings}>
                  {Dummy1.map((item) => (
                    <Card key={item.id} title={item.title} description={item.description} />
                  ))}
                </Slider>
              </StyledSlider>
            </BottomCardContainer>
            <BottomImageContainer>
              <div className="blur">
                <img src={LockImage} alt="lock" className="lock" />
                <div className="text-container">
                  <div>정의하기 테스트의 추가 분석 결과를 확인하고 싶다면</div>
                  <div>셀피스 프리미엄에서 만나보세요.</div>
                </div>
                <PlainButton variant="primary" height="48px" width="252px">
                  셀피스 프리미엄 구독하러 가기
                </PlainButton>
              </div>
              <img src={DiscoverImage} />
            </BottomImageContainer>
          </BottomContainer>
        </StyledTopContainer>
      </StyledInnerContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  padding-top: 81px;
`;

const StyledInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  display: inline-flex;
`;

const StyledTopContainer = styled.div`
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 48px;
  display: flex;
`;

const TopContainer = styled.div`
  align-self: stretch;
  height: fit-content;
  padding: 24px;
  background-color: ${({ theme }) => `${theme.color.primary50}`};
  border-radius: 16px;
  overflow: hidden;
  border: 2px #ddccfe solid;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  display: flex;

  .title {
    ${({ theme }) => theme.font.desktop.body1b};
    color: ${({ theme }) => `${theme.color.gray700}`};
    .highlight {
      color: ${({ theme }) => `${theme.color.primary500}`};
    }
  }

  .image-container {
    width: 210px;
    height: 340px;
    border-radius: 21px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.13);
    cursor: pointer;
  }

  .button-container {
    display: flex;
    flex-direction: column;
    gap: 8px;

    svg path {
      fill: ${({ theme }) => theme.color.white};
    }
  }
`;

const BottomContainer = styled.div`
  align-self: stretch;
  height: 627px;
  //flex-grow: 1;
  padding: 24px;
  background-color: ${({ theme }) => `${theme.color.gray150}`};
  border-radius: 16px;
  overflow: hidden;
  border: 2px #dfdfdf solid;
  flex-direction: column;
  gap: 24px;
  display: flex;
`;

const BottomTitleContainer = styled.div`
  align-self: stretch;
  height: 28px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  display: flex;
`;

const BottomTitle = styled.div`
  color: ${({ theme }) => `${theme.color.gray700}`};
  ${({ theme }) => theme.font.desktop.body1b};
  word-wrap: break-word;
`;

const Highlight = styled.span`
  color: ${({ theme }) => `${theme.color.primary600}`};
`;

const BottomCardContainer = styled.div`
  width: 100%;
`;

const StyledSlider = styled.div`
  width: 100%;

  .slick-list {
    padding: 5px;

    .slick-track {
      width: 100% !important;
      display: flex;
      gap: 12px;
    }
    .slick-track:before,
    .slick-track:after {
      content: none;
    }
  }
`;

const BottomImageContainer = styled.div`
  display: flex;
  justify-content: center;

  border-radius: 16px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.13);

  position: relative;
  overflow: hidden;

  img {
    height: 390px;
    object-fit: cover;
  }

  .blur {
    width: 100%;
    height: 100%;
    background: var(--modal-bg, rgba(18, 18, 18, 0.36));
    /* blur */
    backdrop-filter: blur(5px);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${({ theme }) => theme.font.desktop.label1m};
    color: ${({ theme }) => theme.color.white};

    .lock {
      width: 30px;
      height: 30px;
      margin-bottom: 20px;
    }

    .text-container {
      margin-bottom: 20px;
    }
  }
`;

const Dummy1 = [
  {
    id: 1,
    title: '생성형 AI란 무엇인가?',
    description: '생성형 AI의 기본 개념, 역사, 및 발전 과정을 설명하는 콘텐츠',
  },
  {
    id: 2,
    title: '생성형 AI의 실제 응용 사례',
    description:
      '예술, 음악, 글쓰기, 게임 개발 등 다양한 분야에서의 생성형 AI 활용 사례를 소개하는 콘텐츠',
  },
  {
    id: 3,
    title: '생성형 AI 툴 및 플랫폼 리뷰',
    description: '생성형 AI 툴 및 플랫폼 리뷰',
  },
  {
    id: 4,
    title: '생성형 AI와 윤리적 문제',
    description:
      '생성형 AI 사용 시 발생할 수 있는 윤리적 문제와 해결 방안에 대한 논의를 다룬 콘텐츠',
  },
  {
    id: 5,
    title: '생성형 AI를 활용한 프로젝트 튜토리얼',
    description:
      '텍스트 생성, 이미지 생성, 음악 생성 등 구체적인 프로젝트를 통해 생성형 AI 사용법을 단계별로 설명하는 콘텐츠',
  },
  {
    id: 6,
    title: '생성형 AI를 이용한 생산성 향상',
    description:
      '생성형 AI를 활용하여 개인 및 조직의 생산성을 향상시키는 방법에 대한 팁과 전략을 담은 콘텐츠',
  },
  {
    id: 7,
    title: '생성형 AI 관련 인터뷰 및 전문가 의견',
    description: '생성형 AI 분야의 전문가와의 인터뷰를 통해 얻은 인사이트 공유',
  },
  {
    id: 8,
    title: '생성형 AI 트렌드 및 최신 뉴스',
    description: '생성형 AI 분야의 최신 트렌드와 뉴스 업데이트',
  },
  {
    id: 9,
    title: '온라인 프로필 최적화',
    description:
      'LinkedIn, Twitter, Instagram 등 주요 소셜 미디어에서 프로필을 최적화하는 팁을 담은 콘텐츠',
  },
  {
    id: 10,
    title: '브랜딩을 위한 비디오 콘텐츠 제작',
    description: '유튜브 등 비디오 플랫폼에서 자신을 브랜딩한 방법과 소감을 담은 콘텐츠',
  },
  {
    id: 11,
    title: '퍼스널 브랜딩과 SEO 전략',
    description: '검색 엔진 최적화를 통해 자신의 온라인 가시성을 높이는 방법을 설명하는 콘텐츠',
  },
  {
    id: 12,
    title: '디자인 씽킹 툴킷 소개',
    description: '디자인 씽킹을 실천할 때 유용한 도구와 리소스를 소개하는 콘텐츠',
  },
  {
    id: 13,
    title: '디자인 씽킹과 데이터 분석',
    description:
      '데이터 분석과 디자인 씽킹을 결합하여 인사이트를 도출하는 방법에 대한 학습 내용을 공유하는 콘텐츠',
  },
  {
    id: 14,
    title: 'AI와 머신러닝: 미래를 이끌 기술 소개',
    description:
      'AI와 머신러닝 관련하여 미래에서 어떤 방향으로 활용될 것인가에 대한 내용을 다룬 콘텐츠',
  },
];
