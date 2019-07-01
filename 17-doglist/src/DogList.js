import React, { Component } from 'react';

class DogList extends Component {
  constructor(props){
    super(props);
    this.state = {
      doglist: this.props.dogs
    }
  }
  render() {
    // const dogs = this.state.doglist.map(d => (
    //   <div>d.name</div>
    // ));
    return (
      <div>
        <h1>Dogs go here</h1>
        {/* {dogs} */}
      </div>
    );
  }
}

export default DogList;
