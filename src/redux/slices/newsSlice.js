import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const initialState = {
  articles: JSON.parse(localStorage.getItem("articles")) || [],
  weather: JSON.parse(localStorage.getItem("weather")) || null,
  loading: false,
  error: null,
  region: "in",
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
      localStorage.setItem("weather", JSON.stringify(action.payload))
      state.weather = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      toast.error(action.payload);
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setRegion: (state, action) => {
      state.region = action.payload;
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
  setRegion,
} = newsSlice.actions;


export default newsSlice.reducer;