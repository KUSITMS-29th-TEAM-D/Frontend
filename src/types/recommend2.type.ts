export interface RecommendItems {
  id: number;
  img: string;
  title: string;
  subtitle: string;
  keywords?: string[]; // 선택적으로 만들기
  hot?: boolean; // 선택적으로 만들기
}

export interface FilterItems {
  title: string;
  contents: string[];
  selected: string[];
  setSelected: (newSelected: string[]) => void;
}
