import { observer } from 'mobx-react-lite';

import { Repository } from '@/entities/repository';

import { RepositoryCard } from './RepositoryCard/RepositoryCard';

import styles from './RepositoriesGrid.module.scss';

interface RepositoriesGridProps {
  repositories: Repository[];
}

export const RepositoriesGrid = observer(({ repositories }: RepositoriesGridProps) => {
  return (
    <div className={styles.repositoriesGrid}>
      {repositories.map((repository) => (
        <RepositoryCard key={repository.id} repository={repository} />
      ))}
    </div>
  );
});
