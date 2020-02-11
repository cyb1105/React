import { combineReducers } from 'redux';
import CounterReducer from './reducer-counter';

const rootReducer = combineReducers({
  counter: CounterReducer
});

export default rootReducer;