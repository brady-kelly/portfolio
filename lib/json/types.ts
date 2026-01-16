export interface Language {
  language: string;
  proficiency: string;
  level: number;
  description?: string;
}

export interface Interest {
  category: string;
  iconName?: string;
  attributes: string[];
}
