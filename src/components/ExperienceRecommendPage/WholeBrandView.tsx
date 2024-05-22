import { useEffect, useState } from 'react';

import styled from 'styled-components';

import { authClient } from '@/apis/client';
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
  link: string;
  programsId: number;
}

export const WholeBrandView = () => {
  const [data, setData] = useState<ApiResponseItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await authClient.get('/api/programs/main/branding');
        if (response.data.is_success) {
          setData(response.data.payload);
        } else {
          console.error('Failed to fetch data', response.data.message);
          setError(response.data.message);
        }
      } catch (error) {
        console.error('Error', error);
        setError('Failed to fetch data');
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <StyledSectionContainer>
      <Container>
        {data.map((item) => (
          <ExperienceCard
            key={item.programsId}
            imageUrl={item.selfUnderstandingUrl}
            title={item.link}
            subtitle={item.name}
            $variant={item.link ? 'type1' : 'type2'}
          />
        ))}
      </Container>
    </StyledSectionContainer>
  );
};
