//api key
const weatherApiKey = 'b15a810c1209f985b7d2e24e97487aab';


const inputLocation = document.getElementById('inputLocation');
const inputCountryCode = document.getElementById('inputZipCode');
const submitButton = document.getElementById('submitButton');

//fetch request for api to get data
function fetchWeatherData(city) {
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`;

    fetch(weatherApiUrl)
    .then(response => response.json())
    .then(data => displayWeather(data))
    .catch(error => console.error('Error fetching weather data:', error));
}

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