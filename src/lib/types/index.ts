import { StaticImageData } from 'next/image';

export interface ISidebarItem {
  name: string;
  path: string;
  Icon: React.FC;
}

export type TechCardProps = {
  name: string;
  image: StaticImageData;
};

export type ProjectCardType = {
  index: number;
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link: string;
  live_url: string;
};

export type TestimonialCardProps = {
  name: string;
  designation: string;
  company: string;
  image: StaticImageData | string;
  summary: string;
  idx: number;
};
