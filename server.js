var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var url = require('url');
var countryData = require('./server-assets/country-creation.js');
var http = require('http');
var oxr = require('open-exchange-rates'),
    fx = require('money');
var request = require('request');
app.use(bodyParser());
app.use(function(req,res,next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
})

oxr.set({ app_id: '100c056c90844cbaaf1cb44aa19dc406' });

app.use(express.static(__dirname + '/public'));

app.get('/tax:name', function(req, res){
  res.setHeader('Content-Type', 'application/json');
    for(var i=0;i<countryData.getCountries().length;i++){
      if(req.query.q === countryData.getCountries()[i][0].name){
        var fxCode = countryData.getCountries()[i][1].rate;
        var preData = countryData.getCountries()[i];
        oxr.latest(function() {
          fx.rates = oxr.rates;
          fx.base = oxr.base;
          var fxRate = fx(1).from('USD').to(fxCode);
          preData[1].currentRate = fxRate;
          res.send(JSON.stringify(preData));
        });
      }
    }
});  

app.get('/hotel:name', function(req, res){
  res.setHeader('Content-Type', 'application/json');
  var hotelUrl = [];
  hotelUrl = req._parsedUrl.href.split('');
  hotelUrl.splice(0,14);
  hotelUrl = hotelUrl.join('');
  request(hotelUrl, function(error,response,body){
    var apiResponse = body;
    res.send(apiResponse);
  });
}); 

app.listen(9100);