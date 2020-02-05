import React, {Component, Fragment} from 'react';
import Counter from './Counter';


class App extends Component{
  render(){
    return(
      <div>
        <Counter init = '10'/>
      </div>
     
    );
  }

}

export default App;
