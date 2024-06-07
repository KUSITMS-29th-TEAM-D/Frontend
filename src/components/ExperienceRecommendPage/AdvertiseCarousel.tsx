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
    bottom: 35px;
    display: flex !important;
    justify-content: center;
    align-items: center;
    gap: ${({ $gap }) => $gap};
    li {
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 16px;
      height: 16px;
      button {
        &:before {
          font-size: 0;
          display: block;
          width: 16px;
          height: 16px;
          background-color: ${({ theme }) => theme.color.gray500};
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition:
            width 0.3s,
            height 0.3s,
            background-color 0.3s,
            border-radius 0.3s;
        }
      }
    }
    .slick-active {
      width: 42px;
      button:before {
        width: 42px;
        height: 16px;
        background-color: ${({ theme }) => theme.color.white};
        border-radius: 8px;
        transform: translate(-50%, -50%);
      }
    }
  }
`;
