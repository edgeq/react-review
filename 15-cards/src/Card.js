import React, { Component } from 'react';

class Card extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }
  render() {
    return (
      <div>
        {this.props.imgUrl !== "" 
        ? 
        <div>
          <img src={this.props.imgUrl}  alt={`${this.props.value} of ${this.props.suit}`} />
        </div> 
        :
        <div>
          <h2>click button to draw card</h2>
        </div>
      
      }

      </div>
    );
  }
}

export default Card;
