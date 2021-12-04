import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createRestaurant } from '../actions/restaurants_actions';

class RestaurantCreate extends Component {
  onSubmit(values) {
    this.props.createRestaurant(values, (restaurant) => {
      this.props.history.push('/');
      return restaurant;
    });
  }

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <h3>Create a Restaurant</h3>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            label="Name"
            name="name"
            type="text"
            component={this.renderField}
          />
          <label htmlFor="address">Address</label>
          <Field
            className="address"
            label="Address"
            name="address"
            type="text"
            component={this.renderField}
          />
          <button className="btn btn-primary" type="submit" disabled={this.state.pristine || this.props.submitting}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'restaurantCreateForm' })(
  connect(null, { createRestaurant })(RestaurantCreate)
);