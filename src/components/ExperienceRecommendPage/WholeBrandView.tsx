import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
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
  type: string;
  selfUnderstandingUrl: string;
  name: string;
  link: string;
  programsId: number;
}

export const WholeBrandView = () => {
  const [data, setData] = useState<ApiResponseItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

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

  const handleClick = (type: string, programsId: number, link: string) => {
    if (type === 'type1') {
      navigate(`/program/branding/${programsId}`);
    } else if (type === 'type2') {
      window.open(link, '_blank');
    }
  };

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
            title={item.link ? '외부 프로그램' : '셀피스 프로그램'}
            subtitle={item.name}
            $variant={item.link ? 'type2' : 'type1'}
            programsId={item.programsId}
            onClick={() => handleClick(item.link ? 'type2' : 'type1', item.programsId, item.link)}
          />
        ))}
      </Container>
    </StyledSectionContainer>
  );
};
