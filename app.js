import { api1, api2 } from '/storage.js';
const request = require('request');

apiKey = api1
city = 'Bucharest'
url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to Weather App');
    } else if (response.body.error) {
        console.log(response.body.error);
    } else {
        console.log(response.body)
    }
})

apiKey2 = api2
urlGeo = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + city + '.json?access_token=' + apiKey2
request({ url: urlGeo, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to Weather App');
    } else if (response.body.features.length === 0) {
        console.log('Unable to reach Geo Location');
    } else {
        console.log(response.body)
        var geo = response.body.features[0].center;
        var geo2 = response.body.features[0].bbox;
        console.log('Latitude is ' + geo[0] + ' and longitute is ' + geo[1]);
        console.log(geo2);
        console.log(urlGeo);
    }
})