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
