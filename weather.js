const apiKey = "aa4df22f66e3c2b44002ce5c8aca0671";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");
const cityName = document.getElementById("city");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");

searchBtn.addEventListener("click", () => {
    const city = cityInput.value;
    fetch(`${apiUrl}${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            cityName.textContent = data.name;
            temperature.textContent = `Temperature: ${Math.round(data.main.temp)}°C`;
            description.textContent = `Weather: ${data.weather[0].description}`;
        });
});
