import { observer } from 'mobx-react-lite';

import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { ArchiveIcon, FolderIcon, GitBranchIcon, StarIcon, TerminalIcon } from '@/shared/ui/icons';

import { Repository } from '@/entities/repository';

import { AddToFavoritesButton } from '@/features/addRepositoryToFavorites';
import { CopyRepositoryUrlButton } from '@/features/copyRepositoryUrl';

import { RepositoryAdditionalInfoItem } from '../RepositoryAdditionalInfoItem/RepositoryAdditionalInfoItem';

import styles from './RepositoryCard.module.scss';

interface RepositoryCardProps {
  repository: Repository;
}

export const RepositoryCard = observer(({ repository }: RepositoryCardProps) => {
  const handleOpenRepository = () => {
    window.open(repository.html_url, '_blank');
  };

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

      <div className={styles.footer}>
        <AddToFavoritesButton repositoryId={repository.id} />
        <CopyRepositoryUrlButton repositoryUrl={repository.html_url} />
        <Button
          className={styles.moreButton}
          title="Open repository"
          appearance="accent"
          onClick={handleOpenRepository}>
          Открыть репозиторий
        </Button>
      </div>
    </div>
  );
});
