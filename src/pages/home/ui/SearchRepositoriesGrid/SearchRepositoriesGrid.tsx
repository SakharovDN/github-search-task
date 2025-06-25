import { useEffect } from 'react';

import { observer } from 'mobx-react-lite';

import { Loader } from '@/shared/ui/Loader';

import { getSortedRepositories, RepositoriesGrid, RepositorySorting, repositoryStore } from '@/entities/repository';

interface SearchRepositoriesGridProps {
  search: string;
  sorting: RepositorySorting | undefined;
}

export const SearchRepositoriesGrid = observer(({ sorting, search }: SearchRepositoriesGridProps) => {
  const sortedRepositories = getSortedRepositories(repositoryStore.repositories, sorting);

  useEffect(() => {
    repositoryStore.searchRepositories(search);
  }, [search]);

  if (repositoryStore.loading) {
    return <Loader size={40} centered />;
  }

  return <RepositoriesGrid repositories={sortedRepositories} />;
});
