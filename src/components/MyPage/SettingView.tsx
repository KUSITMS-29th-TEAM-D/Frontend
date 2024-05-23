import { styled } from 'styled-components';

import backgroundImg from '@/assets/backgrounds/setting.png';
export const SettingView = () => {
  return (
    <StyledContainer>
      <ImageContainer />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px 24px 52px 24px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImg});
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;
`;
