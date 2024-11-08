import { useDispatch, useSelector } from "react-redux";
import { toggleWeatherModal, setLanguage } from "../redux/slices/newsSlice";

const Header = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.news.weather);
  const language = useSelector((state) => state.news.language);

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    dispatch(setLanguage(selectedLanguage));
  };

  return (
    <header className=" px-48 py-4 bg-blue-500 text-white flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <label htmlFor="language-select" className="text-white">
          Language:
        </label>
        <select
          id="language-select"
          value={language}
          onChange={handleLanguageChange}
          className="bg-white text-black p-1 rounded"
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>
      </div>

      <h1 className="text-4xl font-bold">News Application</h1>

      {weather && (
        <div
          className="flex items-center space-x-4 cursor-pointer"
          onClick={() => dispatch(toggleWeatherModal())}
        >
          <span>
            {weather.name}: {weather.main.temp}°C, {weather.weather[0].main}
          </span>
        </div>
      )}
    </header>
  );
};

export default Header;
