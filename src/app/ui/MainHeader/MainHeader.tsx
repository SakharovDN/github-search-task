import styles from './MainHeader.module.scss';

export const MainHeader = () => {
  return (
    <header className={styles.mainHeader}>
      <div>
        <p className={styles.title}>GitHubSearch</p>
      </div>
    </header>
  );
};
