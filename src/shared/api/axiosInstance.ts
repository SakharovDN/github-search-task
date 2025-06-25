import axios from 'axios';

import { environment } from '../config';

const axiosInstance = axios.create({
  baseURL: environment.githubApiUrl,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.Accept = 'application/vnd.github+json';
  config.headers['X-GitHub-Api-Version'] = '2022-11-28';

  return config;
});

export default axiosInstance;
