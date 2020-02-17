import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class BitcoinList extends Component {
  renderBitcoin(Data){
    console.log(Data)
    const high = Data.map(bitcoin => bitcoin.high)
    const low = Data.map(bitcoin => bitcoin.low)
    return(
    <tr key={Data}>
      <th><Chart data={high} color='green'/></th>
      <th><Chart data={low} color='blue'/></th>
    </tr>

    )
      }
        

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>-----------------high---------------</th>
            <th>------------------low---------------</th>
          </tr>
        </thead>
        <tbody>
          {this.props.bitcoin.map(this.renderBitcoin)}
        </tbody>
      </table>
    );
  }
}

// mapSrtateToProps funciton
function mapSrtateToProps(state){
  return{ bitcoin: state.bitcoin};
}

// connect mapping
export default connect(mapSrtateToProps)(BitcoinList);