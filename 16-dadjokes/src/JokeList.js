import React, { Component } from "react";
import Joke from "./Joke";
import "./JokeList.css";

import axios from "axios";
// import uuid from "uuid";

class JokeList extends Component {
  static defaultProps = {
    jokeCount: 5
  };
  constructor(props) {
    super(props);
    this.state = {
      jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
      loading: false
    };
    this.getJokes = this.getJokes.bind(this);
    this.handleVote = this.handleVote.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.seenJokes = new Set(this.state.jokes.map(j => j.joke));
    console.log(this.seenJokes);
  }

  async getJokes() {
    let jokeArr = [];

    while (jokeArr.length < this.props.jokeCount) {
      let jokes = await axios.get("https://icanhazdadjoke.com/", {headers: {Accept: "application/json"}});
      let newJoke = jokes.data;
      console.log(newJoke.joke);
      if (!this.seenJokes.has(newJoke.joke)) {
        jokeArr.push({id: newJoke.id, joke: newJoke.joke, votes: 0})
        this.seenJokes.add(newJoke.joke);
        // console.log(this.seenJokes);
      } else {
        console.log("duplicate found")
        console.log(newJoke);
      }

    }
    this.setState(
      st => ({
        loading: false,
        jokes: [...st.jokes, ...jokeArr]
      }),
      () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
    )
  }
  componentDidMount() {
    if (this.state.jokes.length === 0) {
      this.getJokes()
    }

  }

  handleClick(){
    this.setState({loading: true}, this.getJokes)

  }
  handleVote(id, delta) {
    this.setState(
      st => ({
        jokes: st.jokes.map(j =>
          j.id === id ? { ...j, votes: j.votes + delta } : j
        )
      }),
      () =>
        window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
    );
  }

  render() {
    if(this.state.loading){
      return (
        <div className="JokeList-spinner">
          <i className="far fa-8x fa-laugh fa-spin"></i>
          <h1 className="JokeList-title">Loading...</h1>
        </div>
      )
    }
    let jokes = this.state.jokes.sort((a, b) => b.votes - a.votes);
    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title">
            <span>Dad</span>Jokes
          </h1>
          <img
            src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
            alt="laugh emoji"
          />
          <button className="JokeList-getmore" onClick={this.handleClick}>
            Load More Jokes
          </button>
        </div>

        <div className="JokeList-jokes">
          {jokes.map(j => (
            <Joke
              text={j.joke}
              votes={j.votes}
              key={j.id}
              id={j.id}
              upvote={() => this.handleVote(j.id, 1)}
              downvote={() => this.handleVote(j.id, -1)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default JokeList;
