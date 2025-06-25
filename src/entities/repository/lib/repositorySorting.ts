import { SelectOption } from '@/shared/ui/Select';

import { Repository } from '../model/types';

export type RepositorySorting = 'new' | 'stars';

export function getSortedRepositories(
  repositories: Repository[],
  sorting: RepositorySorting | undefined
): Repository[] {
  switch (sorting) {
    case 'new':
      return repositories.slice().sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    case 'stars':
      return repositories.slice().sort((a, b) => b.stargazers_count - a.stargazers_count);
    case undefined:
      return repositories;
    // exhaustive check
    default: {
      const _: never = sorting;
      return repositories;
    }
  }
}

export const repositorySortingOptions: SelectOption<RepositorySorting>[] = [
  { label: 'New first', value: 'new' },
  { label: 'Stars', value: 'stars' },
];
