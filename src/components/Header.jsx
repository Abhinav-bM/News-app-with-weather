import { useDispatch, useSelector } from "react-redux";
import { toggleWeatherModal, setLanguage } from "../redux/slices/newsSlice";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  // USE DISPATCH HOOK TO DISPATCH ACTIONS TO THE REDUX STORE
  const dispatch = useDispatch();

  // SELECTING WEATHER AND LANGUAGE STATE FROM REDUX STORE
  const weather = useSelector((state) => state.news.weather);
  const language = useSelector((state) => state.news.language);

  // STATE TO MANAGE MOBILE MENU OPEN/CLOSE
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // HANDLER FUNCTION TO UPDATE LANGUAGE IN REDUX STORE
  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    dispatch(setLanguage(selectedLanguage));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="py-4 text-white flex justify-between items-center mx-6 sm:mx-10 md:mx-12 lg:mx-20 xl:mx-48 border-t border-b border-grey">
      {/* LOGO */}
      <h1 className="text-2xl md:text-4xl text-black font-bold">News24</h1>

      {/* ICON FOR MOBILE MENU */}
      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle menu" className=" text-black">
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* MENU CONTENT */}
      <div
        className={`${
          isMenuOpen ? "block bg-gray-100" : "hidden"
        } absolute top-16 right-4 p-2 rounded-md md:static md:flex md:items-center md:space-x-6 border border-grey`}
      >
        {/* LANGUAGE SELECTOR */}
        <div className="flex items-center mb-4 md:mb-0 ">
          <label htmlFor="language-select" className="text-white hidden md:block">
            
          </label>
          <select
            id="language-select"
            value={language}
            onChange={handleLanguageChange}
            className="bg-white text-black p-1 rounded border border-grey"
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
          </select>
        </div>

        {/* WEATHER */}
        {weather && (
          <div
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => dispatch(toggleWeatherModal())}
          >
            <span className="text-black">
              {weather.name} - {weather.main.temp}°C - {weather.weather[0].main}
            </span>
          </div>
        )}
      </div>
    </header>
    </>
  
  );
};

export default Header;
