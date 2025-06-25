import { useNavigate } from 'react-router';

import { ArrowLeftIcon } from '../icons';

import styles from './BackButton.module.scss';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className={styles.backButton} onClick={() => navigate(-1)}>
      <ArrowLeftIcon className={styles.backButtonIcon} />
      Back
    </button>
  );
};
