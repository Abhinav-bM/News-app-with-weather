import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setNews,
  setLoading,
  setWeather,
  setRegion,
  setError,
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

const Home = () => {
  const dispatch = useDispatch();
  const { articles, language, region, loading, error } = useSelector(
    (state) => state.news
  );
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      // FETCHING USER'S GEOLOCATION TO GET WEATHER BASED ON THEIR LOCATION
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetchWeather(latitude, longitude)
          .then((response) => {
            dispatch(setWeather(response)); // SETTING WEATHER DATA TO THE STORE
            dispatch(setRegion(response.sys.country.toLowerCase())); // SETTING REGION DATA TO THE STORE
          })
          .catch((err) => {
            console.error("Error fetching weather :", err);
          });
      });
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(setLoading(true)); // SETTING LOADING STATE TO TRUE
    const fetchNews = searchTerm
      ? fetchNewsBySearch(searchTerm, language, region) // FETCHING NEWS BY SEARCH TERM
      : fetchTopHeadlines(language, region); // FETCHING TOP HEADLINES IF NO SEARCH TERM

    fetchNews
      .then((articles) => {
        dispatch(setNews(articles)); // SETTING NEWS ARTICLES TO THE STORE
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        dispatch(setError("Failed to fetch news articles. Please try again."));
      })
      .finally(() => {
        dispatch(setLoading(false)); // SETTING LOADING STATE TO FALSE AFTER FETCHING NEWS
      });
  }, [searchTerm, language, region, dispatch]);

  return (
    <DefaultLayout>
      <SearchBar onSearch={setSearchTerm} />
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 justify-between">
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          // DISPLAYING ERROR MESSAGE
          <p className="mt-2">No news found! Please try again later.</p>
        ) : (
          articles.map((article, index) => (
            <Link
              to={`/news/${index}`}
              key={index}
              onClick={() =>
                localStorage.setItem("selectedArticle", JSON.stringify(article))
              }
            >
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
