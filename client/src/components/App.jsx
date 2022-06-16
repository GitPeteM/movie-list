import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';

class App extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      movies: [ {'title': 'Mean Girls'},
                 {'title': 'Hackers'},
                 {'title': 'The Grey'},
                 {'title': 'Sunshine'},
                 {'title': 'Ex Machina'}, ],
                };
    // ['Mean Girls','Hackers', 'The Grey', 'Sunshine', 'Ex Machina']
    this.checkForMovie = this.checkForMovie.bind(this);
    this.AddMovie = this.AddAMovie.bind(this);
  }

  checkForMovie(searchEntry) {
    // create a copy
    // console.log(searchEntry);
    var stateCopy = this.state.movies;
    // use filter encase of multiples.
    var movieFound = stateCopy.filter((movie) => {
      if (movie.title === searchEntry) {
        return movie;
      }
    })
    // console.log(movieFound);
    // pass object as an argument and then state will compare
    this.setState({movies: movieFound});
    // console.log(this.state);

    // When searching just a few key characters for a movie.
      // look up substring method in javascript.
      // using regex, how to use regex to match a search.
      // https://regexr.com/


    // console.log('event clicked!', searchEntry);
    // //check if searchEntry string is within the this.state.movies[i]
    // var movieIndex = this.state.movies.indexOf(searchEntry);
    // if (movieIndex !== -1) {
    //   // if any of the characters match then re-render the page with just those movies.
    //   // var getMovieClass = document.getElementByClassName("movieslist");
    //   // getMovieClass.remove();
    //   this.setState({movies : [this.state.movies[movieIndex]]});
    // } else {
    //   this.setState({movies : ['No name by that found']});
    // }
    //   // otherwise render MovieList with "no name by that found"
  }

  AddAMovie (movieTitle) {

  }

  render() {
    return (
      <div>
        <h1 className='header'>Movie List</h1>
          <SearchBar checkForMovie={this.checkForMovie}/>
          <AddMovie AddAMovie={this.AddAMovie}/>
          <MovieList movies = {this.state.movies}/>
      </div>
    )
  }
  // <div>Hello World!</div>
};

export default App;