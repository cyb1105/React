import React, { Component } from 'react';
import './App.css';

import SearchBar from './containers/serch_bar';
import BitcoinList from './containers/bitcoin_list';


export default class App extends Component{
  render() {
  return (
    <div>
      <SearchBar/>
      <BitcoinList/>

    </div>
  );
}
}

