import axios from 'axios';

import { environment } from '../config';

const axiosInstance = axios.create({
  baseURL: environment.githubApiUrl,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.Accept = 'application/vnd.github+json';
  config.headers['X-GitHub-Api-Version'] = '2022-11-28';

  if (environment.githubToken) {
    config.headers.Authorization = `Bearer ${environment.githubToken}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error('Ошибка авторизации GitHub API. Проверьте токен в переменных окружения.');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
