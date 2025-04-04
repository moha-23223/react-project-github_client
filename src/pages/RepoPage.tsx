import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

interface Commit {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    };
  };
  html_url: string;
}

const RepoPage: React.FC = () => {
  const { owner, repoName } = useParams();
  const [repo, setRepo] = useState<any>(null);
  const [commits, setCommits] = useState<Commit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRepoDetails = async () => {
      try {
        const [repoRes, commitsRes] = await Promise.all([
          axios.get(`https://api.github.com/repos/${owner}/${repoName}`),
          axios.get(`https://api.github.com/repos/${owner}/${repoName}/commits`)
        ]);
        setRepo(repoRes.data);
        setCommits(commitsRes.data.slice(0, 5)); // Show latest 5 commits
      } catch (err) {
        setError('Failed to load repository data.');
      } finally {
        setLoading(false);
      }
    };

    fetchRepoDetails();
  }, [owner, repoName]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      <h2>{repo.full_name}</h2>
      <p>{repo.description}</p>
      <p><strong>⭐ Stars:</strong> {repo.stargazers_count}</p>
      <p><strong>🍴 Forks:</strong> {repo.forks_count}</p>
      <p><strong>📝 Language:</strong> {repo.language}</p>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>

      <h3 style={{ marginTop: '2rem' }}>Recent Commits</h3>
      <ul>
        {commits.map(commit => (
          <li key={commit.sha}>
            <p><strong>{commit.commit.author.name}</strong> — {new Date(commit.commit.author.date).toLocaleString()}</p>
            <p>{commit.commit.message}</p>
            <a href={commit.html_url} target="_blank" rel="noopener noreferrer">View Commit</a>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoPage;
