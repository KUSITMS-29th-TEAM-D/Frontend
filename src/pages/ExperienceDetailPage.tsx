import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { authClient } from '@/apis/client';
import TestImage from '@/assets/test1.png';
import { BubbleSection } from '@/components/ExperienceDetailPage/BubbleSection';
import DetailSection from '@/components/ExperienceDetailPage/DetailSection';
import { ImageSection } from '@/components/ExperienceDetailPage/ImageSection';

export interface DetailData {
  imageURL: string;
  profileImageURL: string;
  participants: number;
  title: string;
  subtitle: string;
  providerName: string;
  providerJob: string;
  providerTitle: string;
  providerKeyword: string;
  programURL: string;
}

export const ExperienceDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<DetailData>(Dummy1);

  useEffect(() => {
    const detailData = async () => {
      try {
        const response = await authClient.get(`/api/programs/branding/${id}`);
        const apiData = response.data.payload;
        const formattedData: DetailData = {
          imageURL: apiData.imageUrl,
          profileImageURL: apiData.providerImage,
          participants: apiData.participants,
          title: apiData.name,
          subtitle: apiData.oneLineDescription,
          providerName: apiData.providerName,
          providerJob: apiData.providerJob,
          providerTitle: apiData.name,
          providerKeyword: apiData.keywords.join(', '),
          programURL: apiData.link,
        };
        setData(formattedData);
      } catch (error) {
        console.error(error);
      }
    };

    detailData();
  }, [id]);

  return (
    <StyledContainer>
      <DetailSection data={data} />
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

export const Dummy1: DetailData = {
  imageURL: TestImage, //imageUrl
  profileImageURL: TestImage, //providerUrl
  participants: 28,
  title: '퍼스널 브랜딩, ‘나’를 기획, 디자인하기', //name
  subtitle:
    '대한민국은 국제평화의 유지에 노력하고 침략적 전쟁을 부인한다. 국민의 모든 자유와 권리는 국가안전보장·질서유지 또는 공공복리를 위하여 필요한 경우에 한하여 법률로써 제한할 수 있으며.대한민국은 국제평화의 유지에 노력하고 침략적 전쟁을 부인한다.', //on
  providerName: '신민선',
  providerJob: '콘텐츠 마케터',
  providerTitle: '퍼스널브랜딩',
  providerKeyword: '어쩌구',
  programURL: TestImage,
};
