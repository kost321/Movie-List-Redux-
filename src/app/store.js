import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../film/movieList/redux/MovieListSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});
