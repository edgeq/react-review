import React, { Component } from 'react';

class Card extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    return (
      <div>
        {this.props.imgUrl !== ""
        ?
        <div>
          <img
            src={this.props.image}
            alt={this.props.name} />
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
