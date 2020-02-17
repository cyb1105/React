import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {
  return (
    <div>
      <Sparklines width={100} height={100}
        data={props.data}>
          <SparklinesLine color={props.color}/>
          <SparklinesReferenceLine type="avg"/>
      </Sparklines>
      
    </div>
  );
};