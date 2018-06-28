import React from 'react';

const SearchResults = (props) => {
    if(Object.keys(props.searchResults).length !== 0 && props.searchResults.constructor === Object){
        return(
            <section className="search-results">
                <h2>Search Results</h2>
                <ul>
                    {props.searchResults.artist.map( artist => <li> {artist.name} </li>)}
                </ul>
            </section>
        )
    }
    else{
        return null;
    }
}

export default SearchResults