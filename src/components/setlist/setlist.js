import React, {Component} from 'react';


class Setlist extends Component {
    state = {
        setlist: {
            "id": "3bead804",
            "versionId": "537deb99",
            "eventDate": "17-06-2018",
            "lastUpdated": "2018-06-18T04:12:46.000+0000",
            "artist": {
              "mbid": "f7f32d93-0801-45cb-9f5a-e68f640649f4",
              "tmid": 1388669,
              "name": "Cold Cave",
              "sortName": "Cold Cave",
              "disambiguation": "",
              "url": "https://www.setlist.fm/setlists/cold-cave-33d430c1.html"
            },
            "venue": {
              "id": "53d417a5",
              "name": "The Broadberry",
              "city": {
                "id": "4781708",
                "name": "Richmond",
                "state": "Virginia",
                "stateCode": "VA",
                "coords": {
                  "lat": 37.5537575,
                  "long": -77.4602617
                },
                "country": {
                  "code": "US",
                  "name": "United States"
                }
              },
              "url": "https://www.setlist.fm/venue/the-broadberry-richmond-va-usa-53d417a5.html"
            },
            "sets": {
              "set": [
                {
                  "song": [
                    {
                      "name": "My Heart is Immortal"
                    },
                    {
                      "name": "Love Comes Close"
                    },
                    {
                      "name": "Glory"
                    },
                    {
                      "name": "People Are Poison"
                    },
                    {
                      "name": "A Little Death to Laugh"
                    },
                    {
                      "name": "Nothing Is True But You"
                    },
                    {
                      "name": "Heaven Was Full"
                    },
                    {
                      "name": "You & Me & Infinity"
                    },
                    {
                      "name": "Confetti"
                    },
                    {
                      "name": "The Great Pan Is Dead"
                    },
                    {
                      "name": "Villains of the Moon"
                    },
                    {
                      "name": "Rainbow Girls"
                    },
                    {
                      "name": "Heavenly Metals"
                    },
                    {
                      "name": "The Idea of Love"
                    },
                    {
                      "name": "Icons of Summer"
                    }
                  ]
                }
              ]
            },
            "url": "https://www.setlist.fm/setlist/cold-cave/2018/the-broadberry-richmond-va-3bead804.html"
          },
    };
    componentDidMount(){
       /* 
        fetch('https://api.setlist.fm/rest/1.0/setlist/3bead804',{
            headers: {
                'x-api-key': 'KEY GOES HERE'
            },
        }).then( res => res.json())
        .then( data => console.log(data))
        .catch(e =>  console.log(e))
        */
    }
    render(){
        const theSetlist = this.state.setlist.sets.set[0].song.map(song => <li>{song.name}</li>)
        return(
            <div>
                <h2>{this.state.setlist.artist.name} at {this.state.setlist.venue.name} ({this.state.setlist.venue.city.name}, {this.state.setlist.venue.city.state})</h2>
                <ul>
                    {theSetlist}
                </ul>
            </div>
        )
    }
}

export default Setlist;