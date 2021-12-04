import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchRestaurants } from './actions/restaurants_actions';

class RestaurantList extends Component {
  componentWillMount() {
    this.props.fetchRestaurants();
  }

  renderRestaurants() {
    return this.props.restaurants.map((restaurant) => {
      return (
        <Link to={`/restaurants/${restaurant.id}`} key={restaurant.id}>
          <li className="restaurant-item">
            <h3>{restaurant.name}</h3>
            <p>{restaurant.address}</p>
          </li>
        </Link>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="first-row">
          <h3>Restaurants</h3>
          <Link to="/restaurants/new" className="btn btn-primary">
            Add Restaurant
          </Link>
        </div>
        <h3>Restaurants</h3>
        <ul className="list-group">
          {this.renderRestaurants()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    restaurants: state.restaurants,
    selectedRestaurant: state.selectedRestaurant
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchRestaurants
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
