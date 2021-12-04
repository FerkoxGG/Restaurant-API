import { FETCH_RESTAURANTS, FETCH_RESTAURANT, RESTAURANT_CREATED } from '../actions/restaurants_actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_RESTAURANTS:
      return action.payload.data;
    case FETCH_RESTAURANT:
      return action.payload.data;
    case RESTAURANT_CREATED:
      return [action.payload.data, ...state];
    default:
      return state;
  }
}

// import { FETCH_POSTS, FETCH_POST, POST_CREATED } from '../actions';

// export default function(state = [], action) {
//   switch(action.type) {
//     case FETCH_POSTS:
//       return action.payload;
//     case FETCH_POST:
//       // action.payload is an object
//       return [ action.payload ];
//     // case POST_CREATED:
//     //   // TODO: push it to the array of posts
//     //   return state;
//     default:
//       return state;
//   }
// }
