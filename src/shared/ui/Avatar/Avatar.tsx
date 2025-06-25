import clsx from 'clsx';

import styles from './Avatar.module.scss';

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

export const Avatar = ({ src, alt, size = 32, className }: AvatarProps) => {
  return <img className={clsx(styles.avatar, className)} style={{ width: size, height: size }} alt={alt} src={src} />;
};
