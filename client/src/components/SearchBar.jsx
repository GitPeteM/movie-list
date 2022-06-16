import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      entry : '',
    };
    this.handleChange.bind(this);
  }

  handleChange(event) {
    // when there is any new input, then add to the state.
    event.preventDefault();
    this.setState({entry : event.target.value})
    console.log('current Entry', this.state);

  }


  render() {
    return (
      <div>
        <form>
          <input className= 'formInput' input='text' placeholder='myBrain Hurts' value={this.state.entry} onChange={(value) => {this.handleChange(value)}}/>
          <button onClick={() => {this.props.checkForMovie(this.state.entry)}} type='button'>Search For Movie</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;