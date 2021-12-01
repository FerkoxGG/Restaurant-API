import React from 'react';
import { connect } from 'react-redux';
import { fetchComments, appendComment } from '../actions/index.js';
import { bindActionCreators } from 'redux';

import Comment from '../components/comment';
import CommentForm from './comment_form';

class CommentList extends Component {
  componentWillMount() {
    this.props.fetchComments();
  }

  componentDidMount() {
    this.suscribeActionCable(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.restaurant.id !== nextProps.selectRestaurant) {
      this.suscribeActionCable(nextProps);
    }
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  fetchComments = () => {
    this.props.fetchComments(this.props.selectRestaurant);
  }

  suscribeActionCable = (props) => {
    App[`Restaurant${props.restaurant.id}`] = App.cable.subscriptions.create(
      { channel: 'CommentsChannel', restaurant_id: props.restaurant.id },
      {
        received: (comment) => {
          if (comment.restaurant === props.selectedRestaurant) {
            props.appendComment(comment);
          }
        }
      }
    );
  }

  render() {
    return (
      <div className="restaurant-list">
        <div className="restaurant-title">
          <span>Restaurant #{this.props.selectedRestaurant}</span>
        </div>
        <div className="restaurant-comments" ref={list => this.list = list}>
          {
            this.props.comments.map((comment) => {
              return <Comment key={comment.id} {...comment} />;
            })
          }
        </div>
        <CommentForm selectedRestaurant={this.props.restaurant} />
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    comments: state.comments,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchComments: fetchComments,
    fetchUser: fetchUser,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, CommentList);