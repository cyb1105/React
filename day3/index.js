import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
const API_KEY = 'AIzaSyCtULSaZS3zlRtb5uF6Ujn8dDcxLNBgt4U';

// YTSearch({ key:API_KEY, term:'surfboard'}, function(data){
//     console.log(data);
//   })

class App extends Component{
  constructor(props){
    

    super(props); //부모의 '생성자 함수'를 호출(Component)
    this.state ={
      videos:[],
      selectedVideo: null
    }

  // this.videoSearch('java');
  }

  videoSearch(term){
    YTSearch({ key:API_KEY, term:term},(data)=> {
      this.setState({
        videos : data,
        selectedVideo:data[0]
      });
    });

  }

  
  // handleSelect = (selectedVideo) => {
  //   this.setState({
  //     selectedVideo: selectedVideo
  //   });
  // }
  render(){
  const _videoSearch = _.debounce((term)=>{this.videoSearch(term),1000});
  return(
  <div>
    <SearchBar  onSearchTermChange={term => this.videoSearch(term)} /> 
    <VideoDetail video = {this.state.selectedVideo}/>
    <VideoList 
    // onVideoSelect={this.handleSelect}
    onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
    videos = {this.state.videos} />
    
  </div>
  )
}
}

ReactDOM.render(<App/>, document.querySelector('.container'));


export default App;