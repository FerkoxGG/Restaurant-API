import React from 'react';
import { emojify } from 'react-emojione';

function strToRGB(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var colour = '#';
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xFF;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
}

const Comment = (props) => {
  const time = new Date(props.comment.created_at).toLocaleString();
  const color = strToRGB(props.comment.user.username);
  const content = emojify(props.comment.body);
  return (
    <div className="comment">
      <i className="author">
        <span style={{color: color}}>{props.comment.user.username}</span>
        <small>{time}</small>
      </i>
      <p>{content}</p>
    </div>
  );
};

export default Comment;
