import { observer } from 'mobx-react-lite';

import { Select, SelectOption } from '@/shared/ui/Select';

import { repositoryStore } from '../../model/store';
import { RepositorySorting } from '../../model/types';

import styles from './RepositorySortingSelect.module.scss';

const options: SelectOption<RepositorySorting>[] = [
  { label: 'New first', value: 'new' },
  { label: 'Stars', value: 'stars' },
];

export const RepositorySortingSelect = observer(() => {
  return (
    <Select
      className={styles.sortingSelect}
      options={options}
      value={repositoryStore.sorting ?? undefined}
      onChange={(value) => (repositoryStore.sorting = value ?? null)}
    />
  );
});
