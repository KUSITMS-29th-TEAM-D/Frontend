import { styled } from 'styled-components';

import TestImage from '@/assets/test1.png';
import { BubbleSection } from '@/components/ExperienceDetailPage/BubbleSection';
import { DetailSection } from '@/components/ExperienceDetailPage/DetailSection';
import { ImageSection } from '@/components/ExperienceDetailPage/ImageSection';

export const ExperienceDetailPage = () => {
  return (
    <StyledContainer>
      <DetailSection />
      <BubbleSection />
      <ImageSection />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 64px 56px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 72px;
  display: inline-flex;
  padding-top: 142px;
`;

export const Dummy1 = {
  imageURL: TestImage,
  profileImageURL: TestImage,
  participants: 28,
  title: '퍼스널 브랜딩, ‘나’를 기획, 디자인하기',
  subtitle:
    '대한민국은 국제평화의 유지에 노력하고 침략적 전쟁을 부인한다. 국민의 모든 자유와 권리는 국가안전보장·질서유지 또는 공공복리를 위하여 필요한 경우에 한하여 법률로써 제한할 수 있으며.대한민국은 국제평화의 유지에 노력하고 침략적 전쟁을 부인한다.',
  profileTitle: '신민선',
  profileSubtitle: '콘텐츠 마케터 | 퍼스널브랜딩 | 어쩌구',
  progranURL: TestImage,
};
