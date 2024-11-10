import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// INITIAL STATE FOR NEWS SLICE
const initialState = {
  articles: [],
  weather: JSON.parse(localStorage.getItem("weather")) || null,
  loading: false,
  error: null,
  region: "in",
  language: "en",
  weatherModalOpen: false,
};

// CREATING NEWS SLICE WITH REDUCERS
const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    // SETS THE NEWS ARTICLES IN STATE
    setNews: (state, action) => {
      state.articles = action.payload;
    },
    // SETS THE WEATHER DATA IN STATE AND SAVES IT TO LOCAL STORAGE
    setWeather: (state, action) => {
      localStorage.setItem("weather", JSON.stringify(action.payload));
      state.weather = action.payload;
    },
    // SETS THE LOADING STATE
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    // SETS THE ERROR STATE AND DISPLAYS A TOAST NOTIFICATION
    setError: (state, action) => {
      state.error = action.payload;
      toast.error(action.payload);
    },
    // SETS THE LANGUAGE FOR NEWS CONTENT
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    // SETS THE REGION FOR NEWS CONTENT
    setRegion: (state, action) => {
      state.region = action.payload;
    },
    // TOGGLES THE STATE OF WEATHER MODAL
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
