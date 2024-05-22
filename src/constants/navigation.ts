import DefineIcon from '@/assets/icons/defineBlack.png';
import DesignIcon from '@/assets/icons/designBlack.png';
import DiscoverIcon from '@/assets/icons/discoverBlack.png';

export const NAVIGATION_MENU = [
  //TODO: path 수정하기
  { menu: '자기이해', path: '/understand' },
  { menu: '경험추천', path: '/recommend' },
];

export const MY_UNDERSTAND_TAB = [
  { tab: 'Discover', icon: DiscoverIcon, path: '/' },
  { tab: 'Define', icon: DefineIcon, path: '/test/define' },
  { tab: 'Design', icon: DesignIcon, path: '/test/design' },
];
