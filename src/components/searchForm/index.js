import React, {Component} from 'react';
import SearchResults from '../searchResults'

class SearchForm extends Component{
    state = {
        searchValue: "",
        searchResults: {
            "type": "artists",
            "itemsPerPage": 30,
            "page": 1,
            "total": 2,
            "artist": [{
                    "mbid": "f7f32d93-0801-45cb-9f5a-e68f640649f4",
                    "tmid": 1388669,
                    "name": "Cold Cave",
                    "sortName": "Cold Cave",
                    "disambiguation": "",
                    "url": "https://www.setlist.fm/setlists/cold-cave-33d430c1.html"
                },
                {
                    "mbid": "537cbdb2-ddd1-491c-80f9-fcf15c9a4e48",
                    "name": "Cold Cave & Prurient",
                    "sortName": "Cold Cave & Prurient",
                    "url": "https://www.setlist.fm/setlists/cold-cave-and-prurient-3d5b917.html"
                }
            ]
        }
    }
    handleInputChange = (e) => {
        this.setState({ searchValue: e.target.value })
    }
    searchbyArtist = (e) => {
        e.preventDefault()
        const searchURL = `https://api.setlist.fm/rest/1.0/search/artists?artistName=${encodeURIComponent(this.state.searchValue)}&p=1&sort=sortName`
        console.log(searchURL)
        /*fetch(searchURL).then(res =>res.json()).then(result => this.setState({searchResults: result})).catch(e => throw(e)) */
    }
    render(){
        return(
        <section>
            <form>
                <input type = "text" placeholder = "Who did you see?" value={this.state.searchValue} onChange={this.handleInputChange} / >
                    <button onClick={this.searchbyArtist}>Search</button> 
            </form>
            <SearchResults
                searchResults = {this.state.searchResults}
            ></SearchResults>
        </section>
        )
    }
}

export default SearchForm;