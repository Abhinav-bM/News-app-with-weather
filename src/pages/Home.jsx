import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNews, setLoading, fetchWeather } from "../redux/slices/newsSlice";
import { fetchNewsBySearch, fetchTopHeadlines } from "../utils/api";
import SearchBar from "../components/SearchBar";
import LoadingSpinner from "../components/LoadingSpinner";
import NewsCard from "../components/NewsCard";
import DefaultLayout from "../layouts/DefaultLayout";
import WeatherModal from "../components/WeatherModal";

const Home = () => {
  const dispatch = useDispatch();
  const { language, region, loading } = useSelector((state) => state.news);
  const [searchTerm, setSearchTerm] = useState("");
  let articles = [
    {
      title:
        "Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders",
      description:
        "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
      content:
        "Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, b... [1419 chars]",
      url: "https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800",
      image:
        "https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg",
      publishedAt: "2022-09-28T08:14:24Z",
      source: {
        name: "PhoneArena",
        url: "https://www.phonearena.com",
      },
    },
    {
      title:
        "Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders",
      description:
        "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
      content:
        "Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, b... [1419 chars]",
      url: "https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800",
      image:
        "https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg",
      publishedAt: "2022-09-28T08:14:24Z",
      source: {
        name: "PhoneArena",
        url: "https://www.phonearena.com",
      },
    },
    {
      title:
        "Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders",
      description:
        "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
      content:
        "Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, b... [1419 chars]",
      url: "https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800",
      image:
        "https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg",
      publishedAt: "2022-09-28T08:14:24Z",
      source: {
        name: "PhoneArena",
        url: "https://www.phonearena.com",
      },
    },
    {
      title:
        "Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders",
      description:
        "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
      content:
        "Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, b... [1419 chars]",
      url: "https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800",
      image:
        "https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg",
      publishedAt: "2022-09-28T08:14:24Z",
      source: {
        name: "PhoneArena",
        url: "https://www.phonearena.com",
      },
    },
    {
      title:
        "Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders",
      description:
        "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
      content:
        "Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, b... [1419 chars]",
      url: "https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800",
      image:
        "https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg",
      publishedAt: "2022-09-28T08:14:24Z",
      source: {
        name: "PhoneArena",
        url: "https://www.phonearena.com",
      },
    },
    {
      title:
        "Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders",
      description:
        "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
      content:
        "Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, b... [1419 chars]",
      url: "https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800",
      image:
        "https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg",
      publishedAt: "2022-09-28T08:14:24Z",
      source: {
        name: "PhoneArena",
        url: "https://www.phonearena.com",
      },
    },
    {
      title:
        "Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders",
      description:
        "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
      content:
        "Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, b... [1419 chars]",
      url: "https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800",
      image:
        "https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg",
      publishedAt: "2022-09-28T08:14:24Z",
      source: {
        name: "PhoneArena",
        url: "https://www.phonearena.com",
      },
    },
    {
      title:
        "Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders",
      description:
        "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
      content:
        "Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, b... [1419 chars]",
      url: "https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800",
      image:
        "https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg",
      publishedAt: "2022-09-28T08:14:24Z",
      source: {
        name: "PhoneArena",
        url: "https://www.phonearena.com",
      },
    },
  ];

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        dispatch(fetchWeather(latitude, longitude));
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
      <h2 className="text-3xl font-bold mb-4">Recent News</h2>
      <SearchBar onSearch={setSearchTerm} />
      <div className="grid gap-4">
        {loading ? (
          <LoadingSpinner />
        ) : (
          articles.map((article, index) => (
            <div key={index} className="p-4 bg-white shadow-lg rounded-lg">
              {/* <h3 className="text-xl font-semibold">{article.title}</h3>
            <p>{article.description}</p> */}
              <NewsCard key={index} article={article} />
            </div>
          ))
        )}
      </div>
      <WeatherModal />
    </DefaultLayout>
  );
};

export default Home;
