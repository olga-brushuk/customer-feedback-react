import React from 'react';

const Comments = props => (
  <ul>
    {
      props.items.map((item, index) => <li key={index}>{item.comment} by {item.name} - Rating: {item.rating} of 5.</li>)
    }
  </ul>
);

export default Comments;