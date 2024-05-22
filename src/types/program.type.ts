export interface RecommendProgramItem {
  selfUnderstandingUrl: string;
  name: string;
  link: string;
  programsId: number;
  type: string;
  maxPrice: number;
  form: string | null;
  price: number;
  keywords: string[];
}

export interface ProgramDetailResult {
  imageUrl: string;
  name: string;
  oneLineDescription: string;
  price: number;
  form: string | null;
  descriptionUrl: string;
  link: string;
  keywords: string[];
  participants: number;
  providerImage: string;
  providerName: string;
  providerJob: string;
  providerKeyword: string;
}
