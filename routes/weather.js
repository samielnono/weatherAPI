var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

/* GET users listing. */
router.get('/', function(req, res, next) {
  (async () => {
    const response = await fetch('http://www.henrikdemant.com/weather/realtime.txt');
    const responseText = await response.text();
    const tempData = responseText.split(' ')

    const data = {
      date: tempData[0],
      time: tempData[1],
      temperature: tempData[2]
    }
  
    console.log(data);
    res.send(data)
  })();
  ;
});

module.exports = router;
