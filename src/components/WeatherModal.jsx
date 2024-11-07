
import { useDispatch, useSelector } from "react-redux";
import { toggleWeatherModal } from "../redux/slices/newsSlice";

const WeatherModal = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.news.weather);
  const weatherModalOpen = useSelector((state) => state.news.weatherModalOpen);

  if (!weatherModalOpen || !weather) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md w-80 space-y-4 text-center">
        <h2 className="text-xl font-bold">{weather.name} Weather Details</h2>
        <p>Temperature: {weather.main.temp}°C</p>
        <p>Feels Like: {weather.main.feels_like}°C</p>
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Condition: {weather.weather[0].description}</p>
        <button
          onClick={() => dispatch(toggleWeatherModal())}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default WeatherModal;
