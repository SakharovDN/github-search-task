import copy from 'clipboard-copy';

import { Button, ButtonProps } from '@/shared/ui/Button';
import { LinkIcon } from '@/shared/ui/icons';

interface CopyRepositoryUrlButtonProps {
  repositoryUrl: string;
  size?: ButtonProps['size'];
}

export const CopyRepositoryUrlButton = ({ repositoryUrl, size }: CopyRepositoryUrlButtonProps) => {
  const handleCopyLink = () => {
    copy(repositoryUrl).then(() => alert('Link copied to clipboard'));
  };

  return <Button title="Copy link" icon={<LinkIcon />} size={size} onClick={handleCopyLink} />;
};
