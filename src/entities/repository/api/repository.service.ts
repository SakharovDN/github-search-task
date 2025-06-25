import axiosInstance from '@/shared/api';

import { SearchRepositoriesResponse } from './types';

class RepositoryService {
  private readonly apiEndpoint = '/search/repositories';

  search = (q: string) => {
    return axiosInstance
      .get<SearchRepositoriesResponse>(`${this.apiEndpoint}`, {
        params: { q, page: 1, per_page: 100 },
      })
      .then((res) => res.data);
  };
}

export default new RepositoryService();
