import React from 'react';
import Pagination from '../pagination'

const SearchResults = (props) => {
    if(Object.keys(props.searchResults).length !== 0 && props.searchResults.constructor === Object){
        let theResults = ''
        let backToArtistSearch = '';
        let changePage = function(){
            console.log('CHANGE PAGE');
        }
        let searchParam = "";
        if(props.artistName !== ""){
            backToArtistSearch = <a href="#" onClick={props.backToArtists}>Actually {props.artistName} is the wrong artist. Show me the search results again</a>
        }
        if(props.searchResults.type === 'artists'){
            changePage = props.searchbyArtist;
            searchParam = props.searchValue;
            theResults = props.searchResults.artist.map( artist => <li><a onClick={ () => props.clickArtist(artist) } key={artist.mbid}>{artist.name}</a> <span className="disambiguation">{artist.disambiguation}</span></li>)
        } else if (props.searchResults.type === 'setlists'){
            changePage = props.clickArtist;
            searchParam = props.artistmbid;
            theResults = props.searchResults.setlist.map( setlist => <li><a onClick={ () => props.clickSetlist(setlist.id) } key={setlist.id}>{setlist.eventDate} - {setlist.venue.name}</a> </li>)
        } else if(props.searchResults.code === 404){
            backToArtistSearch = <span>Sorry. We couldn't find anything for {props.artistName}. <a href="#" onClick={props.backToArtists}>Head back to the search results</a> or <a href={props.artistURL} target="_blank"> go add a setlist.</a></span>
        }
        else{
            return null;
        }


        return(
            <section className="search-results">
                <h2>Search Results</h2>
                <ul>
                    { theResults }
                    { backToArtistSearch }
                </ul>
                <Pagination
                    itemsPerPage={props.searchResults.itemsPerPage}
                    total={props.searchResults.total}
                    changePage={changePage}
                    searchParam={searchParam}
                />
            </section>
        )
    }
    else{
        return null;
    }
}

export default SearchResults