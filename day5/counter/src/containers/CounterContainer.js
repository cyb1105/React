import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { getRandomColor } from '../utils';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({
    color: state.counter.color,
    number: state.counter.number  
});

// const mapDispatchToProps = (dispatch) => ({
//   onIncrement: () => dispatch(actions.increment()),
//   onDecrement: () => dispatch(actions.decrement()),
//   onSetColor: () => {
//       const color = getRandomColor();
//       dispatch(actions.setColor(color));
//   }
// });

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    onIncrement: actions.increment,
    onDecrement: actions.decrement,
    onSetColor: actions.setColor
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);