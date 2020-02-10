import React, { Component } from 'react';

class TodoForm extends Component {
  state = {
      todo:''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      todo:''
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          placeholder="입력"
          value={this.state.todo}
          name="todo"
          onChange={this.handleChange} />
        
        <button type="submit">추가</button>
      </form>
    );
  } 
}

export default TodoForm;