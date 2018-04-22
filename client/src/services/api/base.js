import API_URL from './config';

const request = async (uri, method, body) => {
  const res = await fetch(`${API_URL}/${uri}`, {
    method,
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });
  const json = await res.json();
  
  if (!res.ok) {
    throw json;
  }

  return json;
};

const $get = async uri => request(uri, 'GET');
const $post = async (uri, body) => request(uri, 'POST', body);
const $put = async (uri, body) => request(uri, 'PUT', body);
const $delete = async (uri, body) => request(uri, 'DELETE', body);

export {
  $get,
  $post,
  $put,
  $delete,
};
