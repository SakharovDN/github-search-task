import { Avatar } from '@/shared/ui/Avatar';
import { GitBranchIcon, StarIcon } from '@/shared/ui/icons';
import { Tag } from '@/shared/ui/Tag';

import { Repository } from '../../model/types';

import styles from './RepositoryCard.module.scss';

interface RepositoryCardProps {
  repository: Repository;
}

export const RepositoryCard = ({ repository }: RepositoryCardProps) => {
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
    </div>
  );
};
