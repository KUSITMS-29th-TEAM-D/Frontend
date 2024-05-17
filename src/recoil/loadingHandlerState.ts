import { atom } from 'recoil';

export const loadingHandlerState = atom({
  key: 'loadingHandlerState',
  default: {
    handleCompleted: () => {},
    handleError: () => {},
  },
});
