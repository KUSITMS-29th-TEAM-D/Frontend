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
  selfUnderstandingUrl: string;
  name: string;
  link: string;
  programsId: number;
  type: string;
}

interface RecommendBrandProps {
  brandingInterest: string[];
  brandingKeywords: string[];
}

export const RecommendBrand = ({ brandingInterest, brandingKeywords }: RecommendBrandProps) => {
  const [data, setData] = useState<ApiResponseItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await authClient.post('/api/programs/more/branding', {
          interest: brandingInterest.length > 0 ? brandingInterest : undefined,
          imageKeywords: brandingKeywords.length > 0 ? brandingKeywords : undefined,
        });

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
  }, [brandingInterest, brandingKeywords]);

  const handleClick = (type: string, programsId: number, link: string) => {
    if (type === 'type1') {
      navigate(`/program/branding/${programsId}`);
    } else if (type === 'type2') {
      window.location.href = link;
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
