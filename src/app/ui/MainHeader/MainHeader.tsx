import { SearchIcon } from '@/shared/ui/icons';

import styles from './MainHeader.module.scss';

export const MainHeader = () => {
  return (
    <header className={styles.mainHeader}>
      <div className={styles.titleContainer}>
        <SearchIcon className={styles.searchIcon} />
        <p className={styles.title}>GitHubSearch</p>
      </div>
    </header>
  );
};
