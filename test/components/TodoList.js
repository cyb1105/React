import React, { Component } from 'react'
import Item from './Item';

class TodoList extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.data !== this.props.data; 
  // }

  render() {
    const {data, onRemove } = this.props; 
    const list = data.map(value => (
      <Item 

        info={value} 
        onRemove={onRemove}
  
      />
    )
    );

    return (
      <div>
        {list}
      </div>
    );
  }
}

export default TodoList;