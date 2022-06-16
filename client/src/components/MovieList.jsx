import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

var MovieList = ({movies}) => {
  return (
    <div className='movieslist'>
      {movies.map((movie) =>
        <MovieListEntry movie={movie}/>
      )}
    </div>
  )
}

export default MovieList;