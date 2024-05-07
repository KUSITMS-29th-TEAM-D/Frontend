export interface UserInformation {
  piece: string;
  name: string;
  brand: string;
  chips: { content: string; weight: number }[];
}

export interface User {
  nickname: string;
}
