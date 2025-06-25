interface Environment {
  githubApiUrl: string;
  githubToken?: string;
}

export const environment: Environment = {
  githubApiUrl: import.meta.env.VITE_GITHUB_API_URL!,
  githubToken: import.meta.env.VITE_GITHUB_TOKEN,
};
