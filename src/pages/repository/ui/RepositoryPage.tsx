import { useParams } from 'react-router';

import { observer } from 'mobx-react-lite';

import { BackButton } from '@/shared/ui/BackButton';
import { Page } from '@/shared/ui/Page';

import { repositoryStore } from '@/entities/repository';

import { RepositoryCard } from './RepositoryCard/RepositoryCard';

export const RepositoryPage = observer(() => {
  const { repositoryId } = useParams();

  const repository = repositoryStore.getRepositoryById(Number(repositoryId));

  if (!repository) {
    return (
      <Page title="Repository not found">
        <BackButton />
        Repository not found
      </Page>
    );
  }

  return (
    <Page title={repository.full_name}>
      <BackButton />
      <RepositoryCard repository={repository} />
    </Page>
  );
});
