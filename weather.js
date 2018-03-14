let updateWidget = function(data) {

  jQuery(".card-text").text("It is currently " + data.main.temp.toFixed(0) + " degrees outside.")
  jQuery(".card-title").text(data.name)
  console.log(data)

  let imgID = data.weather[0].icon
  let iconURL = "http://openweathermap.org/img/w/" + imgID + ".png"
  jQuery("weatherImage").attr("src", iconURL)
  console.log(iconURL)

}


let getWeather = function(event) {
  let latitude = '32.2217';
  let longitude = '-110.9265';
  let apiKey = 'a163cced4be5c8991e18f44ac4292abc';

  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'

  fetch(weatherServiceURL).then(convertToJSON).then(updateWidget).catch(displayError);
}

let fcst = jQuery("#get_forecast")
fcst.on("click", getWeather)

////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANY CODE BEYOND THIS POINT
////////////////////////////////////////////////////////////

let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }
