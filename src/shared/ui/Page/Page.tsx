import { ReactNode } from 'react';

import clsx from 'clsx';

import styles from './Page.module.scss';

interface PageProps {
  title: string;
  className?: string;
  children?: ReactNode;
  scrollable?: boolean;
}

export const Page = ({ children, className, title, scrollable = false }: PageProps) => {
  return (
    <div className={clsx(styles.page, scrollable && styles.scrollable, className)}>
      <title>{title}</title>
      {children}
    </div>
  );
};
