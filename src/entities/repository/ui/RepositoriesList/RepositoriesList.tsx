import { observer } from 'mobx-react-lite';

import { Loader } from '@/shared/ui/Loader';

import { repositoryStore } from '../../model/store';
import { RepositoryCard } from '../RepositoryCard/RepositoryCard';

import styles from './RepositoriesList.module.scss';

export const RepositoriesList = observer(() => {
  const { loading, repositories } = repositoryStore;

  return (
    <div className={styles.repositoriesList}>
      {loading && <Loader size={40} centered />}

      <div className={styles.repositoriesGrid}>
        {repositories.map((repository) => (
          <RepositoryCard key={repository.id} repository={repository} />
        ))}
      </div>
    </div>
  );
});
