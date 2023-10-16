import { AiOutlineHome } from "react-icons/ai";
import { BsSunFill } from "react-icons/bs";
import { AiFillCloud } from "react-icons/ai";

import axios from "axios";
import { useEffect, useState } from "react";

function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=Baku&units=metric&appid=a97395ee487f66584d85ba8d5c72772e        `;

      try {
        const response = await axios.get(url);
        setWeather(response.data);
      } catch (error) {
        console.error("Xəta baş verdi:", error);
      }
    };

    fetchApi();
  }, []);

  let WeatherIcon;

  if (weather?.weather && weather.weather.length > 0) {
    switch (weather?.weather[0].main) {
      case "Clouds":
        WeatherIcon = <AiFillCloud fontSize={50} color="gray" />;

        break;
      case "Clear":
        WeatherIcon = <BsSunFill fontSize={50} color="yellow" />;
        break;
      default:
        WeatherIcon = null;
    }
  }

  return (
    <div className="mt-11">
      <div
        style={{ height: "189px" }}
        className="mt-5 bg-white p-5 rounded-lg shadow-md"
      >
        <div className="flex items-center">
          <span className="text-sm font-medium">{weather?.name}</span>
          <i className="ml-2 text-xl">
            <AiOutlineHome />
          </i>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <div>
            <span className="text-sm font-medium">
              {weather?.weather[0].main}
            </span>
            <h2 className="text-lg font-bold mt-2">{weather?.main.temp}°C</h2>
            <div className="mt-4">
              <span className="text-sm ">
                Feels Like {weather?.main?.feels_like}°C
              </span>
            </div>
          </div>
          <span>{WeatherIcon}</span>
        </div>
      </div>
    </div>
  );
}

export default Weather;
