import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import './Counter.css';

import { getRandomColor } from '../utils';

const Counter = ({number, color, onIncrement, onDecrement, onSetColor}) => {
  return (
    <Fragment>
      <div className="Counter" 
           style={{backgroundColor: color}}>
        {number}
      </div>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={(e) => {onSetColor(getRandomColor())}}>change color</button>
    </Fragment>
  );
};

// Counter.defaultProps = {
//   number: 0,
//   color: 'black',
//   onIncrement: () => console.warn('onIncrement not defined'),
//   onDecrement: () => console.warn('onDecrement not defined'),
//   onSetColor: () => console.warn('onSetColor not defined')
// };

export default Counter;