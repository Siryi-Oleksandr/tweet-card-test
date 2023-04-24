import axios from 'axios';

const URL = 'https://642278cc77e7062b3e1a616c.mockapi.io/api/v1/users';

export async function getAllUsers(query, controller) {
  const axiosParams = query
    ? {
        user: query,
        signal: controller.signal,
      }
    : {
        signal: controller.signal,
      };

  const response = await axios.get(URL, {
    params: axiosParams,
  });
  return response.data;
}

export async function getUsers(query, page, perPage, controller) {
  const axiosParams = query
    ? {
        limit: perPage,
        page,
        user: query,
        signal: controller.signal,
      }
    : {
        limit: perPage,
        page,
        signal: controller.signal,
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

export async function getUsersFollowing(query, page, perPage, controller) {
  const axiosParams = query
    ? {
        following: true,
        limit: perPage,
        page,
        user: query,
        signal: controller.signal,
      }
    : {
        following: true,
        limit: perPage,
        page,
        signal: controller.signal,
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

export async function getUsersFollow(query, page, perPage, controller) {
  const axiosParams = query
    ? {
        following: false,
        limit: perPage,
        page,
        user: query,
        signal: controller.signal,
      }
    : {
        following: false,
        limit: perPage,
        page,
        signal: controller.signal,
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
