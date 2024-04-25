export interface LoginResponseData {
  accessToken: string;
  refreshToken: string;
  cur_time: string;
}

export interface LoginResult {
  accessToken: string | null;
  refreshToken: string | null;
  expiredTime: string | null;
  error: string | null;
}
