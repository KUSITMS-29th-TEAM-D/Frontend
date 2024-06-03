import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
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
  type: string;
  programsId: number;
  selfUnderstandingUrl: string;
  name: string;
  link: string;
}

export const WholeUnderstandView = () => {
  const [data, setData] = useState<ApiResponseItem[]>([]);
  const navigate = useNavigate();
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

  const handleClick = (type: string, programsId: number, link: string) => {
    if (type === 'type1') {
      navigate(`/program/self-understanding/${programsId}`);
    } else if (type === 'type2') {
      window.location.href = link;
    }
  };

  return (
    <StyledSectionContainer>
      <Container>
        {data.map((item, index) => (
          <ExperienceCard
            key={index}
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
