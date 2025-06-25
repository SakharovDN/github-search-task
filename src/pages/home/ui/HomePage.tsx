import { useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';

import { useDebounce } from '@/shared/lib/timing';
import { Input } from '@/shared/ui/Input';
import { Page } from '@/shared/ui/Page';

import { RepositoriesList, RepositorySortingSelect, repositoryStore } from '@/entities/repository';

import styles from './HomePage.module.scss';

export const HomePage = () => {
  const [search, setSearch] = useState('pet-react-redux');
  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    repositoryStore.searchRepositories(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <Page title="Главная">
      <Input
        className={styles.searchInput}
        placeholder="Search"
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className={styles.controls}>
        <ResultString />
        <RepositorySortingSelect />
      </div>

      <RepositoriesList />
    </Page>
  );
};

const ResultString = observer(() => {
  return <p className={styles.resultString}>Result: {repositoryStore.repositoriesCount} repositories</p>;
});
