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

