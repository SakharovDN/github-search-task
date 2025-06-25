import { useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';

import { useDebounce } from '@/shared/lib/timing';
import { Input } from '@/shared/ui/Input';
import { Page } from '@/shared/ui/Page';
import { Select, SelectOption } from '@/shared/ui/Select';

import { RepositoriesList, RepositorySorting, repositoryStore } from '@/entities/repository';

import styles from './HomePage.module.scss';

const options: SelectOption<RepositorySorting>[] = [
  { label: 'New first', value: 'new' },
  { label: 'Stars', value: 'stars' },
];

export const HomePage = () => {
  const [search, setSearch] = useState('');
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
        <SortingSelect />
      </div>

      <RepositoriesList />
    </Page>
  );
};

const ResultString = observer(() => {
  return <p className={styles.resultString}>Result: {repositoryStore.repositoriesCount} repositories</p>;
});

const SortingSelect = observer(() => {
  return (
    <Select
      className={styles.sortingSelect}
      options={options}
      value={repositoryStore.sorting ?? undefined}
      onChange={(value) => (repositoryStore.sorting = value ?? null)}
    />
  );
});
