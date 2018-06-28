import React, { Component } from 'react';
import Setlist from './components/setlist/setlist'

import SearchForm from './components/searchForm'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Relive the show!</h1>
        <p>Find shows you've been to on setlist.fm (you won't need an account!) and put together a Spotify playlist of that night's set with a bias toward live tracks.</p>
        <SearchForm></SearchForm>
        <Setlist></Setlist>
      </div>
    );
  }
}

export default App;
