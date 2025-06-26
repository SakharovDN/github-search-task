import { useNavigate } from 'react-router';

import { observer } from 'mobx-react-lite';

import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { GitBranchIcon, StarIcon } from '@/shared/ui/icons';
import { Tag } from '@/shared/ui/Tag';

import { AddToFavoritesButton } from '@/features/addRepositoryToFavorites';
import { CopyRepositoryUrlButton } from '@/features/copyRepositoryUrl';

import { Repository } from '../../model/types';

import styles from './RepositoryCard.module.scss';

interface RepositoryCardProps {
  repository: Repository;
}

export const RepositoryCard = observer(({ repository }: RepositoryCardProps) => {
  const navigate = useNavigate();

  return (
    <div className={styles.repositoryCard}>
      <div className={styles.header}>
        <Avatar className={styles.avatar} alt={repository.owner.login} src={repository.owner.avatar_url} />
        <Tag>
          <StarIcon />
          {repository.stargazers_count}
        </Tag>
        <Tag>
          <GitBranchIcon />
          {repository.forks_count}
        </Tag>
      </div>

      <div className={styles.body}>
        <p className={styles.ownerLogin}>{repository.owner.login}</p>
        <p className={styles.repositoryName}>{repository.full_name}</p>
      </div>

      <div className={styles.footer}>
        <AddToFavoritesButton repositoryId={repository.id} size="small" />
        <CopyRepositoryUrlButton repositoryUrl={repository.html_url} size="small" />
        <Button
          className={styles.moreButton}
          title="Open repository"
          appearance="accent"
          size="small"
          onClick={() => navigate(`/repositories/${repository.id}`)}>
          Подробнее
        </Button>
      </div>
    </div>
  );
});
