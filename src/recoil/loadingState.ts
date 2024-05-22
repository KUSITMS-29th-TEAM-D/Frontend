import { atom } from 'recoil';

export const loadingState = atom({
  key: 'loadingState',
  default: { show: false, speed: 50 },
});
