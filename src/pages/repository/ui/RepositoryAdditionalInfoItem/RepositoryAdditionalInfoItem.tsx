import { ReactNode } from 'react';

import styles from './RepositoryAdditionalInfoItem.module.scss';

interface RepositoryAdditionalInfoItemProps {
  title: ReactNode;
  icon: ReactNode;
  value: ReactNode;
}

export const RepositoryAdditionalInfoItem = ({ title, value, icon }: RepositoryAdditionalInfoItemProps) => {
  return (
    <div className={styles.infoItem}>
      <div className={styles.infoItemIconContainer}>{icon}</div>
      <div className={styles.infoItemContent}>
        <p className={styles.infoItemValue}>{value}</p>
        <p className={styles.infoItemTitle}>{title}</p>
      </div>
    </div>
  );
};
