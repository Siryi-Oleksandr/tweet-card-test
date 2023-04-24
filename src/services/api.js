import axios from 'axios';

const perPage = 4;

const URL = 'https://642278cc77e7062b3e1a616c.mockapi.io/api/v1/users';

export async function getAllUsers() {
  const response = await axios.get(URL);
  return response.data;
}

export async function getUsers(page) {
  const axiosParams = {
    limit: perPage,
    page,
  };

  const response = await axios.get(URL, {
    params: axiosParams,
  });
  return response.data;
}

export async function editUser(data) {
  const response = await axios.put(`${URL}/${data.id}`, {
    followers: data.followers,
    following: data.following,
  });
  return response.data;
}

export async function getUsersFollowing(page) {
  const axiosParams = {
    following: true,
    limit: perPage,
    page,
  };

  const response = await axios.get(URL, {
    params: axiosParams,
  });
  return response.data;
}

export async function getAllFollowingUsers() {
  const axiosParams = {
    following: true,
  };

  const response = await axios.get(URL, {
    params: axiosParams,
  });
  return response.data;
}

export async function getUsersFollow(page) {
  const axiosParams = {
    following: false,
    limit: perPage,
    page,
  };

  const response = await axios.get(URL, {
    params: axiosParams,
  });
  return response.data;
}

export async function getAllFollowUsers() {
  const axiosParams = {
    following: false,
  };

  const response = await axios.get(URL, {
    params: axiosParams,
  });
  return response.data;
}
