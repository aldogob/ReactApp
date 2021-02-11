import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';
import SearchBar from './componets/searchbar';
const API_KEY = 'AIzaSyBNlfM2INlVMyvYjuNflpsfcx9FVM7E1hc';

// create a new component. this componet
//should produce some html
class App extends Component{
    constructor(props) {
        super(props);

        this.state = { videos:[] };

        YTsearch({key: API_KEY, term: 'surfboards'}, function(data) {
            this.setState({ videos: data });

    }

    render() {
    return (
     <div>
            <SearchBar />
        </div>
    );
 }
}

//take this componets generated HTML 
//put it on page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
