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
    alert('Email: ' + this.state.formControls.email.value);
    alert('Name: ' + this.state.formControls.name.value);
    alert('Comment: ' + this.state.formControls.comment.value);
    //alert('Comment: ' + this.state.comment);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>      
        <label for="name" className="hidden">Enter your email</label>
        <input type="text" name="name" value={this.state.formControls.name.value} onChange={this.changeHandler} placeholder="Enter your name" />
        
        <label for="email" className="hidden">Enter your name</label>
        <input type="email" name="email" value={this.state.formControls.email.value} onChange={this.changeHandler} placeholder="Enter your email" />
        
        <label for="comment" className="hidden">Enter your comment</label>
        <textarea name="comment" value={this.state.formControls.comment.value} onChange={this.changeHandler} placeholder="Please leave your comment" />
        
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function App() {
  return (
    <CustomerFeedback />
  );
}

export default App;
