import { atom } from 'recoil';

export const loadingState = atom({
  key: 'loadingState',
  default: {
    showLoading: false,
    handleCompleted: () => {},
    handleError: () => {},
  },
});
