import React from 'react';
import logo from './logo.svg';
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
        <input type="email" 
                     name="email" 
                     value={this.state.formControls.email.value} 
                     onChange={this.changeHandler} 
              />

              <input type="text" 
                     name="name" 
                     value={this.state.formControls.name.value} 
                     onChange={this.changeHandler} 
              />

              <textarea 
                     name="comment" 
                     value={this.state.formControls.comment.value} 
                     onChange={this.changeHandler} 
              />

        {/* <textarea name="comment" onChange={this.handleCommentChange} value={this.state.comment} placeholder="Please enter your comment" /> */} 

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
