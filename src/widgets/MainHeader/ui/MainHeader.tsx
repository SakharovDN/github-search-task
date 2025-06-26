import { NavLink } from 'react-router';

import clsx from 'clsx';
import { observer } from 'mobx-react-lite';

import { AccountIcon, HeartIcon, SearchIcon } from '@/shared/ui/icons';

import { favoritesStore } from '@/features/addRepositoryToFavorites';

import styles from './MainHeader.module.scss';

export const MainHeader = () => {
  return (
    <header className={styles.mainHeader}>
      <div className={styles.titleContainer}>
        <SearchIcon className={styles.searchIcon} />
        <p className={styles.title}>GitHubSearch</p>
      </div>

      <div className={styles.rightContainer}>
        <FavoritesLink />

        <div className={styles.accountContainer}>
          <div className={styles.accountIconContainer}>
            <AccountIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

const FavoritesLink = observer(() => {
  const favoritesLength = favoritesStore.favoriteRepositories.length;

  return (
    <NavLink className={({ isActive }) => clsx(styles.favoritesLink, isActive && styles.active)} to="/favorites">
      <HeartIcon className={styles.favoritesIcon} />
      {favoritesLength > 0 && <span className={styles.favoritesCount}>{favoritesLength}</span>}
    </NavLink>
  );
});
