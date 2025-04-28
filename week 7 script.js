const apiKey = "YOUR_API_KEY"; // 🔥 Replace with your real API key

document.getElementById('searchButton').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    if (city) {
        fetchWeather(city);
    } else {
        alert('Please enter a city name.');
    }
});

function fetchWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        displayWeather(data);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Could not fetch weather data.');
    });
}

function displayWeather(data) {
    if (data.cod === "404") {
        document.getElementById('weatherResult').innerHTML = "City not found!";
    } else {
        document.getElementById('weatherResult').innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
    }
}
