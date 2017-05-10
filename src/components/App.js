import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import _ from 'lodash';

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
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 400);

    return (
      <div className="App">
        <div className="container">
          <SearchBar onSearchTermChanged={videoSearch} />
          <div className="main">
            <VideoList 
              onVideoSelect={video => this.setState({selectedVideo: video})}
              videos={this.state.videos} />
            <VideoDetail video={this.state.selectedVideo} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;