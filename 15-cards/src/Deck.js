import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';
import './Deck.css'
const API_BASE_URL = "https://deckofcardsapi.com/api/deck"

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {deck: null, drawn:[] };
    this.drawCard = this.drawCard.bind(this);
  }

  async componentDidMount(){
    //make the connection and store the deckID
    let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
    this.setState({deck: deck.data});


  }


  async drawCard(){
    let deckID = this.state.deck.deck_id
    try {
      let cardRes = await axios.get(`${API_BASE_URL}/${deckID}/draw/`);
      let card = cardRes.data.cards[0]
      console.log(cardRes.data);
      if(!cardRes.data.success) {
        throw new Error("No more cards in deck");
      }
      // take eisting state
      this.setState(st => ({
        drawn: [...st.drawn,
          // add card data to the drawn array
        {
          id: card.code,
          image: card.image,
          name: `${card.value} of ${card.suit}`
        }
      ]
      }));

    } catch (error) {
      alert(error);
    }
  }

  render() {
    const cards = this.state.drawn.map(c => (
      <Card key={c.id} name={c.name} image={c.image} />
    ));
    return (
    <div className="Deck">
      <h1 className="Deck-title">React Dealer</h1>
      <h2 className="Deck-title subtitle">Random card generator made with React</h2>
      <button className="Deck-btn" onClick={this.drawCard}>Draw Card</button>
      <div className="Deck-container">{cards}</div>

    </div>
    )
  }
}

export default Deck;