import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import YoutubeApi from '../api/youtube';

class App extends Component {

  state = {
    videos: [],
    searchTerm: 'Lost Boy',
    selectedVideo: null
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    YoutubeApi.getList(this.state.searchTerm).then((videos) => {
      this.setState({ 
        videos, 
        selectedVideo: videos[0] 
      })
    });
  }

  videoSearch(term) {
    YoutubeApi.getList(term).then((videos) => {
      this.setState({ 
        videos, 
        selectedVideo: videos[0] 
      })
    })
  }

  render() {
    return (
      <div className="section">
        <div className="container">
          <SearchBar onSearchTermChanged={term => this.videoSearch(term)}></SearchBar>
          <div className="columns">
            <VideoDetail video={this.state.selectedVideo}></VideoDetail>
            <VideoList 
              onVideoSelect={video => this.setState({selectedVideo: video})}
              videos={this.state.videos} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;