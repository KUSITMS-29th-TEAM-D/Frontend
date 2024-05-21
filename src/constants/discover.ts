import { ReactComponent as CareerIcon } from '@/assets/icons/career.svg';
import { ReactComponent as HealthIcon } from '@/assets/icons/health.svg';
import { ReactComponent as LeisureIcon } from '@/assets/icons/leisure.svg';
import { ReactComponent as LoveIcon } from '@/assets/icons/love.svg';

export interface DiscoverCategoryType {
  [key: string]: {
    title: string;
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  };
}

export const CATEGORY_LIST = ['건강', '커리어', '사랑', '여가'];

export const CATEGORY_TYPE: DiscoverCategoryType = {
  health: {
    title: CATEGORY_LIST[0],
    icon: HealthIcon,
  },
  career: {
    title: CATEGORY_LIST[1],
    icon: CareerIcon,
  },
  love: {
    title: CATEGORY_LIST[2],
    icon: LoveIcon,
  },
  leisure: {
    title: CATEGORY_LIST[3],
    icon: LeisureIcon,
  },
};
