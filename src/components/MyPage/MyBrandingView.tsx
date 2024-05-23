import { useEffect, useState } from 'react';

import styled from 'styled-components';

import { authClient } from '@/apis/client';
import { ExperienceCard } from '@/components/MyPage/ExperienceCard';

interface ApiResponseItem {
  imageUrl: string;
  programsTitle: string;
  type: string;
  programsId: number;
}

interface MyExperienceProps {
  programData: string[];
  sortOrder: string;
}

export const MyBrandingView = ({ programData, sortOrder }: MyExperienceProps) => {
  const [data, setData] = useState<ApiResponseItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await authClient.get('/api/users/experiences/branding/desc', {});

        if (response.data.is_success) {
          setData(response.data.payload);
        } else {
          console.error('error1', response.data.message);
          setError(response.data.message);
        }
      } catch (error) {
        console.error('error2', error);
        setError('error3');
      }
    };

    fetchData();
  }, [programData, sortOrder]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <StyledSectionContainer>
      <Container>
        {data.map((item) => (
          <ExperienceCard
            key={item.programsId}
            imageUrl={item.imageUrl}
            title={item.programsTitle ? '신청 완료' : '외부 프로그램'}
            $variant={item.programsTitle ? 'type1' : 'type2'}
            subtitle={item.programsTitle}
          />
        ))}
      </Container>
    </StyledSectionContainer>
  );
};

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
  gap: 16px;
`;
