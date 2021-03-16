import fetch from 'isomorphic-fetch';

export const API_URL = 'http://localhost:3000';

export default async (endpoint, method = 'get', body) => fetch(`${API_URL}/${endpoint}`, {
  headers: { 'content-type': 'application/json' },
  method,
  body: JSON.stringify(body),
})
  .then((response) => response.json().then((json) => ({ json, response })))
  .then(({ json, response }) => {
    if (!response.ok) {
      return Promise.reject(json);
    }
    return json;
  })
  .then(
    (response) => response,
    (error) => {
      throw error;
    },
  );
