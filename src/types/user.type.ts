export interface UserInformation {
  piece: string;
  name: string;
  brand: string;
  chips: { content: string; weight: number }[];
}

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
