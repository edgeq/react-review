import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';
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
    <div>
      <h1>Deck Goes Here</h1>
      <button onClick={this.drawCard}>Draw Card</button>
      {cards}

    </div>
    )
  }
}

export default Deck;