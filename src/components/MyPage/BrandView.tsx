import { useEffect, useState } from 'react';

import styled from 'styled-components';

import { personaAPI } from '@/apis/personaAPI';
import { ReactComponent as AddIcon } from '@/assets/icons/add.svg';
import { ReactComponent as ArrowRight } from '@/assets/icons/arrowRight.svg';
import { ReactComponent as CalendarIcon } from '@/assets/icons/calendar.svg';
import { ReactComponent as InfoIcon } from '@/assets/icons/info.svg';
import Card from '@/components/MyPage/Card';
import DateCard from '@/components/MyPage/DateCard';
import { BrandChip } from '@/components/common/Chip/BrandChip';
import { BrandCardModal } from '@/components/common/Modal/BrandCardModal';
import { PERSONA } from '@/constants/persona';
import { PIECE_IMAGE } from '@/constants/piece';
import { userService } from '@/services/UserService';
import { DefineResult } from '@/types/test.type';

interface DateCardProps {
  title: string;
  description: string;
  date: string;
}

export const BrandView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStatus, setModalStatus] = useState<'준비' | '진행중' | '완료' | null>(null);
  const [readyCards, setReadyCards] = useState<DateCardProps[]>([]);
  const [progressCards, setProgressCards] = useState<DateCardProps[]>([]);
  const [completeCards, setCompleteCards] = useState<DateCardProps[]>([]);
  const [defineResult, setDefineResult] = useState<DefineResult | null>(null);

  useEffect(() => {
    personaAPI.getDefineMember().then((res) => {
      setDefineResult(res.payload);
    });
  }, []);

  const openModal = (status: '준비' | '진행중' | '완료') => {
    setIsModalOpen(true);
    setModalStatus(status);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalStatus(null);
  };

  const addDateCard = (
    title: string,
    description: string,
    date: string,
    status: '준비' | '진행중' | '완료'
  ) => {
    const newCard = { title, description, date };
    if (status === '준비') {
      setReadyCards((prev) => [...prev, newCard]);
    } else if (status === '진행중') {
      setProgressCards((prev) => [...prev, newCard]);
    } else if (status === '완료') {
      setCompleteCards((prev) => [...prev, newCard]);
    }
  };

  return (
    <StyledContainer>
      <BrandHeader>
        <HeaderLeft>
          <BrandLogo>
            {defineResult && (
              <img
                src={
                  PIECE_IMAGE.find((card) => card.name === defineResult.name.toLowerCase())?.[
                    'image'
                  ]
                }
                alt={defineResult?.name}
              />
            )}
          </BrandLogo>
          <BrandTitle>{defineResult ? PERSONA[defineResult.name] : ''}</BrandTitle>
          <BrandSubtitle>상반기 100만 구독자 확보</BrandSubtitle>
        </HeaderLeft>
        <HeaderRight>
          <RightText>더보기</RightText>
          <RightIcon>
            <ArrowRight />
          </RightIcon>
        </HeaderRight>
      </BrandHeader>
      <ContentContainer>
        <TopContent>
          <BrandContainer>
            <BrandTextContainer>
              <BrandText>브랜드 관리</BrandText>
              <RightIcon>
                <InfoIcon />
              </RightIcon>
            </BrandTextContainer>
          </BrandContainer>

          <BrandMenuContainer>
            <CalendarIcon />
          </BrandMenuContainer>
        </TopContent>
        <CenterContent>
          <RecommendContainer>
            <RecommendText>Ai 추천</RecommendText>
            <RecommendText>
              <span>{userService.getUserNickname()}님, 이런 콘텐츠는 어떠세요?</span>
            </RecommendText>
          </RecommendContainer>
          <RecommendCardContainer>
            {Dummy2.map((item) => (
              <Card key={item.id} title={item.title} description={item.description} />
            ))}
          </RecommendCardContainer>
        </CenterContent>
        <BottomContent>
          <BottomContainer>
            <CardHeader>
              <BrandChip>준비</BrandChip>
              <StyledAdd onClick={() => openModal('준비')}>
                <AddIcon width="42px" height="42px" cursor="pointer" />
              </StyledAdd>
            </CardHeader>
            {Dummy3.map((item, index) => (
              <DateCard
                key={index}
                title={item.title}
                description={item.description}
                date={item.date}
              />
            ))}
            {readyCards.map((item, index) => (
              <DateCard
                key={index}
                title={item.title}
                description={item.description}
                date={item.date}
              />
            ))}
          </BottomContainer>
          <BottomContainer>
            <CardHeader>
              <BrandChip>진행</BrandChip>
              <StyledAdd onClick={() => openModal('진행중')}>
                <AddIcon width="42px" height="42px" cursor="pointer" />
              </StyledAdd>
            </CardHeader>
            {Dummy4.map((item, index) => (
              <DateCard
                key={index}
                title={item.title}
                description={item.description}
                date={item.date}
              />
            ))}
            {progressCards.map((item, index) => (
              <DateCard
                key={index}
                title={item.title}
                description={item.description}
                date={item.date}
              />
            ))}
          </BottomContainer>
          <BottomContainer>
            <CardHeader>
              <BrandChip>완료</BrandChip>
              <StyledAdd onClick={() => openModal('완료')}>
                <AddIcon width="42px" height="42px" cursor="pointer" />
              </StyledAdd>
            </CardHeader>
            {Dummy5.map((item, index) => (
              <DateCard
                key={index}
                title={item.title}
                description={item.description}
                date={item.date}
              />
            ))}
            {completeCards.map((item, index) => (
              <DateCard
                key={index}
                title={item.title}
                description={item.description}
                date={item.date}
              />
            ))}
          </BottomContainer>
        </BottomContent>
      </ContentContainer>
      {modalStatus && (
        <BrandCardModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onAdd={addDateCard}
          status={modalStatus}
        />
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px 24px 52px 24px;
`;

const BrandHeader = styled.div`
  width: 100%;
  height: 101px;
  padding: 24px;
  background-color: ${({ theme }) => `${theme.color.primary50}`};
  border-radius: 16px;
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
`;

const HeaderLeft = styled.div`
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  display: flex;
`;

const BrandLogo = styled.div`
  width: 52px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: inline-flex;
`;

const BrandTitle = styled.div`
  color: ${({ theme }) => `${theme.color.gray900}`};
  ${({ theme }) => theme.font.desktop.body1b};
`;

const BrandSubtitle = styled.div`
  color: ${({ theme }) => `${theme.color.primary500}`};
  ${({ theme }) => theme.font.desktop.body1m};
`;

const HeaderRight = styled.div`
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  display: flex;
`;

const RightText = styled.div`
  color: ${({ theme }) => `${theme.color.gray700}`};
  ${({ theme }) => theme.font.desktop.body1m};
`;

const RightIcon = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
`;
const StyledAdd = styled.div`
  width: 24px;
  height: 24px;
  position: relative;

  path {
    fill: ${({ theme }) => theme.color.primary500};
  }
`;
const ContentContainer = styled.div`
  align-self: stretch;
  //height: 996px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  display: flex;
`;

const TopContent = styled.div`
  align-self: stretch;
  justify-content: space-between;
  align-items: flex-end;
  display: inline-flex;
`;
const BrandTextContainer = styled.div`
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  display: flex;
`;
const BrandContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  display: flex;
`;
const BrandText = styled.div`
  text-align: center;
  color: ${({ theme }) => `${theme.color.gray800}`};
  ${({ theme }) => theme.font.desktop.title2};
  word-wrap: break-word;
`;
const BrandMenuContainer = styled.div`
  justify-content: flex-start;
  align-items: center;
  display: flex;
`;
const CenterContent = styled.div`
  align-self: stretch;
  //height: 208px;
  padding: 24px;
  background: ${({ theme }) => `${theme.color.gray100}`};
  border-radius: 16px;
  border: 2px #efefef solid;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  display: flex;
`;

const RecommendContainer = styled.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 16px;
  display: inline-flex;
`;
const RecommendText = styled.div`
  color: ${({ theme }) => `${theme.color.primary600}`};
  ${({ theme }) => theme.font.desktop.body1b};
  word-wrap: break-word;

  > span {
    color: ${({ theme }) => theme.color.gray900};
    ${({ theme }) => theme.font.desktop.body1r};
  }
`;
const RecommendCardContainer = styled.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  display: inline-flex;
`;
const BottomContent = styled.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  display: inline-flex;
`;

const BottomContainer = styled.div`
  flex: 1 1 0;
  padding: 16px;
  background: ${({ theme }) => `${theme.color.gray100}`};
  border-radius: 16px;
  border: 2px #efefef solid;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: inline-flex;
`;

const CardHeader = styled.div`
  align-self: stretch;
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
`;
/*
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
];*/

const Dummy2 = [
  {
    id: 1,
    title: '생성형 AI란 무엇인가?',
    description: '생성형 AI의 기본 개념, 역사, 및 발전 과정을 설명하는 콘텐츠',
    date: '2024.06.24',
  },
  {
    id: 2,
    title: '생성형 AI의 실제 응용 사례',
    description:
      '예술, 음악, 글쓰기, 게임 개발 등 다양한 분야에서의 생성형 AI 활용 사례를 소개하는 콘텐츠',
    date: '2024.06.24',
  },
  {
    id: 3,
    title: '생성형 AI 툴 및 플랫폼 리뷰',
    description: '생성형 AI 툴 및 플랫폼 리뷰',
    date: '2024.06.24',
  },
  {
    id: 4,
    title: '생성형 AI와 윤리적 문제',
    description:
      '생성형 AI 사용 시 발생할 수 있는 윤리적 문제와 해결 방안에 대한 논의를 다룬 콘텐츠',
    date: '2024.06.24',
  },
];

const Dummy3 = [
  {
    id: 1,
    title: '생성형 AI란 무엇인가?',
    description: '생성형 AI의 기본 개념, 역사, 및 발전 과정을 설명하는 콘텐츠',
    date: '2024.06.24',
  },
  {
    id: 2,
    title: '생성형 AI의 실제 응용 사례',
    description:
      '예술, 음악, 글쓰기, 게임 개발 등 다양한 분야에서의 생성형 AI 활용 사례를 소개하는 콘텐츠',
    date: '2024.06.24',
  },
];

const Dummy4 = [
  {
    id: 3,
    title: '생성형 AI 툴 및 플랫폼 리뷰',
    description: '생성형 AI 툴 및 플랫폼 리뷰',
    date: '2024.06.24',
  },
  {
    id: 4,
    title: '생성형 AI와 윤리적 문제',
    description:
      '생성형 AI 사용 시 발생할 수 있는 윤리적 문제와 해결 방안에 대한 논의를 다룬 콘텐츠',
    date: '2024.06.24',
  },
  {
    id: 5,
    title: '생성형 AI를 활용한 프로젝트 튜토리얼',
    description:
      '텍스트 생성, 이미지 생성, 음악 생성 등 구체적인 프로젝트를 통해 생성형 AI 사용법을 단계별로 설명하는 콘텐츠',
    date: '2024.06.24',
  },
  {
    id: 6,
    title: '생성형 AI를 이용한 생산성 향상',
    description:
      '생성형 AI를 활용하여 개인 및 조직의 생산성을 향상시키는 방법에 대한 팁과 전략을 담은 콘텐츠',
    date: '2024.06.24',
  },
];

const Dummy5 = [
  {
    id: 7,
    title: '생성형 AI 관련 인터뷰 및 전문가 의견',
    description: '생성형 AI 분야의 전문가와의 인터뷰를 통해 얻은 인사이트 공유',
    date: '2024.06.24',
  },
  {
    id: 8,
    title: '생성형 AI 트렌드 및 최신 뉴스',
    description: '생성형 AI 분야의 최신 트렌드와 뉴스 업데이트',
    date: '2024.06.24',
  },
  {
    id: 9,
    title: '온라인 프로필 최적화',
    description:
      'LinkedIn, Twitter, Instagram 등 주요 소셜 미디어에서 프로필을 최적화하는 팁을 담은 콘텐츠',
    date: '2024.06.24',
  },
  {
    id: 10,
    title: '브랜딩을 위한 비디오 콘텐츠 제작',
    description: '유튜브 등 비디오 플랫폼에서 자신을 브랜딩한 방법과 소감을 담은 콘텐츠',
    date: '2024.06.24',
  },
  {
    id: 11,
    title: '퍼스널 브랜딩과 SEO 전략',
    description: '검색 엔진 최적화를 통해 자신의 온라인 가시성을 높이는 방법을 설명하는 콘텐츠',
    date: '2024.06.24',
  },
];
