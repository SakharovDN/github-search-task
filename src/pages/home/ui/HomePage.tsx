import { useEffect, useState } from 'react';

import { useDebounce } from '@/shared/lib/timing';
import { Input } from '@/shared/ui/Input';
import { Page } from '@/shared/ui/Page';

import { RepositoriesList, repositoryStore } from '@/entities/repository';

export const HomePage = () => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    repositoryStore.searchRepositories(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <Page title="Главная">
      <Input placeholder="Search" type="search" value={search} onChange={(e) => setSearch(e.target.value)} />

      <RepositoriesList />
    </Page>
  );
};
