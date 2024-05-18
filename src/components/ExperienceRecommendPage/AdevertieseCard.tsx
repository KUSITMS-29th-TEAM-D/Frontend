import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import Card1 from '@/assets/advertise/advertise1.png';
import Card2 from '@/assets/advertise/advertise2.png';
import Card3 from '@/assets/advertise/advertise3.png';
import { AdvertiseCarousel } from '@/components/ExperienceRecommendPage/AdvertiseCarousel';

const AdvertiseCard = () => {
  return (
    <div>
      <AdvertiseCarousel>
        <StyledLink to="/">
          <CardImage>
            <img src={Card1} alt="Card 1" />
          </CardImage>
        </StyledLink>
        <StyledLink to="/">
          <CardImage>
            <img src={Card2} alt="Card 2" />
          </CardImage>
        </StyledLink>
        <StyledLink to="/">
          <CardImage>
            <img src={Card3} alt="Card 3" />
          </CardImage>
        </StyledLink>
      </AdvertiseCarousel>
    </div>
  );
};
export default AdvertiseCard;

const CardImage = styled.div`
  width: 1224px;
  height: 531px;
  position: relative;
  border-radius: 24px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
`;
