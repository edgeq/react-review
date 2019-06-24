import React, { Component } from "react";
import "./Joke.css";

class Joke extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.getJokes();
    console.log("clicked");
  }

  getColor() {
    let { votes } = this.props;
    let color;
    switch (true) {
      case votes >= 5:
        color = "#4caf50";
        break;
      case votes >= 4:
        color = "#8bc34a";
        break;
      case votes >= 3:
        color = "#cddc39";
        break;
      case votes >= 2:
        color = "#ffeb3b";
        break;
      case votes >= 1:
        color = "#ffc107";
        break;
      case votes >= 0:
        color = "#ff9800";
        break;
      default:
        color = "red";
        break;
    }

    return color;
  }

  getEmoji() {
    let { votes } = this.props;
    let emoji;

    switch(true) {
      case votes >= 5:
        emoji = "em em-rolling_on_the_floor_laughing"
        break;
      case votes >= 4:
        emoji = "em em-laughing"
        break;
      case votes >= 3:
        emoji = "em em-smiley"
        break;
      case votes >= 2:
        emoji = "em em-slightly_smiling_face"
        break;
      case votes >= 1:
        emoji = "em em-neutral_face"
        break;
      case votes >= 0:
        emoji = "em em-confused"
        break;
      case votes <= -1:
        emoji = "em em-angry"
        break;
      default:
        emoji = ""
        break;
    }

    return emoji;
  }

  render() {
    return (
      <div className="Joke">
        <div className="Joke-buttons">
          <i className="fas fa-arrow-up" onClick={this.props.upvote} />
          <span className="Joke-votes" style={{ borderColor: this.getColor() }}>
            {this.props.votes}
          </span>
          <i className="fas fa-arrow-down" onClick={this.props.downvote} />
        </div>
        <div className="Joke-text">{this.props.text}</div>
        <div className="Joke-smiley">
          <i className={this.getEmoji()}></i>
        </div>
      </div>
    );
  }
}

export default Joke;
