import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
  constructor(props){
    super(props);
    //State for all boxes goes here.
    this.state = {
      boxes: []
    }
    this.create = this.create.bind(this);
  }
  create(newBox){
    //take a snapshot of current boxes and add a new box to it
    this.setState(state => ({
      boxes: [...state.boxes, newBox]
    }));
  }

  remove(id){
    this.setState({
      boxes: this.state.boxes.filter(box => box.id !== id)
    })
    console.log(this.state);
  }
  //This component should render all of the Box components along with the NewBoxForm component
  render() {
    //look at state and create a box for every box in state
    // remember to map() over an array of objects in order to get access to nested objects
    const boxes = this.state.boxes.map(box => (
      <Box
        key={box.id}
        id={box.id}
        width={box.width}
        height={box.height}
        color={box.color}
        removeBox={() => this.remove(box.id)}
      />
    ));
    return (
      <div>
        <h1>Color Box Makey Bit</h1>
        <NewBoxForm createBox={this.create}/>
        {boxes}
      </div>
    )
  }
}

export default BoxList;