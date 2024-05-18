export interface RecommendItems {
  id: number;
  img: string;
  title: string;
  keywords: string[];
  hot: boolean;
  path: string;
}

export interface FilterItems {
  title: string;
  contents: string[];
  selected: string[];
  setSelected: (newSelected: string[]) => void;
}
