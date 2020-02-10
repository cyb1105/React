import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  id = 0;
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          id: '',
          todo: ''
        }
      ],
    }
  }
  
  handleCreate = (data) => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.concat({id: this.id++, ...data})
    })
  } 

 
  handleRemove = (id) => {
    const { contacts } = this.state;

    this.setState({
      contacts: contacts.filter(
        info => info.id !== id
      )
    });
  }

  
  render() {


    return (
      <div className="App-header">
        오늘 할 일
        <TodoForm 
            onCreate={this.handleCreate}/>
   
        <TodoList 
          data={this.state.contacts}
          onRemove={this.handleRemove}
       />
      </div>

    );
  }
}

export default App;
