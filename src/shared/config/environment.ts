interface Environment {
  githubApiUrl: string;
}

export const environment: Environment = {
  githubApiUrl: import.meta.env.VITE_GITHUB_API_URL!,
};
