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

export const CATEGORY_TYPE: DiscoverCategoryType = {
  health: {
    title: '건강',
    icon: HealthIcon,
  },
  career: {
    title: '커리어',
    icon: CareerIcon,
  },
  love: {
    title: '사랑',
    icon: LoveIcon,
  },
  leisure: {
    title: '여가',
    icon: LeisureIcon,
  },
};
