export type DefinePiece =
  | 'Creator'
  | 'Insighter'
  | 'Innovator'
  | 'Inventor'
  | 'Projector'
  | 'Connector'
  | 'Encourager'
  | 'Organizer';

export interface DefineRequest {
  stage_one_keywords: string[];
  stage_two_keywords: string[];
  stage_three_keywords: string[];
}

export interface DefineResult {
  define_persona_id: string;
  name: DefinePiece;
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
export interface DesignRequest {
  fields: string[];
  distinctions: string[];
  abilities: string[];
  platforms: string[];
  career: string;
}

export interface DesignResult extends DesignRequest {
  definition: string;
}

export interface ChattingStage {
  question: string;
  answer: string;
  reaction: string;
}

export interface ChattingData {
  [key: string]: ChattingStage;
}

export interface DiscoverSummaryResponse {
  [key: string]: string[];
}
