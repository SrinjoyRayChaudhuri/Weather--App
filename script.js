function getWeather() {
    const location = document.getElementById("location").value;
    const apiKey = "62c093db136e463f85451747252703"; // Your API Key
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("city-name").textContent = data.location.name;
            document.getElementById("temperature").textContent = data.current.temp_c;
            document.getElementById("condition").textContent = data.current.condition.text;
            document.getElementById("wind-speed").textContent = data.current.wind_kph;
            document.getElementById("humidity").textContent = data.current.humidity;
            document.getElementById("weather-result").classList.remove("hidden");
        })
        .catch(() => alert("Invalid location or API issue!"));
}
