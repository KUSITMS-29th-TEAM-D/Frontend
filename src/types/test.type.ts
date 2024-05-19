export interface DefineRequest {
  stage_one_keywords: string[];
  stage_two_keywords: string[];
  stage_three_keywords: string[];
}

export interface DefineResult {
  define_persona_id: string;
  name: string;
  comment: string;
  description: string;
  ability: string;
  values: string[];
  strength: string;
  preference: string;
  types: string[];
  define_persona_keywords: string[];
  front_img_url: string;
  back_img_url: string;
}

export interface DesignResult {
  definition: string;
  fields: string[];
  distinctions: string[];
  abilities: string[];
  platforms: string[];
  career: string;
}
