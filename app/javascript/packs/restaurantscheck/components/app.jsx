import React from 'react';
import RestaurantList from '../containers/restaurant_list';
import CommentList from '../containers/comment_list';

import logo from '../assets/images/logo.svg';

const App = (props) => {
  return (
    <div className="messaging-wrappen">
      <div className="logo-container">
        <img className="messaging-logo" src={logo} />
      </div>
      <RestaurantList selectedChannel={props.match.params.restaurant}/>
    </div>
  )
};

export default App;
