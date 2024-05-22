import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { authClient } from '@/apis/client';
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
  const [data, setData] = useState<DetailData | undefined>(undefined);
  const [keywords, setKeywords] = useState([]);

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
        setKeywords(apiData.keywords);
      } catch (error) {
        console.error(error);
      }
    };

    detailData();
  }, [id]);

  if (!data)
    return (
      <StyledContainer>
        <StyledInnerContainer>Loading...</StyledInnerContainer>
      </StyledContainer>
    );
  return (
    <StyledContainer>
      <StyledInnerContainer>
        <DetailSection data={data} />
        <BubbleSection keywords={keywords} />
        <ImageSection />
      </StyledInnerContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  min-width: 1280px;
  padding-top: 76px;
`;

const StyledInnerContainer = styled.div`
  width: 1280px;
  padding: 56px; 64px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 72px;
`;
