import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export async function registerUser(userData) {
  const { data } = await axios.post('/users/signup', userData);
  token.set(data.token);
  return data;
}

export async function loginUser(userData) {
  const { data } = await axios.post('/users/login', userData);
  token.set(data.token);
  return data;
}

export async function logoutUser() {
  const { data } = await axios.post('/users/logout');
  token.unset();
  return data;
}

export async function getUser(persistedToken) {
  token.set(persistedToken);
  const { data } = await axios.get('/users/current');
  console.log(data);
  return data;
}

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContact(newContact) {
  const { data } = await axios.post('/contacts', newContact);
  return data;
}

export async function removeContact(contactId) {
  console.log(contactId);
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data.id;
}
