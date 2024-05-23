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
  programsId: number;
  selfUnderstandingUrl: string;
  name: string;
  link: string | null;
}

export const WholeUnderstandView = () => {
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
            title={item.link ? '셀피스 프로그램' : '외부 프로그램'}
            subtitle={item.name}
            $variant={item.link ? 'type1' : 'type2'}
            programsId={item.programsId}
          />
        ))}
      </Container>
    </StyledSectionContainer>
  );
};
