var Weather = require('./../js/weather.js').weatherModule;

var apiKey = "0a7afe3b0be03a26f34640932e9b921e";


$(document).ready(function(){
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("City is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      console.log(response);
    });
  });
});
