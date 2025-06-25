import { observer } from 'mobx-react-lite';

import { repositoryStore } from '../../model/store';

import styles from './RepositoriesList.module.scss';

export const RepositoriesList = observer(() => {
  return (
    <div className={styles.repositoriesList}>
      {repositoryStore.repositories.map((repository) => (
        <div key={repository.id}>{repository.name}</div>
      ))}
    </div>
  );
});
