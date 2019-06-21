import React, { Component } from 'react';

class Joke extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.getJokes();
    console.log('clicked')
  }

  render(){
    return(
      <div>JOKE</div>
    )
  }
}

export default Joke;
