import React from 'react';


const Setlist = (props) => {
  console.log(props.setlist.sets);
  if(typeof(props.setlist.sets) !== 'undefined' && props.setlist.sets.length > 0 ){
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
  } else if(typeof(props.setlist.sets) !== 'undefined' && props.setlist.sets.set.length === 0 ){
    return (
      <div>
        <p>There aren't any songs listed on setlist.fm for this show.</p>
      </div>
    )
  } else{
    return null;
  }
}

export default Setlist;