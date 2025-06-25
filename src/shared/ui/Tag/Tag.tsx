import { ReactNode } from 'react';

import styles from './Tag.module.scss';

interface TagProps {
  children: ReactNode;
  className?: string;
}

export const Tag = ({ children }: TagProps) => {
  return <div className={styles.tag}>{children}</div>;
};
