import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      entry : '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // when there is any new input, then add to the state.
    // event.preventDefault();
    this.setState({entry : event.target.value})
    console.log('current Entry', this.state);

  }

  handleSubmit (event) {
    event.preventDefault();
    // console.log(true);
    this.props.checkForMovie(this.state.entry);
    this.setState({entry: ''});
  }


  render() {
    return (
      <div>
        <form >
          <input className= 'formInput' input='text' placeholder='myBrain Hurts' value={this.state.entry} onChange={(value) => {this.handleChange(value)}}/>
          <button type='button' onClick={this.handleSubmit}>Search For Movie</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;


//onClic