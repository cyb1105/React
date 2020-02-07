import React, { Component } from 'react';

class SearchBar extends Component {
constructor(props) {
    super(props);
    this.state ={
        term : ''
    }
}


onInputChange = (event)=>{
    this.setState(
        {term: event.target.value}
        )
    this.props.onSearchTermChange(event.target.value);
}

    render(){
        return(
        <div className='search-bar'>
        <input onChange={this.onInputChange} />
        {/* <input onChange={event => console.log(event.target.value)} /> */}
      
        </div>
    )   
}
}

export default SearchBar;