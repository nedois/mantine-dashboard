import axios from 'axios';

import { app } from '@/config';

export const client = axios.create({
  baseURL: app.apiUrl,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
});

const AUTH_TOKEN_KEY = 'token';

export function setClientAccessToken(token: string) {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
  client.defaults.headers.common.authorization = `Bearer ${token}`;
}

export function removeClientAccessToken() {
  localStorage.removeItem(AUTH_TOKEN_KEY);
  delete client.defaults.headers.common.authorization;
}

export function loadAccessToken() {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  setClientAccessToken(token ?? '');
}
