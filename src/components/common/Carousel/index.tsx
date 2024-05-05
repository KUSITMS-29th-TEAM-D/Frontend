import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';

import { CarouselButton } from '@/components/common/Button/CarouselButton';

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <CarouselButton direction="next" />,
  prevArrow: <CarouselButton direction="prev" />,
  variableWidth: true,
};

interface CarouselProps {
  gap?: string;
  children: React.ReactNode;
}

export const Carousel = ({ gap = '24px', children }: CarouselProps) => {
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
`;
