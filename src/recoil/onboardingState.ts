import { atom } from 'recoil';

import { OnboardingRequest } from '@/types/user.type';

export const onboardingState = atom<OnboardingRequest>({
  key: 'onboardingState',
  default: {
    nickname: '',
    job: '',
    understanding_score: 50,
    interest_list: [],
    keyword_list: [],
  },
});
