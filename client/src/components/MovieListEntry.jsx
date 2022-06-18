import React from 'react';

// var MovieListEntry = ({movie}) => {
//   return (
//     <div>
//   <div>{movie.title}</div>
//   <button className='' type = 'button' onClick={({movie}) => {this.props.watched({movie})}}>Watched</button>
//   </div>
//   )
// }


class MovieListEntry extends React.Component {
  constructor(props) {
    super(props)

    this.state = {};
  }

  render () {
    return (
      <div>
    <div>{this.props.movie.title}</div>
    <button className='' type = 'button' onClick={() => this.props.watched(this.props.movie)}>Watched</button>
    </div>
    )
  }
}


export default MovieListEntry;

// go over


// Two questions:

// How to fix movie input
// Would the way this button is set up create a different status instance of each movie in the list, or would I need to set a key id for each?

// this.props.watched(this.state.status)