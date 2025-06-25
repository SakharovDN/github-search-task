import { ErrorBoundary } from 'react-error-boundary';
import { Navigate, Route, Routes } from 'react-router';

import { FavoritesPage } from '@/pages/favorites';
import { HomePage } from '@/pages/home';
import { RepositoryPage } from '@/pages/repository';

import { MainHeader } from './ui/MainHeader/MainHeader';

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
