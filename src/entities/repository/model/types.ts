export interface Repository {
  id: number;
  name: string;
  url: string;
  score: number;
  forks: number;
  full_name: string;
  archived: boolean;
  created_at: string;
  updated_at: string;
  forks_count: number;
  owner: RepositoryOwner;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  description: string | null;
}

export type RepositorySorting = 'new' | 'stars';

interface RepositoryOwner {
  id: number;
  login: string;
  avatar_url: string;
}
