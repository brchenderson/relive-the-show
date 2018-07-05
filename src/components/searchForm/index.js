import React, {Component} from 'react';
import SearchResults from '../searchResults'

const SearchForm = (props) => {
    return(
    <section>
        <form>
            <input type = "text" placeholder = "Who did you see?" value={props.searchValue} onChange={props.handleInputChange} / >
                <button onClick={props.searchbyArtist}>Search</button> 
        </form>
    </section>
    )
}

export default SearchForm;