import axios from 'axios';

const BASE_URL = 'https://6461d891491f9402f4abd75e.mockapi.io';

export async function fetchContacts() {
  const { data } = await axios.get(BASE_URL + '/contacts');
  return data;
}

export async function addContact(newContact) {
  const { data } = await axios.post(BASE_URL + '/contacts', newContact);
  return data;
}

export async function removeContact(contactId) {
  const { data } = await axios.delete(`${BASE_URL}/contacts/${contactId}`);
  return data.id;
}
