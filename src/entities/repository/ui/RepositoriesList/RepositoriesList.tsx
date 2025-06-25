import { observer } from 'mobx-react-lite';

import { repositoryStore } from '../../model/store';
import { RepositoryCard } from '../RepositoryCard/RepositoryCard';

import styles from './RepositoriesList.module.scss';

export const RepositoriesList = observer(() => {
  return (
    <div className={styles.repositoriesList}>
      {repositoryStore.repositories.map((repository) => (
        <RepositoryCard key={repository.id} repository={repository} />
      ))}
    </div>
  );
});
