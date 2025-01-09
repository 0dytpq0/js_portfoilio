export interface SectionItem {
  title: string;
  description: string[];
}

export interface Section {
  heading: string;
  items?: SectionItem[];
  text?: string;
}
