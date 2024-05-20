import { useState } from 'react';

import styled, { css, useTheme } from 'styled-components';

import { ReactComponent as CheckIcon } from '@/assets/icons/check.svg';
import TestImage from '@/assets/test1.png';
import { BrandingSection } from '@/components/HomePage/BrandingSection';
import { RecommendSectionTemplate } from '@/components/HomePage/RecommendSectionTemplate';
import { Dropdown } from '@/components/common/Dropdown/Dropdown';
import { IMAGE_KEYWORD_LIST, INTEREST_LIST } from '@/constants/onboarding';

const Dummy = [
  {
    id: 1,
    img: TestImage,
    title:
      '감성있는 이탈리안 파스타 만들기 감성있는 이탈리안 파스타 만들기ㄴㅇㄹㄴㅇㄹㄴㄹㄴㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㅇ',
    keywords: ['소통하는', '감성있는', '평화로운'],
    hot: true,
    path: '',
  },
  {
    id: 2,
    img: TestImage,
    title:
      '감성있는 이탈리안 파스타 만들기 감성있는 이탈리안 파스타 만들기ㄴㅇㄹㄴㅇㄹㄴㄹㄴㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㅇ',
    keywords: ['소통하는', '감성있는', '평화로운'],
    hot: true,
    path: '',
  },
  {
    id: 3,
    img: TestImage,
    title:
      '감성있는 이탈리안 파스타 만들기 감성있는 이탈리안 파스타 만들기ㄴㅇㄹㄴㅇㄹㄴㄹㄴㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㅇ',
    keywords: ['소통하는', '감성있는', '평화로운'],
    hot: false,
    path: '',
  },
  {
    id: 4,
    img: TestImage,
    title:
      '감성있는 이탈리안 파스타 만들기 감성있는 이탈리안 파스타 만들기ㄴㅇㄹㄴㅇㄹㄴㄹㄴㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㅇ',
    keywords: ['소통하는', '감성있는', '평화로운'],
    hot: false,
    path: '',
  },
  {
    id: 5,
    img: TestImage,
    title:
      '감성있는 이탈리안 파스타 만들기 감성있는 이탈리안 파스타 만들기ㄴㅇㄹㄴㅇㄹㄴㄹㄴㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㅇ',
    keywords: ['소통하는', '감성있는', '평화로운'],
    hot: false,
    path: '',
  },
];

// TODO: 금액 모달 구현
export const NonTesterMemberView = () => {
  const [selectedInterest, setSelectedInterest] = useState<string[]>([]);
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [selectedFree, setSelectedFree] = useState<boolean>(false);
  /* const [showAmountModal, setShowAmountModal] = useState<boolean>(false); */
  const [selectedAmount, setSelectedAmount] = useState<{ min: number; max: number }>({
    min: 0,
    max: 0,
  });
  const theme = useTheme();

  return (
    <>
      <BrandingSection isLoggedIn />
      <RecommendSectionTemplate
        title="나를 더 잘 이해하기 위해"
        subTitle="나를 브랜딩할 수 있는 경험을 추천해드릴게요."
        backgroundColor={theme.color.primary50}
        recommendItems={Dummy}
        refreshHandler={() => {
          setSelectedInterest([]);
          setSelectedKeywords([]);
        }}
      >
        <>
          <Dropdown
            title="분야"
            placeholder="키워드 추가"
            contents={INTEREST_LIST}
            selected={selectedInterest}
            clickContentHandler={(newSelected: string) => {
              if (selectedInterest.includes(newSelected)) {
                setSelectedInterest(selectedInterest.filter((keyword) => keyword !== newSelected));
              } else {
                setSelectedInterest([...selectedInterest, newSelected]);
              }
            }}
            width="312px"
            contentMaxHeight="172px"
            multiple
          />
          <Dropdown
            title="이미지 키워드"
            placeholder="키워드 추가"
            contents={IMAGE_KEYWORD_LIST}
            selected={selectedKeywords}
            clickContentHandler={(newSelected: string) => {
              if (selectedKeywords.includes(newSelected)) {
                setSelectedKeywords(selectedKeywords.filter((keyword) => keyword !== newSelected));
              } else {
                setSelectedKeywords([...selectedKeywords, newSelected]);
              }
            }}
            width="312px"
            contentMaxHeight="172px"
            multiple
          />
        </>
      </RecommendSectionTemplate>
      <RecommendSectionTemplate
        title="퍼스널브랜딩을 더 잘하고싶다면?"
        subTitle="셀피스는 나를 더 잘 알기위한 프로그램을 추천해요."
        backgroundColor={theme.color.white}
        recommendItems={Dummy}
        refreshHandler={() => {
          setSelectedFree(false);
          setSelectedAmount({ min: 0, max: 0 });
        }}
      >
        <>
          <StyledFilterButton
            onClick={() => {
              setSelectedFree((prev) => !prev);
            }}
            $active={selectedFree}
          >
            <CheckIcon />
            <span>무료</span>
          </StyledFilterButton>
          <StyledFilterAmount
            onClick={() => {
              //setShowAmountModal((prev) => !prev);
            }}
          >
            <span>금액</span>
            <div>
              <span className="amount">{selectedAmount.min}</span>
              <span className="range">~</span>
              <span className="amount">{selectedAmount.max}</span>
              <span className="unit">원</span>
            </div>
          </StyledFilterAmount>
        </>
      </RecommendSectionTemplate>
    </>
  );
};

const StyledFilterButton = styled.li<{ $active?: boolean }>`
  display: flex;
  gap: 8px;

  padding: 12px 16px;
  background: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.font.desktop.body2r};

  border-radius: 8px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.13);
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color.gray100};
  }

  ${({ $active, theme }) =>
    $active &&
    css`
      color: ${theme.color.primary500};

      svg path {
        fill: ${theme.color.primary500};
      }
    `}
`;

const StyledFilterAmount = styled(StyledFilterButton)`
  width: 312px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    gap: 4px;

    .amount {
      ${({ theme }) => theme.font.desktop.body1m};
      color: ${({ theme }) => theme.color.gray300};
    }

    .range {
      ${({ theme }) => theme.font.desktop.body1b};
      color: ${({ theme }) => theme.color.gray700};
    }

    .unit {
      ${({ theme }) => theme.font.desktop.body2r};
      color: ${({ theme }) => theme.color.gray700};
    }
  }
`;
