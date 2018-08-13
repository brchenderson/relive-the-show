const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const config = require('./config')

const app = express();

const whitelist = ['http://localhost:3000'];
var corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  }
  

app.get('/',(req,res) => res.send('Hello World!'))

app.get('/search/:searchterm/:page', cors(corsOptions), (req,res) => {
    const searchURL = `https://api.setlist.fm/rest/1.0/search/artists?artistName=${encodeURIComponent(req.params.searchterm)}&p=${req.params.page}&sort=sortName`
    fetch(searchURL,{
        headers: {
            'Accept': 'application/json',
            'x-api-key': config.apikey
        },
    }).then( res => res.json()).then( results => res.send(results)).catch((e) => res.send(e));

})

app.get('/getlists/:mbid/:page', cors(corsOptions), (req,res) => {
    const searchURL = `https://api.setlist.fm/rest/1.0/artist/${encodeURIComponent(req.params.mbid)}/setlists?p=${req.params.page}`
    fetch(searchURL,{
        headers: {
            'Accept': 'application/json',
            'x-api-key': config.apikey
        },
    }).then( res => res.json()).then( results => res.send(results)).catch((e) => res.send(e));

})

app.get('/getlist/:setlist', cors(corsOptions), (req,res) => {
    const searchURL = `https://api.setlist.fm/rest/1.0/setlist/${encodeURIComponent(req.params.setlist)}`
    fetch(searchURL,{
        headers: {
            'Accept': 'application/json',
            'x-api-key': config.apikey
        },
    }).then( res => res.json()).then( results => res.send(results)).catch((e) => res.send(e));

})

app.listen(8888, () => console.log('RTS Server running on 8888.'))