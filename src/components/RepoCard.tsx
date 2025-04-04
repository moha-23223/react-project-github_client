import React from 'react';
import { GitHubRepo } from '../types/github';
import { Link } from 'react-router-dom';

const RepoCard: React.FC<{ repo: GitHubRepo }> = ({ repo }) => {
  return (
    <div className="repo-card">
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
      <p>⭐ {repo.stargazers_count}</p>
      <Link to={`/repo/${repo.owner.login}/${repo.name}`}>Details</Link>
    </div>
  );
};

export default RepoCard;
