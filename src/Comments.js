import React from 'react';

//
// Comments list
//

const Comments = props => (

	<ul className="comments__list">
		{
			props.items.map((item, index) => 
		  		<li className="comments__item" key={index}>
		  			<p className="giga bold below-8">{item.name}</p>      			
		  			<p className="deca">Rating: {item.rating} of 5</p>
		  			<p>{item.comment}</p>
		  		</li>
		  	)
		}
	</ul>
);

export default Comments;