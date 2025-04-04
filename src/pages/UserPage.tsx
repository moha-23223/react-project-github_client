import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUser, getUserRepos } from '../services/githubApi';
import { GitHubUser, GitHubRepo } from '../types/github';
import RepoCard from '../components/RepoCard';
import Loader from '../components/Loader';

const UserPage: React.FC = () => {
  const { username } = useParams();
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const u = await getUser(username!);
      const r = await getUserRepos(username!);
      setUser(u);
      setRepos(r);
      setLoading(false);
    };
    fetchUser();
  }, [username]);

  if (loading) return <Loader />;
  if (!user) return <p>User not found</p>;

  return (
    <div>
      <h2>{user.login}</h2>
      <img src={user.avatar_url} alt={user.login} width={100} />
      <h3>Repositories</h3>
      {repos.map(repo => <RepoCard key={repo.id} repo={repo} />)}
    </div>
  );
};

export default UserPage;
