var searchBtn = document.querySelector("#search-btn");
var currentForecastEl = document.querySelector("#current-forecast");
var futureForecastEl = document.querySelector("#future-forecast");
var searchResultsEl = document.querySelector("#results");
var imgContainer = document.querySelector("#img-container");
var searchHistory = document.querySelector("#search-history");
// shows current date
var currentDate = moment().format("dddd, MMM Do");
$("#current-date").text(currentDate);
//shows forecast for next 5 days
var forecastDate2 = moment().add(1, "days").format("MMM D");
var forecastDate3 = moment().add(2, "days").format("MMM D");
var forecastDate4 = moment().add(3, "days").format("MMM D");
var forecastDate5 = moment().add(4, "days").format("MMM D");

var userInput = [];

searchBtn.addEventListener("click", function (event) {
    event.preventDefault();

        //value for city searched 
    var searchQuery = document.querySelector("#search-bar").value;
        //alert if nothing searched
    if (!searchQuery) {
    $("#error-msg").addClass("show");
    $("#error-msg").text("FORM LEFT BLANK PLEASE PUT IN YOUR CITY!");
    $("#error-msg").delay(3000).fadeOut();
  } else {
    updateStorage(searchQuery);
    getCityData(searchQuery);
    loadHistoryBtns(searchQuery);
  }
});


//function to update storage

function updateStorage(searchQuery) {
    userInput.push(searchQuery)
    localStorage.setItem("queries", JSON.stringify(userInput));
}

//function to get the city the user searched  


function getCityData(searchQuery) {
    console.log(userInput);

  var cityData =
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
    searchQuery +
    "&limit=1&appid=096c6b1c200b27403244ac76a0e8bd2d";

  fetch(cityData).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        // if nothing comes back, console log
        if (data === "[]") {
          $("#error").textContent = "That didn't work. Try again.";
        } else {
          // if data received, set lat/lon to localstorage
          localStorage.setItem("lat", data[0].lat);
          localStorage.setItem("lon", data[0].lon);
          console.log("City data for: " + data[0].name, data[0].state);
          //when submit is clicked, text will persist
          $("#search-bar").textContent = data[0].name;
          // fetch weather data for city
          getWeatherData(data[0].name, data[0].state);
        }
      });
    }
  });
}

//function to load past searches as buttons

function loadHistoryBtns() {

}