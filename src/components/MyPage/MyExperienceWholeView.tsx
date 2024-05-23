import { useEffect, useState } from 'react';

import styled from 'styled-components';

import { authClient } from '@/apis/client';
import { ExperienceCard } from '@/components/MyPage/ExperienceCard';

interface ApiResponseItem {
  selfUnderstandingUrl: string;
  name: string;
  link: string;
  programsId: number;
}

interface MyExperienceProps {
  programData: string[];
  sortOrder: string;
}

export const MyExperienceWholeView = ({ programData, sortOrder }: MyExperienceProps) => {
  const [data, setData] = useState<ApiResponseItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await authClient.get('/api/users/experiences/all/desc', {});

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
            imageUrl={item.selfUnderstandingUrl}
            title={item.link ? '셀피스 프로그램' : '외부 프로그램'}
            subtitle={item.name}
            $variant={item.link ? 'type1' : 'type2'}
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
