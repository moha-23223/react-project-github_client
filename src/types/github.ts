export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  owner: GitHubUser;
}
