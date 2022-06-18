import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

// var MovieList = ({movies}) => {
//   return (
//     <div className='movieslist'>
//       <button className='' type = 'button'>Watched</button>
//       <button className='' type = 'button'>To Watch</button>
//       {movies.map((movie) =>
//         <MovieListEntry movie={movie}/>
//       )}
//     </div>
//   )
// }

class MovieList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render () {
    return (
      <div className='movieslist'>
        {/* if filter is on run this.props.filteredMovies or this.props.movies */}
      {this.props.movies.map((movie, index) =>
        <MovieListEntry movie={movie} key={index} watched={this.props.watched}/>
      )}
    </div>

    )
  }
}

export default MovieList;