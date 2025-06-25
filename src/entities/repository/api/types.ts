import { Repository } from '../model/types';

export interface SearchRepositoriesResponse {
  total_count: number;
  items: Repository[];
  incomplete_results: boolean;
}
