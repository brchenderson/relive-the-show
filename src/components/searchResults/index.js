import React from 'react';

const SearchResults = (props) => {
    if(Object.keys(props.searchResults).length !== 0 && props.searchResults.constructor === Object){
        let theResults = ''
        if(props.searchResults.type === 'artists'){
            theResults = props.searchResults.artist.map( artist => <li><a onClick={ () => props.clickResult(artist.mbid) } data-artist-mbid={artist.mbid}>{artist.name}</a> </li>)
        } else if (props.searchResults.type === 'setlists'){
            theResults = props.searchResults.setlist.map( setlist => <li><a onClick={ () => props.clickResult(setlist.id) }>{setlist.eventDate} - {setlist.venue.name}</a> </li>)
        } else{
            return null;
        }

        return(
            <section className="search-results">
                <h2>Search Results</h2>
                <ul>
                    { theResults }
                </ul>
            </section>
        )
    }
    else{
        return null;
    }
}

export default SearchResults