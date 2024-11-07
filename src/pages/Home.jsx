import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNews, setLoading, fetchWeather } from "../redux/slices/newsSlice";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import DefaultLayout from "../layouts/DefaultLayout";
import WeatherModal from "../components/WeatherModal";

const Home = () => {
  const dispatch = useDispatch();
  const { articles, language } = useSelector((state) => state.news);
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchNews = async () => {
      dispatch(setLoading(true));

      try {
        if (searchTerm) {
          const response = await axios.get(
            `https://gnews.io/api/v4/search?q=${searchTerm}&lang=${language}&token=${
              import.meta.env.VITE_GNEWS_API_KEY
            }`
          );
          dispatch(setNews(response.data.articles));
        } else {
          const response = await axios.get(
            `https://gnews.io/api/v4/top-headlines?lang=${language}&token=${
              import.meta.env.VITE_GNEWS_API_KEY
            }`
          );
          dispatch(setNews(response.data.articles));
        }
      } catch (error) {
        console.error(error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    // Fetch news on language change
    fetchNews();
  }, [searchTerm, language]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(fetchWeather(latitude, longitude));
        },
        () => {
          // Fallback to a default location (e.g., New Delhi) if location access is denied
          dispatch(fetchWeather(28.6139, 77.209));
        }
      );
    }
  }, [dispatch]);

  return (
    <DefaultLayout>
      <h2 className="text-3xl font-bold mb-4">Recent News</h2>
      <SearchBar onSearch={setSearchTerm} />
      <div className="grid gap-4">
        {articles.map((article, index) => (
          <div key={index} className="p-4 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">{article.title}</h3>
            <p>{article.description}</p>
          </div>
        ))}
      </div>
      <WeatherModal />
    </DefaultLayout>
  );
};

export default Home;
