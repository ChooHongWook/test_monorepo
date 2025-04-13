import { ReactNode } from 'react';

interface CodeProps {
  children: ReactNode;
  className?: string;
}

export const Code = ({ children, className }: CodeProps) => {
  return <code className={className}>{children}</code>;
};
