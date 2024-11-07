import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  articles: [],
  weather: null,
  loading: false,
  error: null,
  language: "en",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action) => {
      state.articles = action.payload;
    },
    setWeather: (state, action) => {
      state.weather = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    toggleWeatherModal: (state) => {
      state.weatherModalOpen = !state.weatherModalOpen;
    },
  },
});

export const {
  setNews,
  setWeather,
  setLoading,
  setError,
  setLanguage,
  toggleWeatherModal,
} = newsSlice.actions;

export const fetchWeather = (lat, lon) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_OPENWEATHERMAP_API_KEY}&units=metric`
    );
    dispatch(setWeather(response.data));
  } catch (error) {
    console.log(error)
    dispatch(setError("Failed to fetch weather data"));
  }
};

export default newsSlice.reducer;


