import { ErrorBoundary } from 'react-error-boundary';
import { Navigate, Route, Routes } from 'react-router';

import styles from './App.module.scss';

export const App = () => {
  return (
    <div className={styles.app}>
      <ErrorBoundary fallback={<div>Error</div>}>
        <Routes>
          <Route element={<Navigate to="/" replace />} path="*" index />
          <Route element={<div>Home</div>} path="" />
        </Routes>
      </ErrorBoundary>
    </div>
  );
};
