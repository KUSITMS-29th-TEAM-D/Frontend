export interface ExperienceFilterCards {
  title: string;
  contents: string[];
  selected: string[];
  setSelected: (newSelected: string[]) => void;
}

export interface BrandFilterCards {
  title: string;
  contents: string[];
  selected: string[];
  setSelected: (newSelected: string[]) => void;
}

export interface ExperienceBrandCards {
  id: number;
  img: string;
  title: string;
  subtitle: string;
}

export interface ExperienceCards {
  id: number;
  img: string;
  title: string;
  subtitle: string;
}
