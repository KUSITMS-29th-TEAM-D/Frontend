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
  link: string;
  programsId: number;
}

interface RecommendUnderstandProps {
  minAmount: number;
  maxAmount: number;
  selectedProgramForm: string;
}

interface ApiResponse {
  code: string;
  message: string;
  payload: ApiResponseItem[];
  is_success: boolean;
}

export const RecommendUnderstand = ({
  minAmount,
  maxAmount,
  selectedProgramForm,
}: RecommendUnderstandProps) => {
  const [data, setData] = useState<ApiResponseItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const payload = {
          startPrice: minAmount,
          endPrice: maxAmount,
          form: selectedProgramForm,
        };

        const response = await noAuthClient.post<ApiResponse>(
          '/api/programs/more/self-understanding',
          payload
        );

        if (response.data.is_success) {
          setData(response.data.payload);
        } else {
          setError(response.data.message);
        }
      } catch (error) {
        setError('Error: Unable to fetch data');
      }
    };

    fetchData();
  }, [minAmount, maxAmount, selectedProgramForm]);

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
