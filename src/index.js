import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail.js';
const API_KEY = 'AIzaSyCVhKJVPGPbCVObJOejxLou4JNFJvAa3hU';

class App extends Component {

  constructor(props){
    
    super(props);
    this.state = {videos: [], selectedVideo: null };

    YTSearch({key: API_KEY, term: 'oneplus5 unboxing'}, (data) => {
      this.setState({videos:data, selectedVideo:data[0]});
    });

  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector('.container'));
