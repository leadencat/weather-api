//basic elements
var searchBtn = document.getElementById("searchBtn");
var forecastsEl = document.getElementById("forecasts");

var historyArray = loadHistory();

function convertSearch() {
    var input = document.getElementById("input").value.trim();

    fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + input + "&limit=1&appid=b539f961ee018c36b88d3838ba7bcfc2")
        .then((response) => response.json())
        .then(function (data) {
            var lon = data[0].lon;
            var lat = data[0].lat;
            var city = data[0].name;
            getWeatherData(lon, lat, city);
            saveHistory(city);
            updateHistory();
            document.getElementById("input").value = "";
        })
}

function convertHistorySearch(historyBtnInfo) {
    var input = historyBtnInfo.textContent;

    fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + input + "&limit=1&appid=b539f961ee018c36b88d3838ba7bcfc2")
        .then((response) => response.json())
        .then(function (data) {
            var lon = data[0].lon;
            var lat = data[0].lat;
            var city = data[0].name;
            getWeatherData(lon, lat, city);
        })
};

//displaying api results
function displayWeather(weatherData) {
    weatherContainer.innerHTML = '';

    const weatherCard = document.createElement('div');
    weatherCard.className = 'card';

    const weatherCity = document.createElement('h3');
    weatherCity.textContent = weatherData.name;

    const weatherTemp = document.createElement('p');
    weatherTemp.textContent = `Temperature: ${weatherData.main.temp} °C`;

    weatherCard.appendChild(weatherCity);
    weatherCard.appendChild(weatherTemp);

    weatherContainer.appendChild(weatherCard);
}

//local storage and event listener
    searchButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    var input = inputValue.value;
    var inputValue =JSON.parse(localStorage.getItem("location"));

    if (input === "") {
        alert("Please select a location.")

        localStorage.setItem("submitButton", "date");
        renderLastRegistered();
    }
});

//local storage for weather api
localStorage.setItem("inputLocation", city);
localStorage.setItem("inputZipCode", zipCode);

fetchWeatherData(city);

function renderLastRegistered() {
const lastCity = localStorage.getItem("inputLocation");
const lastZipCode = localStorage.getItem("inputZipCode");

if (lastCity) {
    inputLocation.value = lastCity;
}

if (lastZipCode) {
    inputZipCode.value = lastZipCode;
}
}

renderLastRegistered();