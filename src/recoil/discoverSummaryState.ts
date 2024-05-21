import { atom } from 'recoil';

import { DiscoverSummaryResponse } from '@/types/test.type';

export const discoverSummaryState = atom<DiscoverSummaryResponse | null>({
  key: 'discoverSummaryState',
  default: null,
});
