import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://642278cc77e7062b3e1a616c.mockapi.io/api/v1';

export async function getAllUsers() {
  try {
    const response = await axios.get('/users');
    return response.data;
  } catch (error) {
    toast.error('Something went wrong 😥!');
    console.error(error);
  }
}

export async function editUser(data) {
  try {
    const response = await axios.put(`/users/${data.id}`, {
      followers: data.followers,
      following: data.following,
    });
    return response.data;
  } catch (error) {
    toast.error('Something went wrong 😥!');
    console.error(error);
  }
}
