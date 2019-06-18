import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
  constructor(props){
    super(props);
    this.state = {
      boxes: [
        {width: 10, height: 40, color: 'orange'}
      ]
    }
    this.create = this.create.bind(this)
  }
 //look at state and create a box for every box in state
 create(newBox){
   //take a snapshot of current boxes and add a new box to it
   this.setState(state => ({
     boxes: [...state.boxes, newBox]
   }));
 }
  //TODO: Place your state that contains all of the boxes here.
  render() {
    //This component should render all of the Box components along with the NewBoxForm component

    // remember to map() over an array of objects in order to get access to nested objects
    const boxes = this.state.boxes.map(box => (
      <Box
        width={box.width}
        height={box.height}
        color={box.color}
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