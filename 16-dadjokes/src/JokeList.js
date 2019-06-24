import React, { Component } from 'react';
import Joke from './Joke';
import './JokeList.css';

import axios from 'axios';
import uuid from 'uuid';

class JokeList extends Component {
  static defaultProps = {
    jokeCount: 10
  }
  constructor(props){
    super(props);
    this.state = {jokes: []};
    this.getJokes = this.getJokes.bind(this);
    this.handleVote = this.handleVote.bind(this);
  }

  async getJokes() {
    let jokeArr = [];

    while (jokeArr.length < this.props.jokeCount) {
      let jokes = await axios.get("https://icanhazdadjoke.com/slack");
      let newJoke = jokes.data.attachments[0].text;
      jokeArr.push({text: newJoke, votes: 0, id: uuid()});
      this.setState({jokes: jokeArr})
      // console.log(this.state.jokes);
    }
  }
  async componentDidMount(){
    await this.getJokes();
  }

  handleVote(id, delta) {
    this.setState(st => ({
      jokes: st.jokes.map(j => 
        j.id === id ? {...j, votes: j.votes + delta} : j)
    }))
  }

  render() {
  return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title">
            <span>Dad</span>Jokes
            <i className="fab fa-accessible-icon"></i>
          </h1>
          <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" alt="laugh emoji"/>
          <button className="JokeList-getmore" onClick={this.getJokes}>Load More Jokes</button>
        </div>

        <div className="JokeList-jokes">
            {this.state.jokes.map(j => (
        <Joke 
          text={j.text} 
          votes={j.votes} 
          key={j.id} 
          id={j.id} 
          upvote={() => this.handleVote(j.id, 1)}
          downvote={() => this.handleVote(j.id, -1)}
          
          />
      ))}
        </div>
      </div>
    )
  }
}

export default JokeList;