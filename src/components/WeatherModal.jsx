import { useDispatch, useSelector } from "react-redux";
import { toggleWeatherModal } from "../redux/slices/newsSlice";
import { format } from "date-fns";

const WeatherModal = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.news.weather);
  const weatherModalOpen = useSelector((state) => state.news.weatherModalOpen);

  if (!weatherModalOpen || !weather) return null;

  const currentDate = format(new Date(), "EEEE dd MMM yyyy");

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="flex flex-col bg-white rounded p-4 w-full max-w-xs">
        <div className="font-bold text-xl text-center">{weather.name}</div>
        <div className="text-sm text-gray-500 text-center">{currentDate}</div>
        <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
          <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
          </svg>
        </div>
        <div className="flex flex-row items-center justify-center mt-6">
          <div className="font-medium text-6xl">{Math.round(weather.main.temp)}°</div>
          <div className="flex flex-col items-center ml-6">
            <div className="text-lg">{weather.weather[0].description}</div>
            <div className="mt-1">
              <span className="text-sm"><i className="fas fa-long-arrow-alt-up"></i></span>
              <span className="text-sm font-light text-gray-500">{Math.round(weather.main.temp_max)}°C</span>
            </div>
            <div>
              <span className="text-sm"><i className="fas fa-long-arrow-alt-down"></i></span>
              <span className="text-sm font-light text-gray-500">{Math.round(weather.main.temp_min)}°C</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between mt-6">
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Wind</div>
            <div className="text-sm text-gray-500">{weather.wind.speed} km/h</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Humidity</div>
            <div className="text-sm text-gray-500">{weather.main.humidity}%</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Visibility</div>
            <div className="text-sm text-gray-500">{weather.visibility / 1000} km</div>
          </div>
        </div>
        <button
          onClick={() => dispatch(toggleWeatherModal())}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default WeatherModal;
