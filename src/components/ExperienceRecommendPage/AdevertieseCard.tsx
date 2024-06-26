import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import Card2 from '@/assets/advertise/advertise2.png';
import Card3 from '@/assets/advertise/advertise3.png';
import Video1 from '@/assets/banner.mp4';
import { AdvertiseCarousel } from '@/components/ExperienceRecommendPage/AdvertiseCarousel';

// TODO: /home -> / 로 변경해야함.
const AdvertiseCard = () => {
  return (
    <AdvertiseCarousel>
      <StyledLink to="https://selpiece.framer.ai">
        <CardMedia>
          <video src={Video1} autoPlay muted loop playsInline />
        </CardMedia>
      </StyledLink>
      <StyledLink to="/home">
        <CardMedia>
          <img src={Card2} alt="Card 2" />
        </CardMedia>
      </StyledLink>
      <StyledLink to="https://selpiece.vercel.app/program/branding/12">
        <CardMedia>
          <img src={Card3} alt="Card 3" />
        </CardMedia>
      </StyledLink>
    </AdvertiseCarousel>
  );
};
export default AdvertiseCard;

const CardMedia = styled.div`
  width: 1224px;
  height: 531px;
  position: relative;
  border-radius: 24px;
  overflow: hidden;

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
`;
