import styled from 'styled-components';

import { ReactComponent as YoutubeIcon } from '@/assets/icons/youtube.svg';
const Container = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 12px;
  display: inline-flex;
`;

const Card = styled.div`
  width: 80px;
  height: 100px;
  background: white;
  border-radius: 8px;
  border: 2px solid #dfdfdf;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const IconContainer = styled.div`
  width: 41px;
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  text-align: center;
  color: #8b8b8b;
  font-size: 14px;
  font-family: 'Spoqa Han Sans Neo', sans-serif;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
`;

export const StyledCard1 = () => {
  return (
    <Card>
      <IconContainer>
        <YoutubeIcon width="39" height="39" />
      </IconContainer>
      <Text>유튜브</Text>
    </Card>
  );
};

export const StyledCard2 = () => {
  return (
    <Card>
      <IconContainer>
        <YoutubeIcon width="40" height="40" />
      </IconContainer>
      <Text>유튜브</Text>
    </Card>
  );
};

export const StyledCard3 = () => {
  return (
    <Card>
      <IconContainer>
        <YoutubeIcon width="40" height="40" />
      </IconContainer>
      <Text>유튜브</Text>
    </Card>
  );
};

export const StyledCard4 = () => {
  return (
    <Card>
      <IconContainer>
        <YoutubeIcon width="40" height="40" />
      </IconContainer>
      <Text>유튜브</Text>
    </Card>
  );
};

export const StyledCard5 = () => {
  return (
    <Card>
      <IconContainer>
        <YoutubeIcon width="40" height="40" />
      </IconContainer>
      <Text>유튜브</Text>
    </Card>
  );
};

export const Platform = () => {
  return (
    <Container>
      <StyledCard1 />
      <StyledCard2 />
      <StyledCard3 />
      <StyledCard4 />
      <StyledCard5 />
    </Container>
  );
};
