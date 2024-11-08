import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: [],
  weather: null,
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