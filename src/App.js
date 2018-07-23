import React, { Component } from 'react';
import Setlist from './components/setlist'
import SearchResults from './components/searchResults'
import SearchForm from './components/searchForm'
import './App.css';

class App extends Component {
  state = {
    searchValue: "",
    artistName: "",
    artistmbid: "",
    searchResults: {},
    allLists: {},
    setlist: {},
  }
  handleInputChange = (e) => {
      this.setState({ searchValue: e.target.value })
  }
  searchbyArtist = (e) => {
      e.preventDefault()
      const searchURL = `http://localhost:8888/search/${encodeURIComponent(this.state.searchValue)}`
      fetch(searchURL).then(res =>res.json()).then(result => this.setState({searchResults: result})).catch( e => {throw(e)})
  }
  getAllSetlists = (mbid) => {
    const getListsURL = `http://localhost:8888/getlists/${encodeURIComponent(mbid)}`
    fetch(getListsURL).then(res =>res.json()).then(result => this.setState({allLists: result})).catch( e => {throw(e)})
  }
  loadSetlist = (setlistID) => {
    const getListURL = `http://localhost:8888/getlist/${encodeURIComponent(setlistID)}`
    fetch(getListURL).then(res =>res.json()).then(result => this.setState({setlist: result})).catch( e => {throw(e)})
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
          searchResults = {this.state.searchResults}
          clickResult = {this.getAllSetlists}
        ></SearchResults>
        <SearchResults
          searchResults = {this.state.allLists}
          clickResult = {this.loadSetlist}
        ></SearchResults>
        <Setlist
          setlist={this.state.setlist}
        ></Setlist>
      </div>
    );
  }
}

export default App;
