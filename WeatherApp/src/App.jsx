import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const currentDate = new Date();
  const [city, setCity] = useState('Jamshedpur');
  const [weatherData, setWeatherData] = useState(null);

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const formattedDate = `${months[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  const API_KEY = "c92f8572d480fa31cce5520dc7d16902";

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      console.log(data);
      if (data.cod === 200) {
        setWeatherData(data);
      } else {
        setWeatherData(null);
        alert("City not found");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []); // fetch once at mount

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  const getWeatherIconUrl = (main) => {
    switch (main) {
      case "Clouds":
        return "/thunder.png";
      case "Rain":
        return "/rain_with_cloud.png";
      case "Mist":
        return "/Tornado.png";
      case "Haze":
        return "/sun.png";
      case "Clear":
        return "/clear.png";
      default:
        return "/default.png"; // fallback image
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="container_date">{formattedDate}</h1>
        {weatherData ? (
          <div className="weather_data">
            <h2 className="container_city">{weatherData.name}</h2>
            <img
              className="container_img"
              src={getWeatherIconUrl(weatherData.weather[0].main)}
              width="180px"
              alt="Weather Icon"
            />
            <h2 className="container_degree">{weatherData.main.temp} °C</h2>
            <h2 className="country_per">{weatherData.weather[0].main}</h2>
          </div>
        ) : (
          <p>Loading weather...</p>
        )}
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter City Name"
            className="input"
            onChange={handleInputChange}
          />
          <button type="submit">Get</button>
        </form>
      </div>
    </div>
  );
}

export default App;
