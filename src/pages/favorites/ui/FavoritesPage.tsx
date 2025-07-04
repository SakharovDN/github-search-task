import { useState } from 'react';

import { observer } from 'mobx-react-lite';

import { BackButton } from '@/shared/ui/BackButton';
import { Page } from '@/shared/ui/Page';
import { Select } from '@/shared/ui/Select';

import { getSortedRepositories, RepositorySorting, repositorySortingOptions } from '@/entities/repository';

import { favoritesStore } from '@/features/addRepositoryToFavorites';

import { RepositoriesGrid } from '@/widgets/RepositoriesGrid';

import styles from './FavoritesPage.module.scss';

export const FavoritesPage = observer(() => {
  const [sorting, setSorting] = useState<RepositorySorting | undefined>(undefined);

  const sortedRepositories = getSortedRepositories(favoritesStore.favoriteRepositories, sorting);

  return (
    <Page title="Избранное">
      <BackButton />

      <div className={styles.controls}>
        <FavoritesString />
        <Select
          className={styles.sortingSelect}
          options={repositorySortingOptions}
          value={sorting}
          onChange={setSorting}
        />
      </div>

      <RepositoriesGrid repositories={sortedRepositories} />
    </Page>
  );
});

const FavoritesString = observer(() => {
  return <p className={styles.favoritesString}>Favorites: {favoritesStore.favoriteRepositories.length}</p>;
});
