import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchRestaurants } from '../actions/restaurants_actions';

class RestaurantShow extends Component {
  componentWillMount() {
    if (this.props.restaurant) {
      this.props.fetchRestaurants(this.props.match.params.id);
    }
  }

  render() {
    if (!this.props.restaurant) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div className="restaurant-item">
          <h3>{this.props.restaurant.name}</h3>
          <p>{this.props.restaurant.address}</p>
        </div>
        <Link to="/restaurants">Back to Restaurants</Link>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const restaurant = state.restaurants.find(p => p.id === idFromUrl);
  return { restaurant };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRestaurants }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);