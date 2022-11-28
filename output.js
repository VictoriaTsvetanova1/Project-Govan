const PORT = 8000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const path = require('path');

const app = express()

app.get('/', (req, res) => {
    res.json('Welcome!')
})

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });