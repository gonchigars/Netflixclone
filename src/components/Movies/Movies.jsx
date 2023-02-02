import React, { useState, useEffect } from 'react';
// prettier-ignore
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';

import { useGetMoviesQuery } from '../../services/TMDB';
// eslint-disable-next-line
import { MovieList } from '..';

const Movies = () => {
  const [page, setPage] = useState(1);
  // prettier-ignore
  const { genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory);
  // prettier-ignore
  const { data, error, isFetching } = useGetMoviesQuery({ genreIdOrCategoryName, page });
  if (isFetching) {
    // prettier-ignore
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No matching movies found
          <br />
          Please search for something else.
        </Typography>
      </Box>
    );
  }

  if (error) return 'An error has occured';
  // eslint-disable-next-line
  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
};

export default Movies;
