const BASE_URL = '/api/v1/';

export function fetchComments(restaurant) {
  const url = `${BASE_URL}restaurants/${restaurant}/comments`;
  const promise = fetch(url, { credentials: "same-origin"}).then(response => response.json());

  return {
    type: 'FETCH_COMMENTS',
    payload: promise
  };
}

export function createComment(restaurant, body) {
  const url = `${BASE_URL}restaurants/${restaurant}/comments`;
  const promise = fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(response => response.json());

  return {
    type: 'CREATE_COMMENT',
    payload: promise
  };
}

export function fetchRestaurants() {
  const url = `${BASE_URL}restaurants`;
  const promise = fetch(url, { credentials: "same-origin"}).then(response => response.json());

  return {
    type: 'FETCH_RESTAURANTS',
    payload: promise
  };
}

export function appendComment(message) {
  return {
    type: 'MESSAGE_POSTED',
    payload: message
  }
}
