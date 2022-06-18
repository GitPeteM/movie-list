import React from 'react';

class AddMovie extends React.Component {
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
    event.preventDefault();
    this.setState({entry : event.target.value})
    console.log('current Entry', this.state);

  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log(true);
    this.props.addAMovie(this.state.entry);
    this.setState({entry: ''});
  }


  render() {
    return (
      <div>
        <form>
          <input className= 'formInput' input='text' placeholder='Movie Title...' value={this.state.entry} onChange={(value) => {this.handleChange(value)}}/>
          <button className='AddButton' onClick={this.handleSubmit} type='button'>Add A Movie</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;