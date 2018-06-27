import React, {Component} from 'react';
import SearchResults from '../searchResults'

class SearchForm extends Component{
    state = {
        searchValue: "",
        searchResults: {},
    }
    handleInputChange = (e) => {
        this.setState({ searchValue: e.target.value })
    }
    searchbyArtist = (e) => {
        e.preventDefault()
        const searchURL = `https://api.setlist.fm/rest/1.0/search/artists?artistName=${encodeURIComponent(this.state.searchValue)}&p=1&sort=sortName`
        console.log(`https://api.setlist.fm/rest/1.0/search/artists?artistName=${encodeURIComponent(this.state.searchValue)}&p=1&sort=sortName`)
        /*fetch(searchURL).then(res =>res.json()).then(result => this.setState({searchResults: result})) */
    }
    render(){
        return(
        <section>
            <form>
                <input type = "text" placeholder = "Who did you see?" value={this.state.searchValue} onChange={this.handleInputChange} / >
                    <button onClick={this.searchbyArtist}>Search</button> 
            </form>
            <SearchResults></SearchResults>
        </section>
        )
    }
}

export default SearchForm;