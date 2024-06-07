export interface User {
  nickname: string;
  is_test: boolean;
}

export interface OnboardingRequest {
  nickname: string;
  job: string;
  understanding_score: number;
  interest_list: string[];
  keyword_list: string[];
}

export interface UserData {
  name: string;
  provider: string;
  nickname: string;
  job: string;
  understanding_score: number;
  profile_img_url: string;
}
