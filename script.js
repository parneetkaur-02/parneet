async function getWeather() {
    const city = document.getElementById("city-input").value;
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const apiKey = "141efddc541e794028b2206e986ab227";  // Replace with your OpenWeatherMap API Key
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== "200") {
            alert("City not found!");
            return;
        }

        // Extract Weather Data
        document.getElementById("temperature").innerText = `${data.list[0].main.temp}°C`;
        document.getElementById("humidity").innerText = `${data.list[0].main.humidity}%`;
        document.getElementById("wind").innerText = `${data.list[0].wind.speed} km/h`;
        document.getElementById("condition").innerText = data.list[0].weather[0].description;

        // Forecast for different times
        document.getElementById("morning-temp").innerText = `${data.list[1].main.temp}°`;
        document.getElementById("morning-condition").innerText = data.list[1].weather[0].description;

        document.getElementById("afternoon-temp").innerText = `${data.list[3].main.temp}°`;
        document.getElementById("afternoon-condition").innerText = data.list[3].weather[0].description;

        document.getElementById("evening-temp").innerText = `${data.list[5].main.temp}°`;
        document.getElementById("evening-condition").innerText = data.list[5].weather[0].description;

    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}
