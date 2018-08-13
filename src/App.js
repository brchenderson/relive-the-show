import React, { Component } from 'react';
import Setlist from './components/setlist'
import SearchResults from './components/searchResults'
import SearchForm from './components/searchForm'
import Pagination from './components/pagination'
import './App.css';

class App extends Component {
  state = {
    searchValue: "",
    artistName: "",
    artistmbid: "",
    artistURL: "",
    searchResults: {},
    cachedSearch: {},
    artistSearch: {},
    allLists: {},
    setlist: {},
  }
  handleInputChange = (e) => {
      this.setState({ searchValue: e.target.value })
  }
  searchbyArtist = (search, page = 1) => {
      const searchURL = `http://localhost:8888/search/${encodeURIComponent(this.state.searchValue)}/${page}`
      fetch(searchURL).then(res =>res.json()).then(result => this.setState({
        artistSearch: result,
        searchResults: result
      })).catch( e => {throw(e)})
  }
  getAllSetlists = (artist, page = 1) => {
    const getListsURL = `http://localhost:8888/getlists/${encodeURIComponent(artist.mbid)}/${page}`
    fetch(getListsURL).then(res =>res.json()).then(result => this.setState({
      allLists: result,
      artistName: artist.name,
      artistmbid: artist.mbid,
      artistURL: artist.url,
      cachedSearch: this.state.searchResults,
      searchResults: result,
    })).catch( e => {throw(e)})
  }
  loadSetlist = (setlistID) => {
    const getListURL = `http://localhost:8888/getlist/${encodeURIComponent(setlistID)}/`
    fetch(getListURL).then(res =>res.json()).then(result => this.setState({
      setlist: result,
      searchResults: {}
    })).catch( e => {throw(e)})
  }
  backToArtists = () =>{
    this.setState({
      artistName: "",
      artistmbid: "",
      artistURL: "",
      searchResults: this.state.artistSearch,
      setlist: {}
    })
  }
  backToSetlists = () =>{
    this.setState({
      searchResults: this.state.allLists,
      setlist: {}
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Relive the show!</h1>
        <p>Find shows you've been to on setlist.fm (you won't need an account!) and put together a Spotify playlist of that night's set with a bias toward live tracks.</p>
        <SearchForm
          searchValue={this.state.searchValue}
          searchbyArtist={this.searchbyArtist}
          handleInputChange={this.handleInputChange}></SearchForm>
        <SearchResults
          artistURL = {this.state.artistURL}
          artistName = {this.state.artistName}
          backToArtists = {this.backToArtists}
          searchResults = {this.state.searchResults}
          searchValue = {this.state.searchValue}
          searchbyArtist = {this.searchbyArtist}
          clickArtist = {this.getAllSetlists}
          clickSetlist = {this.loadSetlist}
        ></SearchResults>
       
        <Setlist
          setlist={this.state.setlist}
          backToSetlists={this.backToSetlists}
        ></Setlist>
      </div>
    );
  }
}

export default App;
