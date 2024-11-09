import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setNews,
  setLoading,
  setWeather,
  setRegion,
} from "../redux/slices/newsSlice";
import {
  fetchNewsBySearch,
  fetchTopHeadlines,
  fetchWeather,
} from "../utils/api";
import SearchBar from "../components/SearchBar";
import LoadingSpinner from "../components/LoadingSpinner";
import NewsCard from "../components/NewsCard";
import DefaultLayout from "../layouts/DefaultLayout";
import WeatherModal from "../components/WeatherModal";
import { Link } from "react-router-dom";
// import articles from "../../articles.json";

const Home = () => {
  const dispatch = useDispatch();
  const { articles, language, region, loading } = useSelector((state) => state.news);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetchWeather(latitude, longitude)
          .then((response) => {
            dispatch(setWeather(response));
            dispatch(setRegion(response.sys.country));
          })
          .catch((err) => {
            console.error("Error fetching weather :", err);
          });
      });
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(setLoading(true));
    const fetchNews = searchTerm
      ? fetchNewsBySearch(searchTerm, language, region)
      : fetchTopHeadlines(language, region);

    fetchNews
      .then((articles) => {
        dispatch(setNews(articles));
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  }, [searchTerm, language, region, dispatch]);

  return (
    <DefaultLayout>
      <SearchBar onSearch={setSearchTerm} />
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 justify-between">
        {loading ? (
          <LoadingSpinner />
        ) : (
          articles.map((article, index) => (
            <Link to={`/news/${index}`} key={index}>
              <NewsCard key={index} article={article} />
            </Link>
          ))
        )}
      </div>
      <WeatherModal />
    </DefaultLayout>
  );
};

export default Home;
