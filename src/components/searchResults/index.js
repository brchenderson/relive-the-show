import React, {Component} from 'react';

class SearchResults extends Component {
    state = {
        searchResults: {
            "type": "artists",
            "itemsPerPage": 30,
            "page": 1,
            "total": 2,
            "artist": [{
                    "mbid": "f7f32d93-0801-45cb-9f5a-e68f640649f4",
                    "tmid": 1388669,
                    "name": "Cold Cave",
                    "sortName": "Cold Cave",
                    "disambiguation": "",
                    "url": "https://www.setlist.fm/setlists/cold-cave-33d430c1.html"
                },
                {
                    "mbid": "537cbdb2-ddd1-491c-80f9-fcf15c9a4e48",
                    "name": "Cold Cave & Prurient",
                    "sortName": "Cold Cave & Prurient",
                    "url": "https://www.setlist.fm/setlists/cold-cave-and-prurient-3d5b917.html"
                }
            ]
        }
    }
    render(){
        return(
            <div>
                <h2>Search Results</h2>
                <ul>
                    {this.state.searchResults.artist.map( artist => <li> {artist.name} </li>)}

                </ul>
            </div>
        )
    }
}

export default SearchResults