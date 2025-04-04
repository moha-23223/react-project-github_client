import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import UserCard from '../components/UserCard';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import { searchUsers } from '../services/githubApi';
import { GitHubUser } from '../types/github';

const HomePage: React.FC = () => {
  const [users, setUsers] = useState<GitHubUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (query: string) => {
    setLoading(true);
    setError('');
    try {
      const data = await searchUsers(query);
      setUsers(data);
    } catch {
      setError('Failed to fetch users.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <div>
        {users.map(user => <UserCard key={user.id} user={user} />)}
      </div>
    </div>
  );
};

export default HomePage;
