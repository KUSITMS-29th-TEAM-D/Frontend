import { atom } from 'recoil';

import { DefineResult } from '@/types/test.type';

export const defineState = atom<DefineResult | null>({
  key: 'defineState',
  default: null,
});
