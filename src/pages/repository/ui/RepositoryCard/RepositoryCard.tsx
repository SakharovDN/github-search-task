import { observer } from 'mobx-react-lite';

import { Avatar } from '@/shared/ui/Avatar';
import { ArchiveIcon, FolderIcon, GitBranchIcon, StarIcon, TerminalIcon } from '@/shared/ui/icons';

import { Repository } from '@/entities/repository/model/types';

import { RepositoryAdditionalInfoItem } from '../RepositoryAdditionalInfoItem/RepositoryAdditionalInfoItem';

import styles from './RepositoryCard.module.scss';

interface RepositoryCardProps {
  repository: Repository;
}

export const RepositoryCard = observer(({ repository }: RepositoryCardProps) => {
  return (
    <div className={styles.repositoryCard}>
      <h1 className={styles.login}>{repository.owner.login}</h1>

      <div className={styles.repositoryHeader}>
        <Avatar alt={repository.owner.login} size={125} src={repository.owner.avatar_url} />
        <div className={styles.repositoryInfo}>
          <p className={styles.repositoryName}>{repository.full_name}</p>
          <p className={styles.repositoryDescription}>{repository.description}</p>
        </div>
      </div>

      <div className={styles.repositoryAdditionalInfo}>
        <RepositoryAdditionalInfoItem
          title="Количество звезд"
          icon={<StarIcon />}
          value={repository.stargazers_count}
        />
        <RepositoryAdditionalInfoItem
          title="Количество форков"
          icon={<GitBranchIcon />}
          value={repository.forks_count}
        />
        <RepositoryAdditionalInfoItem
          title="В архиве"
          icon={<ArchiveIcon />}
          value={repository.archived ? 'Да' : 'Нет'}
        />
        <RepositoryAdditionalInfoItem title="Язык" icon={<TerminalIcon />} value={repository.language} />
        <RepositoryAdditionalInfoItem
          title="Создано"
          icon={<FolderIcon />}
          value={new Date(repository.created_at).toLocaleDateString('ru-RU')}
        />
        <RepositoryAdditionalInfoItem
          title="Изменено"
          icon={<FolderIcon />}
          value={new Date(repository.updated_at).toLocaleDateString('ru-RU')}
        />
      </div>

      <div className={styles.divider} />
    </div>
  );
});
