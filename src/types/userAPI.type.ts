export interface ReRegisterRequest {
  nickname: string;
  job: string;
  understanding_score: number;
}

export interface RegisterRequest extends ReRegisterRequest {
  interest_list: string[];
  keyword_list: string[];
}
