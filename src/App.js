import React from 'react';
import Comments from './Comments';
import StarRatingComponent from 'react-star-rating-component';

import LineChart from './LineChart';


class CustomerFeedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = { // set default states
      comments: [],
      formControls: {
          email: {
            value: ''
          },
          userName: {
            value: ''
          },
          comment: {
            value: ''
          }
      },
      rating: 1,
      allRatings: [],
      dataHeaders: ["Comment no", "Rating"],
      dataChart: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeHandler = event => {
      
      const name = event.target.name;
      const value = event.target.value;
    
      this.setState({
        formControls: {
            ...this.state.formControls,
            [name]: {
            ...this.state.formControls[name],
            value
          }
        }
      });
  }

  handleSubmit(event) {
    event.preventDefault(); // stop form from submitting and do actions below

        // loop through items array, create a new array and push to it an objecttt
    // of type array with first value index and second value rating

    const comments = [...this.state.comments, {
        comment: this.state.formControls.comment.value, 
        name: this.state.formControls.userName.value, 
        rating: this.state.rating
    }]

    const chartData = [this.state.dataHeaders];
    comments.forEach((comment, index) => chartData.push([index, comment.rating]));
    
    // create an array of current properties tto be used by Comments, reset values in the form 
    this.setState({
      comments: comments,
      formControls: {
          email: {
            value: ''
          },
          userName: {
            value: ''
          },
          comment: {
            value: ''
          }
      },
      dataChart: chartData
    });
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  render() {

    let chart = '';

    if (this.state.dataChart.length > 1) {
      chart = <LineChart chartData={this.state.dataChart}/>;
    }

    return (
      <div className="container">
        <div className="row">

          <div className="col-md-7">
            <form onSubmit={this.handleSubmit}>      
              <label htmlFor="userName" className="hidden">Enter your email</label>
              <input type="text" name="userName" value={this.state.formControls.userName.value} onChange={this.changeHandler} placeholder="Enter your name" />
              
              <label htmlFor="email" className="hidden">Enter your name</label>
              <input type="email" name="email" value={this.state.formControls.email.value} onChange={this.changeHandler} placeholder="Enter your email" />
              
              <div>
                <h2>Rating from state:</h2>
                <StarRatingComponent 
                  name="rate1" 
                  starCount={5}
                  value={this.state.rating}
                  onStarClick={this.onStarClick.bind(this)}
                />
              </div>

              <label htmlFor="comment" className="hidden">Enter your comment</label>
              <textarea name="comment" value={this.state.formControls.comment.value} onChange={this.changeHandler} placeholder="Please leave your comment" />
              
              <input type="submit" value="Submit" />
            </form>
          </div>

          <div className="col-md-5">
            <div className="graph">
              {chart}
            </div>
          </div>

        </div>

        <div className="comments">
          <Comments items={this.state.comments} />
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <CustomerFeedback />
  );
}

export default App;
