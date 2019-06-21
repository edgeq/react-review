import React, { Component } from 'react';
import './JokeList.css';
import axios from 'axios';

class JokeList extends Component {
  static defaultProps = {
    jokeCount: 10
  }
  constructor(props){
    super(props);
    this.state = {jokes: []};
    this.getJokes = this.getJokes.bind(this);
  }

  async getJokes() {
    let jokeArr = [];

    while (jokeArr.length < this.props.jokeCount) {
      let jokes = await axios.get("https://icanhazdadjoke.com/slack");
      let newJoke = jokes.data.attachments[0].text;
      jokeArr.push(newJoke);
      this.setState({jokes: jokeArr})
      console.log(this.state.jokes);
    }
  }
  async componentDidMount(){
    await this.getJokes();
  }

  render() {
  return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title"><span>Dad</span>Jokes</h1>
          <button className="JokeList-getmore" onClick={this.getJokes}>Load More Jokes</button>
        </div>

        <div className="JokeList-jokes">
            {this.state.jokes.map(j => (
        <div>{j}</div>
      ))}
        </div>
      </div>
    )
  }
}

export default JokeList;