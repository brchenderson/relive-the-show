import React from 'react';


const Setlist = (props) => {
  if(typeof(props.setlist.sets) !== 'undefined' ){
    const theSetlist = props.setlist.sets.set[0].song.map(song => <li>{song.name}</li>)
    return(
      <div>
          <h2>{props.setlist.artist.name} at {props.setlist.venue.name} ({props.setlist.venue.city.name}, {props.setlist.venue.city.state})</h2>
          <ul>
              {theSetlist}
          </ul>
          <a onClick={props.backToSetlists}>This is the wrong setlist. Show me the search results again.</a>
      </div>
  )
  }
  else{
    return null;
  }
}

export default Setlist;