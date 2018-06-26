import React, { Component } from 'react';
import Setlist from './components/setlist/setlist'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Relive the show!</h1>
        <p>Find shows you've been to on setlist.fm (you won't need an account!) and put together a Spotify playlist of that night's set with a bias toward live tracks.</p>
        <form>
          <input type="text" placeholder="Who did you see?" />
          <button>Search</button>
        </form>
        <Setlist></Setlist>
      </div>
    );
  }
}

export default App;
