import { useState } from 'react';

import { observer } from 'mobx-react-lite';

import { useDebounce } from '@/shared/lib/timing';
import { Input } from '@/shared/ui/Input';
import { Page } from '@/shared/ui/Page';
import { Select } from '@/shared/ui/Select';

import { RepositorySorting, repositorySortingOptions, repositoryStore } from '@/entities/repository';

import { SearchRepositoriesGrid } from './SearchRepositoriesGrid/SearchRepositoriesGrid';

import styles from './HomePage.module.scss';

export const HomePage = () => {
  const [search, setSearch] = useState('');
  const [sorting, setSorting] = useState<RepositorySorting | undefined>(undefined);
  const debouncedSearch = useDebounce(search);

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
        <Select
          className={styles.sortingSelect}
          options={repositorySortingOptions}
          value={sorting}
          onChange={setSorting}
        />
      </div>

      <SearchRepositoriesGrid search={debouncedSearch} sorting={sorting} />
    </Page>
  );
};

const ResultString = observer(() => {
  return <p className={styles.resultString}>Result: {repositoryStore.repositoriesCount} repositories</p>;
});
