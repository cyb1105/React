import React, {Component} from 'react';
import Phoneitem from './phone_item';

class PhoneList extends Component {
    shouldComponentUpdate(nextProps, nextstate){
        return nextProps.data!==this.props.data;
      }

    
    render(){
        const {data, onRemove, onUpdate} = this.props;//data, onRemove
   
        const list = data.map(value => 
        (
            <Phoneitem 
                key={value.id} 
                info={value}
                onRemove={onRemove}
                onUpdate={onUpdate}/>

        )
        );
        return(

            <div>
                {list}              
            </div>
        )
    }

}

export default PhoneList;