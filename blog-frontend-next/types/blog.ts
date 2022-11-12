import { ReactNode } from 'react';

export interface BlogContainerProps {
  id: number;
  heading: string;
  summary: string;
  content: string;
  error?: string;
}

export interface BlogContainerWithChildrenProps {
  children?: ReactNode;
  id: number;
  heading: string;
  summary: string;
  content: string;
}
