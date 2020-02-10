import React, { Component } from 'react';

class Item extends Component {

  state = {
      todo : ''
  }


  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  }


  render() {
  
    const { todo } = this.props.info;
    return(
      <div>
        <div>{todo}</div>      
        <button onClick={this.handleRemove}>삭제</button>
      </div>
    );
  };
}

export default Item;