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
  let data = fs.readFileSync(path.join(__dirname, 'public', 'index.html'), 'utf-8')
  res.send(data);
})

app.get('/endorsement/info', (req, res) => {
  let carId = req.query.cid, allCar = fs.readJsonSync(path.join(__dirname, 'public', 'endorsement.json')), resData = ''
  allCar.forEach(val => {
    if(val.id == carId)
      resData = JSON.stringify(val)
  })
  res.send(resData)
})
/* test only */
