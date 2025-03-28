/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IconProps {
  [key: number]: boolean;
}

export interface Tab {
  id: string;
  label: string;
  component: React.ComponentType<any>;
}

export interface Message {
  id: string;
  name: string;
  message: string;
}

export type Experiences = {
  id: number;
  name: string;
  username: string;
  pfp: string;
  url?: string;
  code?: string;
  role: string;
  location: string;
  description: string[];
  retweets: number;
  favorites: number;
  logo?: string;
  company?: string;
  previousRole?: string;
  duration?: string;
  start?: {
    month: number;
    year: number;
  };
  end?: { month: number; year?: number };
};

export type Project = {
  id: number;
  name: string;
  username: string;
  date: string;
  pfp: string;
  images: string[];
  title: string;
  link?: string;
  code?: string;
  description: string[];
  retweets: number;
  tech?: string[];
  favorites: number;
};

export type BannerProps = {
  darkModeImage: string;
  lightModeImage: string;
};

export type Item = {
  id: number;
  retweets: number;
  favorites: number;
  retweetsToggle: boolean;
  favoritesToggle: boolean;
};

export type Links = {
  id: number;
  name: string;
  url: string;
  copy: string;
  icon: React.ComponentType<any>;
};

export type Education = {
  id: number;
  name: string;
  logo: string;
  program: string;
  date: string;
  description: string[];
};
