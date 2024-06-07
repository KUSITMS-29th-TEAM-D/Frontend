import { atom } from 'recoil';

export const toastState = atom({
  key: 'toastState',
  default: { show: false, isShown: false },
});
