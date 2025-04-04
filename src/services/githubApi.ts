import axios from 'axios';
const BASE_URL = 'https://api.github.com';

export const searchUsers = async (query: string) => {
  const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
  return response.data.items;
};

export const getUser = async (username: string) => {
  const response = await axios.get(`${BASE_URL}/users/${username}`);
  return response.data;
};

export const getUserRepos = async (username: string) => {
  const response = await axios.get(`${BASE_URL}/users/${username}/repos`);
  return response.data;
};
