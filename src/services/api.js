import axios from 'axios';

axios.defaults.baseURL = 'https://642278cc77e7062b3e1a616c.mockapi.io/api/v1';

export async function getAllUsers() {
  const response = await axios.get('/users');
  return response.data;
}

export async function editUser(data) {
  const response = await axios.put(`/users/${data.id}`, {
    followers: data.followers,
    following: data.following,
  });
  return response.data;
}
