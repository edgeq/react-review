import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck_id: '',
      remaining: '',
      card: '',
      imgUrl: '',
      suit: ''
    }
    this.drawCard = this.drawCard.bind(this);
  }

  componentDidMount(){
    //make the connection and store the deckID
    axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/").then(res => {
      this.setState({deck_id: res.data.deck_id, remaining: res.data.remaining})
    });

  }

  componentDidUpdate(prevProps, prevState){
    //make use of last card... maybe this goes in card?
  }

  async drawCard(){
    let deckID = this.state.deck_id
    let response = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/`)
    let data = response.data;
    console.log(data);
    this.setState({imgUrl: data.cards[0].image, card: data.cards[0].value, suit: data.cards[0].suit});
  }

  render() {
    return (
    <div>
      <h1>Deck Goes Here</h1>
      <button onClick={this.drawCard}>Draw Card</button>
      <Card
        deckID={this.state.deck_id}
        imgUrl={this.state.imgUrl}
        value={this.state.card}
        suit={this.state.suit}
        />
    </div>
    )
  }
}

export default Deck;