import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';
import SearchBar from './componets/search_bar';
import VideoList from './componets/video_list';
import VideoDetail from './componets/video_details';
const API_KEY = 'AIzaSyBNlfM2INlVMyvYjuNflpsfcx9FVM7E1hc';

class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
             videos: [],
             selectedVideo: null
             }; 

        YTsearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({
                 videos: videos,
                 selectedVideo: videos[0]
                 });
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

ReactDOM.render(<App />, document.querySelector('.container'));
