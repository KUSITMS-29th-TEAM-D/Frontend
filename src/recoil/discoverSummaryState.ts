import { atom } from 'recoil';

export const discoverSummaryState = atom<{ [key: string]: string[] }>({
  key: 'discoverSummaryState',
  default: {
    health: [],
    career: [],
    love: [],
    leisure: [],
  },
});
