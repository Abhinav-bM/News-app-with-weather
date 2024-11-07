
import { useDispatch, useSelector } from "react-redux";
import { toggleWeatherModal } from "../redux/slices/newsSlice";

const Header = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.news.weather);

  return (
    <header className="p-4 bg-blue-500 text-white text-center flex justify-between items-center">
      <h1 className="text-2xl">News Application</h1>
      {weather && (
        <div className="flex items-center space-x-4">
          <span>
            {weather.name}: {weather.main.temp}°C, {weather.weather[0].main}
          </span>
          <button
            onClick={() => dispatch(toggleWeatherModal())}
            className="bg-blue-700 text-white p-2 rounded hover:bg-blue-800"
          >
            View Details
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
