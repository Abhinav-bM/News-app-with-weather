import axios from "axios";

export const fetchNewsBySearch = async (searchTerm, language, region) => {
  try {
    const response = await axios.get(
      `https://gnews.io/api/v4/search?q=${searchTerm}&lang=${language}&country=${region}&token=${
        import.meta.env.VITE_GNEWS_API_KEY
}`
    );
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news by search term:", error);
    throw error;
  }
};

export const fetchTopHeadlines = async (language, region) => {
  try {
    const response = await axios.get(
      `https://gnews.io/api/v4/top-headlines?lang=${language}&country=${region}&token=${
        import.meta.env.VITE_GNEWS_API_KEY
      }`
    );
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching top headlines:", error);
    throw error;
  }
};


export const fetchWeather =  async (lat, lon) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
        import.meta.env.VITE_OPENWEATHERMAP_API_KEY
      }&units=metric`
    );
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error("Error fetching top headlines:", error);
    throw error;
    // dispatch(setError("Failed to fetch weather data"));
  }
};


