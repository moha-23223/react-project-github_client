import React from 'react';
import { GitHubUser } from '../types/github';
import { Link } from 'react-router-dom';

const UserCard: React.FC<{ user: GitHubUser }> = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={user.login} />
      <h3>{user.login}</h3>
      <a href={user.html_url} target="_blank">View on GitHub</a>
      <br />
      <Link to={`/user/${user.login}`}>More Details</Link>
    </div>
  );
};

export default UserCard;
