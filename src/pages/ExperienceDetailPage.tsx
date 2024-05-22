import { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { programAPI } from '@/apis/programAPI';
import { BubbleSection } from '@/components/ExperienceDetailPage/BubbleSection';
import DetailSection from '@/components/ExperienceDetailPage/DetailSection';
import { ImageSection } from '@/components/ExperienceDetailPage/ImageSection';
import { ProgramDetailResult } from '@/types/program.type';

export const ExperienceDetailPage = () => {
  const { type, id } = useParams();
  const [data, setData] = useState<ProgramDetailResult | undefined>(undefined);
  const [keywords, setKeywords] = useState([]);
  const [description, setDescription] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    const detailData = async () => {
      try {
        if (type && id) {
          const response = await programAPI.getProgramDetail(type, id);
          setData(response.payload);
          setKeywords(response.payload.keywords);
          setDescription(response.payload.descriptionUrl);
        }
      } catch (error) {
        console.error(error);
        window.alert('프로그램 정보를 불러오는데 실패했습니다.');
        // 프로그램 페이지로 이동
        navigate('/program');
      }
    };

    detailData();
  }, [type, id]);

  if (data && id)
    return (
      <StyledContainer>
        <StyledInnerContainer>
          <DetailSection data={data} programId={id} />
          <BubbleSection keywords={keywords} />
          <ImageSection description={description} />
        </StyledInnerContainer>
      </StyledContainer>
    );

  return (
    <StyledContainer>
      <StyledInnerContainer>Loading...</StyledInnerContainer>
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
