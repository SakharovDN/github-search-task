import clsx from 'clsx';
import { observer } from 'mobx-react-lite';

import { Button, ButtonProps } from '@/shared/ui/Button';
import { HeartIcon } from '@/shared/ui/icons';

import { favoritesStore } from '../../model/store';

import styles from './AddToFavoritesButton.module.scss';

interface AddToFavoritesButtonProps {
  repositoryId: number;
  size?: ButtonProps['size'];
}

export const AddToFavoritesButton = observer(({ repositoryId, size }: AddToFavoritesButtonProps) => {
  const handleToggleFavorite = () => {
    favoritesStore.toggleFavorite(repositoryId);
  };

  return (
    <Button
      title="Add to favorites"
      icon={
        <HeartIcon className={clsx(styles.favoriteIcon, favoritesStore.isFavorite(repositoryId) && styles.active)} />
      }
      size={size}
      onClick={handleToggleFavorite}
    />
  );
});
