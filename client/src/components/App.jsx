import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';

class App extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      movies: [ {'title': 'Mean Girls', 'watched': false},
                 {'title': 'Hackers', 'watched': false},
                 {'title': 'The Grey', 'watched': false},
                 {'title': 'Sunshine', 'watched': false},
                 {'title': 'Ex Machina', 'watched': false}, ],
      filteredState: false,
      filteredMovies: [],
                };
    this.checkForMovie = this.checkForMovie.bind(this);
    this.addAMovie = this.addAMovie.bind(this);
    this.hasStateChanged = false;
    this.watched = this.watched.bind(this);
    this.watchedList = this.watchedList.bind(this);
    this.toWatchList = this.toWatchList.bind(this);
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
    if (movieFound.length === 0) {
      movieFound = [{'title': 'No movies by that name, try another!'}];
    }
    // console.log(movieFound);
    // pass object as an argument and then state will compare
    this.setState({filteredState: true})
    this.setState({filteredMovies: movieFound});

    // Should be set to filtered list.

    // When searching just a few key characters for a movie.
      // look up substring method in javascript.
      // using regex, how to use regex to match a search.
      // https://regexr.com/
  }

  addAMovie (movieTitle) {
    // console.log(movieTitle);
    var stateCopy = this.state.movies;
    // if state has been altered before
      //dont empty the state
      // add the new title to the state
    // otherwise
      // set the state to the new title.

    stateCopy.push({'title': movieTitle, 'watched': false});
    // console.log(stateCopy);
    this.setState({movies: stateCopy});
    // if(this.hasStateChanged) {
    //   stateCopy.push({'title': movieTitle, 'watched': false});
    //   // console.log(stateCopy);
    //   this.setState({movies: stateCopy});
    // } else {
    //   this.hasStateChanged = true;
    //   let newMovie = [{'title': movieTitle,'watched': false}];
    //   this.setState({movies: newMovie});
    // }
  }

  watched (movieObj) {
  // movies object, Create property within objects that can be true or false. Watched : true or false;
  // create a function within app.jsx send that to movielist entry which will be invoked inside the
  // on Click function, which will change that status in the app.js state.
    console.log(movieObj);
    var stateCopy = this.state.movies;
    var index = stateCopy.indexOf(movieObj);
    console.log(index);
    var watchedStatus = this.state.movies[index].watched;
    console.log(watchedStatus);
    if (watchedStatus) {
      // change status for current movie title to false.
      // at that index make it equal to {movieObj.title, watched: false}
      stateCopy[index] = {'title': movieObj.title, 'watched': false};
      this.setState(stateCopy);
    } else {
      // change status to true.
      stateCopy[index] = {'title': movieObj.title, 'watched': true};
      this.setState(stateCopy);

    }
    console.log(stateCopy);
    // this.setState()
  }

  watchedList () {
    this.setState({filteredState: true});
    //Change filtered State to true
    //iterate through the list of movies
     // if movie watched is true
       // add that movie object to a temp array.
    // set the state of filteredMovies to temp array.
    var stateCopy = this.state.movies;
    var tempState = [];
    console.log(stateCopy);
    // _.each(stateCopy, (movie) => {
    stateCopy.forEach(movie => {
      if (movie.watched) {
        tempState.push(movie);
      }
    })
    console.log(tempState);
    this.setState({filteredMovies: tempState});
  }

  toWatchList() {
    this.setState({filteredState: true});

    var stateCopy = this.state.movies;
    var tempState = [];
    stateCopy.forEach(movie => {
      if(!movie.watched) {
        tempState.push(movie);
      }
    })
    this.setState({filteredMovies: tempState});

  }


  // When rendering <movieList> tag, check if filtered state is true, if so then send filteredMovie list over the movies list. ^^
  // Always pass filtered List, to the rendering, and filtered list changes base on what is clicked. So Movies should be all movies.

  render() {
    var button =  <button className='' type = 'button' onClick={this.watchedList}>Watched</button>
    var viewMovieList = !this.state.movies.length ? <div>Movie list is currently empty...</div> : (!this.state.filteredState ? this.state.movies : this.state.filteredMovies);
    return (
      <div>
        <h1 className='header'>Movie List</h1>
          <SearchBar checkForMovie={this.checkForMovie}/>
          <AddMovie style={{marginBottom: '6px'}} addAMovie={this.addAMovie}/>
          {button}
          <button className='' type = 'button' onClick={this.toWatchList}>To Watch</button>
          <button className='' type = 'button' onClick={() => this.setState({filteredState: false})}>Reset</button>
          <MovieList movies = {viewMovieList} watched = {this.watched}/>
      </div>
    )
  }
  // <div>Hello World!</div>
};

export default App;