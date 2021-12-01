// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/app';
import commentsReducer from './reducers/comments_reducer';

const restaurantContainer = document.getElementById('restaurantjsx');

const initialState = {
  comments: [],
  restaurants: JSON.parse(restaurantContainer.dataset.restaurants).map(c => c.id),
}

const reducers = combineReducers({
  comments: commentsReducer,
  restaurants: (state = null, action) => state
});

const middlewares = applyMiddleware(logger, ReduxPromise);
const store = createStore(reducers, initialState, middlewares);

//render an instance of the component in the DOOM
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />
        <Route path="/restaurants/new" component={App} />
        <Route path="/restaurants/:id" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  restaurantContainer
);
