module.exports = {
    getWeather
}

const simpleWeather = require("simple-weather");
let resultArray = [];

function getWeather(theCity, callback) {
    simpleWeather()["v2.5"].current.byCityName(theCity, "uk").then(function(response) {
        let x = ("Current Weather of " + theCity.charAt(0).toUpperCase() + theCity.slice(1) + ", UK:");
        let y = ("Description: " + response.weather[0].description);
        let z = ("Temperature: " + (Math.round((parseFloat(response.main.temp) - 273.15) * 100) / 100) + " Celsius");
        let obj = {x,y,z};
        callback(obj);
    }).catch(function(err) {
        console.error(err.stack);
    });
}
