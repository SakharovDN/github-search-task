import { ErrorBoundary } from 'react-error-boundary';
import { Navigate, Route, Routes } from 'react-router';

import { MainHeader } from '@/widgets/MainHeader';

import { FavoritesPage } from '@/pages/favorites';
import { HomePage } from '@/pages/home';
import { RepositoryPage } from '@/pages/repository';

import styles from './App.module.scss';

export const App = () => {
  return (
    <div className={styles.app}>
      <ErrorBoundary fallback={<div>Error</div>}>
        <MainHeader />
        <Routes>
          <Route element={<Navigate to="/" replace />} path="*" index />
          <Route element={<HomePage />} path="" />
          <Route element={<FavoritesPage />} path="favorites" />
          <Route element={<RepositoryPage />} path="repositories/:repositoryId" />
        </Routes>
      </ErrorBoundary>
    </div>
  );
};
