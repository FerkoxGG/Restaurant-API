import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createComment } from '../actions/index.js';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };
  }

  componentDidMount() {
    this.body.focus();
  }

  hadleChange = (e) => {
    this.setState({ body: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-horizontal">
        <input 
        ref={input => this.body = input}
        type="text"
        className="form-control"
        autocomplete="off"
        value={this.state.value}
        onChange={this.hadleChange}
        placeholder="Add a comment..." 
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createComment }, dispatch);
}

export default connect(null, mapDispatchToProps)(CommentForm);
