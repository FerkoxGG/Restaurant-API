import React from "react";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {selectRestaurant, fetchUser} from "../actions/index.js";

class RestaurantList extends Component {
  handleClick = (restaurant) => {
    this.props.selectRestaurant();
    this.props.fetchComments(restaurant);
    this.props.fetchUser(restaurant);
  }

  renderRestaurant = (restaurant) => {
    return (
      <li
        key={restaurant.id}
        className={restaurant.id === this.props.selectedRestaurant.id ? "active" : null}
        onClick={() => this.handleClick(restaurant)}>
        <Link 
          to={`/restaurants/${restaurant.id}`}>
          #{restaurant.id}
        </Link>
      </li>
    )
  }

  render() {
    return (
      <div className="restaurant-list">
        <span>Restaurant List</span>
        <ul>
          {this.props.restaurants.map(this.renderRestaurant)}
        </ul>
      </div>
    )
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
    selectRestaurant: selectRestaurant,
    fetchComments: fetchComments,
    fetchUser: fetchUser
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
