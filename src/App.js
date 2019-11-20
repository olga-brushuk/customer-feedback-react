import React from 'react';
import './App.css';

class CustomerFeedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = { // set default states
      formControls: {
          email: {
            value: ''
          },
          name: {
            value: ''
          },
          comment: {
            value: ''
          }
      }
    };

    //this.handleNameChange = this.handleNameChange.bind(this);  
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
    //alert('Email: ' + this.state.formControls.email.value);
    //alert('Name: ' + this.state.formControls.name.value);
    //alert('Comment: ' + this.state.formControls.comment.value);
    //alert('Comment: ' + this.state.comment);
    event.preventDefault();
      
    var today = new Date();
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()+' ';
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    //document.getElementById('comments').prepend(this.state.formControls.comment.value + '<p>' + date + time + '</p>');

    return (
      <div>{this.state.formControls.comment.value}</div>
      <p><span>{date}</span><span>{time}</span></p>
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <form onSubmit={this.handleSubmit}>      
              <label htmlFor="name" className="hidden">Enter your email</label>
              <input type="text" name="name" value={this.state.formControls.name.value} onChange={this.changeHandler} placeholder="Enter your name" />
              
              <label htmlFor="email" className="hidden">Enter your name</label>
              <input type="email" name="email" value={this.state.formControls.email.value} onChange={this.changeHandler} placeholder="Enter your email" />
              
              <label htmlFor="comment" className="hidden">Enter your comment</label>
              <textarea name="comment" value={this.state.formControls.comment.value} onChange={this.changeHandler} placeholder="Please leave your comment" />
              
              <input type="submit" value="Submit" />
            </form>
          </div>
          <div className="col-md-5">
            <div className="graph">
            </div>
          </div>
        </div>
        <div id="comments">
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
