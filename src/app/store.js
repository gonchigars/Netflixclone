import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { tmdbApi } from '../services/TMDB';
import genreOrCategoryReducer from '../features/currentGenreOrCategory';

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,
  },
  // prettier-ignore
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware),
});
