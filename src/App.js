import React, { Component } from 'react';
import Setlist from './components/setlist/setlist'
import SearchResults from './components/searchResults'
import SearchForm from './components/searchForm'
import './App.css';

class App extends Component {
  state = {
    searchValue: "",
    searchResults: {},
    allLists: {},
    setlist: {},
  }
  handleInputChange = (e) => {
      this.setState({ searchValue: e.target.value })
  }
  searchbyArtist = (e) => {
      e.preventDefault()
      const searchURL = `https://api.setlist.fm/rest/1.0/search/artists?artistName=${encodeURIComponent(this.state.searchValue)}&p=1&sort=sortName`
      console.log(searchURL)
      const sampleResult = {
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
      this.setState({searchResults: sampleResult})
      /*fetch(searchURL).then(res =>res.json()).then(result => this.setState({searchResults: result})).catch(e => throw(e)) */
  }
  getAllSetlists = (mbid) => {
    const allLists = {
      "type": "setlists",
      "itemsPerPage": 20,
      "page": 1,
      "total": 241,
      "setlist": [
        {
          "id": "bea2936",
          "versionId": "737d5ec1",
          "eventDate": "23-06-2018",
          "lastUpdated": "2018-06-24T08:02:50.000+0000",
          "artist": {
            "mbid": "f7f32d93-0801-45cb-9f5a-e68f640649f4",
            "tmid": 1388669,
            "name": "Cold Cave",
            "sortName": "Cold Cave",
            "disambiguation": "",
            "url": "https://www.setlist.fm/setlists/cold-cave-33d430c1.html"
          },
          "venue": {
            "id": "1bd6215c",
            "name": "Trees",
            "city": {
              "id": "4684888",
              "name": "Dallas",
              "state": "Texas",
              "stateCode": "TX",
              "coords": {
                "lat": 32.7830556,
                "long": -96.8066667
              },
              "country": {
                "code": "US",
                "name": "United States"
              }
            },
            "url": "https://www.setlist.fm/venue/trees-dallas-tx-usa-1bd6215c.html"
          },
          "sets": {
            "set": []
          },
          "url": "https://www.setlist.fm/setlist/cold-cave/2018/trees-dallas-tx-bea2936.html"
        },
        {
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
        {
          "id": "23eae043",
          "versionId": "6b7d8a2e",
          "eventDate": "16-06-2018",
          "lastUpdated": "2018-06-16T21:18:00.000+0000",
          "artist": {
            "mbid": "f7f32d93-0801-45cb-9f5a-e68f640649f4",
            "tmid": 1388669,
            "name": "Cold Cave",
            "sortName": "Cold Cave",
            "disambiguation": "",
            "url": "https://www.setlist.fm/setlists/cold-cave-33d430c1.html"
          },
          "venue": {
            "id": "1bd635f4",
            "name": "Black Cat",
            "city": {
              "id": "4140963",
              "name": "Washington",
              "state": "Washington, D.C.",
              "stateCode": "DC",
              "coords": {
                "lat": 38.895,
                "long": -77.036
              },
              "country": {
                "code": "US",
                "name": "United States"
              }
            },
            "url": "https://www.setlist.fm/venue/black-cat-washington-dc-usa-1bd635f4.html"
          },
          "sets": {
            "set": []
          },
          "url": "https://www.setlist.fm/setlist/cold-cave/2018/black-cat-washington-dc-23eae043.html"
        },
        {
          "id": "1bead178",
          "versionId": "4b7de386",
          "eventDate": "15-06-2018",
          "lastUpdated": "2018-06-18T18:49:04.000+0000",
          "artist": {
            "mbid": "f7f32d93-0801-45cb-9f5a-e68f640649f4",
            "tmid": 1388669,
            "name": "Cold Cave",
            "sortName": "Cold Cave",
            "disambiguation": "",
            "url": "https://www.setlist.fm/setlists/cold-cave-33d430c1.html"
          },
          "venue": {
            "id": "bd7e1be",
            "name": "Union Transfer",
            "city": {
              "id": "4560349",
              "name": "Philadelphia",
              "state": "Pennsylvania",
              "stateCode": "PA",
              "coords": {
                "lat": 39.952335,
                "long": -75.163789
              },
              "country": {
                "code": "US",
                "name": "United States"
              }
            },
            "url": "https://www.setlist.fm/venue/union-transfer-philadelphia-pa-usa-bd7e1be.html"
          },
          "sets": {
            "set": []
          },
          "url": "https://www.setlist.fm/setlist/cold-cave/2018/union-transfer-philadelphia-pa-1bead178.html"
        },
        {
          "id": "73ea3ab9",
          "versionId": "1b7d0110",
          "eventDate": "12-06-2018",
          "lastUpdated": "2018-06-22T12:44:43.000+0000",
          "artist": {
            "mbid": "f7f32d93-0801-45cb-9f5a-e68f640649f4",
            "tmid": 1388669,
            "name": "Cold Cave",
            "sortName": "Cold Cave",
            "disambiguation": "",
            "url": "https://www.setlist.fm/setlists/cold-cave-33d430c1.html"
          },
          "venue": {
            "id": "5bd4439c",
            "name": "Théâtre Fairmount",
            "city": {
              "id": "6077243",
              "name": "Montreal",
              "state": "Quebec",
              "stateCode": "QC",
              "coords": {
                "lat": 45.5088375,
                "long": -73.587809
              },
              "country": {
                "code": "CA",
                "name": "Canada"
              }
            },
            "url": "https://www.setlist.fm/venue/theatre-fairmount-montreal-qc-canada-5bd4439c.html"
          },
          "sets": {
            "set": []
          },
          "url": "https://www.setlist.fm/setlist/cold-cave/2018/theatre-fairmount-montreal-qc-canada-73ea3ab9.html"
        },
        {
          "id": "13ea8dd1",
          "versionId": "437c0367",
          "eventDate": "11-06-2018",
          "lastUpdated": "2018-06-11T11:41:17.000+0000",
          "artist": {
            "mbid": "f7f32d93-0801-45cb-9f5a-e68f640649f4",
            "tmid": 1388669,
            "name": "Cold Cave",
            "sortName": "Cold Cave",
            "disambiguation": "",
            "url": "https://www.setlist.fm/setlists/cold-cave-33d430c1.html"
          },
          "venue": {
            "id": "bd6cdbe",
            "name": "Lee's Palace",
            "city": {
              "id": "6167865",
              "name": "Toronto",
              "state": "Ontario",
              "stateCode": "ON",
              "coords": {
                "lat": 43.700113788,
                "long": -79.416304194
              },
              "country": {
                "code": "CA",
                "name": "Canada"
              }
            },
            "url": "https://www.setlist.fm/venue/lees-palace-toronto-on-canada-bd6cdbe.html"
          },
          "sets": {
            "set": []
          },
          "url": "https://www.setlist.fm/setlist/cold-cave/2018/lees-palace-toronto-on-canada-13ea8dd1.html"
        },
        {
          "id": "73eab299",
          "versionId": "4b7c1fce",
          "eventDate": "09-06-2018",
          "lastUpdated": "2018-06-10T05:36:47.000+0000",
          "artist": {
            "mbid": "f7f32d93-0801-45cb-9f5a-e68f640649f4",
            "tmid": 1388669,
            "name": "Cold Cave",
            "sortName": "Cold Cave",
            "disambiguation": "",
            "url": "https://www.setlist.fm/setlists/cold-cave-33d430c1.html"
          },
          "venue": {
            "id": "43d5c323",
            "name": "El Club",
            "city": {
              "id": "4990729",
              "name": "Detroit",
              "state": "Michigan",
              "stateCode": "MI",
              "coords": {
                "lat": 42.331427,
                "long": -83.0457538
              },
              "country": {
                "code": "US",
                "name": "United States"
              }
            },
            "url": "https://www.setlist.fm/venue/el-club-detroit-mi-usa-43d5c323.html"
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
          "url": "https://www.setlist.fm/setlist/cold-cave/2018/el-club-detroit-mi-73eab299.html"
        },
        {
          "id": "43ea9f6b",
          "versionId": "437c27c3",
          "eventDate": "08-06-2018",
          "lastUpdated": "2018-06-09T21:56:11.000+0000",
          "artist": {
            "mbid": "f7f32d93-0801-45cb-9f5a-e68f640649f4",
            "tmid": 1388669,
            "name": "Cold Cave",
            "sortName": "Cold Cave",
            "disambiguation": "",
            "url": "https://www.setlist.fm/setlists/cold-cave-33d430c1.html"
          },
          "venue": {
            "id": "3bd434fc",
            "name": "Thalia Hall",
            "city": {
              "id": "4887398",
              "name": "Chicago",
              "state": "Illinois",
              "stateCode": "IL",
              "coords": {
                "lat": 41.850033,
                "long": -87.6500523
              },
              "country": {
                "code": "US",
                "name": "United States"
              }
            },
            "url": "https://www.setlist.fm/venue/thalia-hall-chicago-il-usa-3bd434fc.html"
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
                    "name": "Confetti"
                  },
                  {
                    "name": "A Little Death to Laugh"
                  },
                  {
                    "name": "People Are Poison"
                  },
                  {
                    "name": "Heavenly Metals"
                  },
                  {
                    "name": "The Idea of Love"
                  }
                ]
              }
            ]
          },
          "url": "https://www.setlist.fm/setlist/cold-cave/2018/thalia-hall-chicago-il-43ea9f6b.html"
        },
        {
          "id": "23eaa487",
          "versionId": "437c3f77",
          "eventDate": "07-06-2018",
          "lastUpdated": "2018-06-08T16:48:46.000+0000",
          "artist": {
            "mbid": "f7f32d93-0801-45cb-9f5a-e68f640649f4",
            "tmid": 1388669,
            "name": "Cold Cave",
            "sortName": "Cold Cave",
            "disambiguation": "",
            "url": "https://www.setlist.fm/setlists/cold-cave-33d430c1.html"
          },
          "venue": {
            "id": "33d628fd",
            "name": "The Turf Club",
            "city": {
              "id": "5045360",
              "name": "St. Paul",
              "state": "Minnesota",
              "stateCode": "MN",
              "coords": {
                "lat": 44.9444101,
                "long": -93.0932742
              },
              "country": {
                "code": "US",
                "name": "United States"
              }
            },
            "url": "https://www.setlist.fm/venue/the-turf-club-st-paul-mn-usa-33d628fd.html"
          },
          "sets": {
            "set": []
          },
          "url": "https://www.setlist.fm/setlist/cold-cave/2018/the-turf-club-st-paul-mn-23eaa487.html"
        },
        {
          "id": "6be35e96",
          "versionId": "134edd99",
          "eventDate": "03-11-2017",
          "lastUpdated": "2017-11-01T16:28:26.000+0000",
          "artist": {
            "mbid": "f7f32d93-0801-45cb-9f5a-e68f640649f4",
            "tmid": 1388669,
            "name": "Cold Cave",
            "sortName": "Cold Cave",
            "disambiguation": "",
            "url": "https://www.setlist.fm/setlists/cold-cave-33d430c1.html"
          },
          "venue": {
            "id": "43d65bbf",
            "name": "Summit Music Hall",
            "city": {
              "id": "5419384",
              "name": "Denver",
              "state": "Colorado",
              "stateCode": "CO",
              "coords": {
                "lat": 39.7391536,
                "long": -104.9847034
              },
              "country": {
                "code": "US",
                "name": "United States"
              }
            },
            "url": "https://www.setlist.fm/venue/summit-music-hall-denver-co-usa-43d65bbf.html"
          },
          "sets": {
            "set": []
          },
          "url": "https://www.setlist.fm/setlist/cold-cave/2017/summit-music-hall-denver-co-6be35e96.html"
        },
        {
          "id": "2be09866",
          "versionId": "3b4f9018",
          "eventDate": "02-11-2017",
          "lastUpdated": "2017-11-10T15:18:05.000+0000",
          "artist": {
            "mbid": "f7f32d93-0801-45cb-9f5a-e68f640649f4",
            "tmid": 1388669,
            "name": "Cold Cave",
            "sortName": "Cold Cave",
            "disambiguation": "",
            "url": "https://www.setlist.fm/setlists/cold-cave-33d430c1.html"
          },
          "venue": {
            "id": "2bd7bc22",
            "name": "The Complex",
            "city": {
              "id": "5780993",
              "name": "Salt Lake City",
              "state": "Utah",
              "stateCode": "UT",
              "coords": {
                "lat": 40.7607794,
                "long": -111.8910474
              },
              "country": {
                "code": "US",
                "name": "United States"
              }
            },
            "url": "https://www.setlist.fm/venue/the-complex-salt-lake-city-ut-usa-2bd7bc22.html"
          },
          "sets": {
            "set": []
          },
          "url": "https://www.setlist.fm/setlist/cold-cave/2017/the-complex-salt-lake-city-ut-2be09866.html"
        },
        {
          "id": "73e36ea9",
          "versionId": "2b4e84ca",
          "eventDate": "28-10-2017",
          "lastUpdated": "2017-10-30T12:53:59.000+0000",
          "artist": {
            "mbid": "f7f32d93-0801-45cb-9f5a-e68f640649f4",
            "tmid": 1388669,
            "name": "Cold Cave",
            "sortName": "Cold Cave",
            "disambiguation": "",
            "url": "https://www.setlist.fm/setlists/cold-cave-33d430c1.html"
          },
          "venue": {
            "id": "73d5dad1",
            "name": "MacEwan Ballroom",
            "city": {
              "id": "5913490",
              "name": "Calgary",
              "state": "Alberta",
              "stateCode": "AB",
              "coords": {
                "lat": 51.050112282,
                "long": -114.085285152
              },
              "country": {
                "code": "CA",
                "name": "Canada"
              }
            },
            "url": "https://www.setlist.fm/venue/macewan-ballroom-calgary-ab-canada-73d5dad1.html"
          },
          "sets": {
            "set": []
          },
          "url": "https://www.setlist.fm/setlist/cold-cave/2017/macewan-ballroom-calgary-ab-canada-73e36ea9.html"
        },
        {
          "id": "7be30638",
          "versionId": "33415cc5",
          "eventDate": "24-10-2017",
          "lastUpdated": "2017-10-27T02:34:24.000+0000",
          "artist": {
            "mbid": "f7f32d93-0801-45cb-9f5a-e68f640649f4",
            "tmid": 1388669,
            "name": "Cold Cave",
            "sortName": "Cold Cave",
            "disambiguation": "",
            "url": "https://www.setlist.fm/setlists/cold-cave-33d430c1.html"
          },
          "venue": {
            "id": "63d586b7",
            "name": "HiFi Music Hall",
            "city": {
              "id": "5725846",
              "name": "Eugene",
              "state": "Oregon",
              "stateCode": "OR",
              "coords": {
                "lat": 44.0520691,
                "long": -123.0867536
              },
              "country": {
                "code": "US",
                "name": "United States"
              }
            },
            "url": "https://www.setlist.fm/venue/hifi-music-hall-eugene-or-usa-63d586b7.html"
          },
          "sets": {
            "set": []
          },
          "url": "https://www.setlist.fm/setlist/cold-cave/2017/hifi-music-hall-eugene-or-7be30638.html"
        },
        {
          "id": "2be3346a",
          "versionId": "7341fe89",
          "eventDate": "21-10-2017",
          "lastUpdated": "2017-10-19T15:06:58.000+0000",
          "artist": {
            "mbid": "f7f32d93-0801-45cb-9f5a-e68f640649f4",
            "tmid": 1388669,
            "name": "Cold Cave",
            "sortName": "Cold Cave",
            "disambiguation": "",
            "url": "https://www.setlist.fm/setlists/cold-cave-33d430c1.html"
          },
          "venue": {
            "id": "2bd4182e",
            "name": "The Tower Theater",
            "city": {
              "id": "5368361",
              "name": "Los Angeles",
              "state": "California",
              "stateCode": "CA",
              "coords": {
                "lat": 34.052,
                "long": -118.244
              },
              "country": {
                "code": "US",
                "name": "United States"
              }
            },
            "url": "https://www.setlist.fm/venue/the-tower-theater-los-angeles-ca-usa-2bd4182e.html"
          },
          "sets": {
            "set": []
          },
          "url": "https://www.setlist.fm/setlist/cold-cave/2017/the-tower-theater-los-angeles-ca-2be3346a.html"
        },
        {
          "id": "6be32a4e",
          "versionId": "637cb233",
          "eventDate": "19-10-2017",
          "lastUpdated": "2018-06-03T18:58:44.000+0000",
          "artist": {
            "mbid": "f7f32d93-0801-45cb-9f5a-e68f640649f4",
            "tmid": 1388669,
            "name": "Cold Cave",
            "sortName": "Cold Cave",
            "disambiguation": "",
            "url": "https://www.setlist.fm/setlists/cold-cave-33d430c1.html"
          },
          "venue": {
            "id": "3d23db7",
            "name": "The Fillmore",
            "city": {
              "id": "5391959",
              "name": "San Francisco",
              "state": "California",
              "stateCode": "CA",
              "coords": {
                "lat": 37.775,
                "long": -122.419
              },
              "country": {
                "code": "US",
                "name": "United States"
              }
            },
            "url": "https://www.setlist.fm/venue/the-fillmore-san-francisco-ca-usa-3d23db7.html"
          },
          "sets": {
            "set": []
          },
          "url": "https://www.setlist.fm/setlist/cold-cave/2017/the-fillmore-san-francisco-ca-6be32a4e.html"
        },
        {
          "id": "3e3cd07",
          "versionId": "5b4047c8",
          "eventDate": "15-10-2017",
          "lastUpdated": "2017-10-15T23:07:54.000+0000",
          "artist": {
            "mbid": "f7f32d93-0801-45cb-9f5a-e68f640649f4",
            "tmid": 1388669,
            "name": "Cold Cave",
            "sortName": "Cold Cave",
            "disambiguation": "",
            "url": "https://www.setlist.fm/setlists/cold-cave-33d430c1.html"
          },
          "venue": {
            "id": "43d67b6b",
            "name": "Theaterfabrik",
            "city": {
              "id": "2867714",
              "name": "Munich",
              "state": "Bavaria",
              "stateCode": "02",
              "coords": {
                "lat": 48.1374325498109,
                "long": 11.5754914283752
              },
              "country": {
                "code": "DE",
                "name": "Germany"
              }
            },
            "url": "https://www.setlist.fm/venue/theaterfabrik-munich-germany-43d67b6b.html"
          },
          "sets": {
            "set": []
          },
          "url": "https://www.setlist.fm/setlist/cold-cave/2017/theaterfabrik-munich-germany-3e3cd07.html"
        },
        {
          "id": "1be3d5f8",
          "versionId": "2b405c16",
          "eventDate": "14-10-2017",
          "lastUpdated": "2017-10-14T18:57:32.000+0000",
          "artist": {
            "mbid": "f7f32d93-0801-45cb-9f5a-e68f640649f4",
            "tmid": 1388669,
            "name": "Cold Cave",
            "sortName": "Cold Cave",
            "disambiguation": "",
            "url": "https://www.setlist.fm/setlists/cold-cave-33d430c1.html"
          },
          "venue": {
            "id": "53d6dbb1",
            "name": "Ottakringer Brauerei",
            "city": {
              "id": "2761369",
              "name": "Vienna",
              "state": "Vienna",
              "stateCode": "09",
              "coords": {
                "lat": 48.2084877601653,
                "long": 16.3720750808716
              },
              "country": {
                "code": "AT",
                "name": "Austria"
              }
            },
            "url": "https://www.setlist.fm/venue/ottakringer-brauerei-vienna-austria-53d6dbb1.html"
          },
          "sets": {
            "set": []
          },
          "url": "https://www.setlist.fm/setlist/cold-cave/2017/ottakringer-brauerei-vienna-austria-1be3d5f8.html"
        },
        {
          "id": "6be3deea",
          "versionId": "33406cb1",
          "eventDate": "13-10-2017",
          "lastUpdated": "2017-10-13T21:34:55.000+0000",
          "artist": {
            "mbid": "f7f32d93-0801-45cb-9f5a-e68f640649f4",
            "tmid": 1388669,
            "name": "Cold Cave",
            "sortName": "Cold Cave",
            "disambiguation": "",
            "url": "https://www.setlist.fm/setlists/cold-cave-33d430c1.html"
          },
          "venue": {
            "id": "4bd61f0e",
            "name": "Lucerna Music Bar",
            "city": {
              "id": "3067696",
              "name": "Prague",
              "state": "Hlavní Mesto Praha",
              "stateCode": "52",
              "coords": {
                "lat": 50.0878367932108,
                "long": 14.4241322001241
              },
              "country": {
                "code": "CZ",
                "name": "Czech Republic"
              }
            },
            "url": "https://www.setlist.fm/venue/lucerna-music-bar-prague-czech-republic-4bd61f0e.html"
          },
          "sets": {
            "set": []
          },
          "url": "https://www.setlist.fm/setlist/cold-cave/2017/lucerna-music-bar-prague-czech-republic-6be3deea.html"
        },
        {
          "id": "33e3e02d",
          "versionId": "33407cb9",
          "eventDate": "12-10-2017",
          "lastUpdated": "2017-10-12T23:42:52.000+0000",
          "artist": {
            "mbid": "f7f32d93-0801-45cb-9f5a-e68f640649f4",
            "tmid": 1388669,
            "name": "Cold Cave",
            "sortName": "Cold Cave",
            "disambiguation": "",
            "url": "https://www.setlist.fm/setlists/cold-cave-33d430c1.html"
          },
          "venue": {
            "id": "73d63225",
            "name": "Astra",
            "city": {
              "id": "2950159",
              "name": "Berlin",
              "state": "Berlin",
              "stateCode": "16",
              "coords": {
                "lat": 52.5166667,
                "long": 13.4
              },
              "country": {
                "code": "DE",
                "name": "Germany"
              }
            },
            "url": "https://www.setlist.fm/venue/astra-berlin-germany-73d63225.html"
          },
          "sets": {
            "set": []
          },
          "url": "https://www.setlist.fm/setlist/cold-cave/2017/astra-berlin-germany-33e3e02d.html"
        },
        {
          "id": "1be3fdc8",
          "versionId": "1b402194",
          "eventDate": "10-10-2017",
          "lastUpdated": "2017-10-10T22:44:27.000+0000",
          "artist": {
            "mbid": "f7f32d93-0801-45cb-9f5a-e68f640649f4",
            "tmid": 1388669,
            "name": "Cold Cave",
            "sortName": "Cold Cave",
            "disambiguation": "",
            "url": "https://www.setlist.fm/setlists/cold-cave-33d430c1.html"
          },
          "venue": {
            "id": "33d6344d",
            "name": "Tavastia",
            "city": {
              "id": "658225",
              "name": "Helsinki",
              "state": "Southern Finland",
              "stateCode": "13",
              "coords": {
                "lat": 60.1755556,
                "long": 24.9341667
              },
              "country": {
                "code": "FI",
                "name": "Finland"
              }
            },
            "url": "https://www.setlist.fm/venue/tavastia-helsinki-finland-33d6344d.html"
          },
          "sets": {
            "set": [
              {
                "song": [
                  {
                    "name": "Love Comes Close"
                  },
                  {
                    "name": "Youth and Lust"
                  },
                  {
                    "name": "People Are Poison"
                  },
                  {
                    "name": "Glory"
                  },
                  {
                    "name": "Oceans With No End"
                  },
                  {
                    "name": "Nothing Is True But You"
                  },
                  {
                    "name": "The Great Pan Is Dead"
                  },
                  {
                    "name": "Villains of the Moon"
                  }
                ]
              }
            ]
          },
          "url": "https://www.setlist.fm/setlist/cold-cave/2017/tavastia-helsinki-finland-1be3fdc8.html"
        }
      ]
    }
    this.setState({allLists: allLists})
  }
  loadSetlist = (setlistID) => {
    const theSetlist = {
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
    }
    console.log(theSetlist)
    this.setState({setlist: theSetlist})
  }
  render() {
    return (
      <div className="App">
        <h1>Relive the show!</h1>
        <p>Find shows you've been to on setlist.fm (you won't need an account!) and put together a Spotify playlist of that night's set with a bias toward live tracks.</p>
        <SearchForm
          searchValue={this.state.searchValue}
          searchbyArtist={this.searchbyArtist}
          handleInputChange={this.handleInputChange}></SearchForm>
        <SearchResults
          searchResults = {this.state.searchResults}
          clickResult = {this.getAllSetlists}
        ></SearchResults>
        <SearchResults
          searchResults = {this.state.allLists}
          clickResult = {this.loadSetlist}
        ></SearchResults>
        <Setlist
          setlist={this.state.setlist}
        ></Setlist>
      </div>
    );
  }
}

export default App;
