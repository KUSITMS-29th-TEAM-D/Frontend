import { useEffect, useState } from 'react';

import styled from 'styled-components';

import { noAuthClient } from '@/apis/client';
import { ExperienceCard } from '@/components/common/Card/ExperienceCard';

const StyledSectionContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 24px;
`;

interface ApiResponseItem {
  selfUnderstandingUrl: string;
  name: string;
  link: string | null;
}

export const WholeRecommendView2 = () => {
  const [data, setData] = useState<ApiResponseItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await noAuthClient.get('/api/programs/main/self-understanding');
        setData(response.data.payload);
      } catch (error) {
        console.error('오류1', error);
      }
    };

    fetchData();
  }, []);

  return (
    <StyledSectionContainer>
      <Container>
        {data.map((item, index) => (
          <ExperienceCard
            key={index}
            imageUrl={item.selfUnderstandingUrl}
            title={item.name}
            subtitle={item.link || ''}
            $variant={'type1'}
          />
        ))}
      </Container>
    </StyledSectionContainer>
  );
};
