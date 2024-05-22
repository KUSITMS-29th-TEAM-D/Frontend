import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { CarouselButton2 } from '@/components/common/Button/CarouselButton2';

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <CarouselButton2 direction="next" />,
  prevArrow: <CarouselButton2 direction="prev" />,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
};

interface CarouselProps {
  gap?: string;
  children: React.ReactNode;
}

export const AdvertiseCarousel = ({ gap = '10px', children }: CarouselProps) => {
  return (
    <SliderWrapper $gap={gap}>
      <Slider {...settings}>{children}</Slider>
    </SliderWrapper>
  );
};

const SliderWrapper = styled.div<{ $gap: string }>`
  .slick-list {
    padding: 5px;

    .slick-track {
      display: flex;
      gap: ${({ $gap }) => $gap};
    }
    .slick-track:before,
    .slick-track:after {
      content: none;
    }
  }

  .slick-dots {
    bottom: 24px;
    li {
      margin: 0 5px;
      button:before {
        font-size: 12px;
        color: ${({ theme }) => theme.color.gray500};
      }
    }
    .slick-active button:before {
      color: ${({ theme }) => theme.color.white};
    }
  }
`;
