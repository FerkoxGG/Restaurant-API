// const BASE_URL = '/api/v1/';
const ROOT_URL = '/api/v1/';

export function fetchRestaurants() {
  const promise = fetch(`${ROOT_URL}restaurants`, { credentials: "same-origin"})
  .then(response => response.json());

  return {
    type: 'FETCH_RESTAURANTS',
    payload: promise
  };

}
