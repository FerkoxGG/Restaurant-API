import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import { reducer as formReducer } from 'redux-form';

import RestaurantList from './components/restaurant_list';
import RestaurantShow from './components/restaurant_show';
import RestaurantCreate from './components/restaurant_create';

import './assets/stylesheets/application.scss';
import restaurantsReducer from './reducers/restaurants_reducer';


const reducers = combineReducers({
  restaurants: restaurantsReducer,
  form: formReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <Router history={history}>
      <div className="thin-container">
        <Switch>
          <Route path="/" exact component={RestaurantList} />
          <Route path="/restaurants/new" exact component={RestaurantCreate} />
          <Route path="/restaurants/:id" exact component={RestaurantShow} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
