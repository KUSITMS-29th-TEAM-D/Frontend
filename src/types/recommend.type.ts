export interface RecommendItems {
  id: number;
  img: string;
  title: string;
  keywords: string[];
  hot: boolean;
}

export interface FilterItems {
  title: string;
  contents: string[];
  selected: string[];
  setSelected: (newSelected: string[]) => void;
}

export interface ExperienceRecommendItems {
  id: number;
  img: string;
  title: string;
  subtitle: string;
}

export interface ExperienceRecommendCards {
  id: number;
  img: string;
  title: string;
  subtitle: string;
  keywords?: string[];
  hot?: boolean;
}

export interface ExperienceFilterCards {
  title: string;
  contents: string[];
  selected: string[];
  setSelected: (newSelected: string[]) => void;
}
