export interface Repository {
  id: number;
  name: string;
  url: string;
  score: number;
  forks: number;
  html_url: string;
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

interface RepositoryOwner {
  id: number;
  login: string;
  avatar_url: string;
}
