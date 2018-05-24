const express = require('express')
const fs = require('fs-extra')
const path = require('path')
const http = require('http')
const https = require('https')

const app = express();
app.use(express.static('public'))


app.listen('8233', () => {
  console.log('server started')
  console.log('http://localhost:8233')
})


app.get('/', (req, res) => {
  res.send('BAKA');
})
