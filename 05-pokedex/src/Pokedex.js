import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css'

class Pokedex extends Component {

  render() {
    let winState;

    if(this.props.isWinner) {
      winState = <h1 className="Pokedex-win">Winning Hand</h1>
    } else {
      winState = <h1 className="Pokedex-lose">Losing Hand</h1>

    }
    return (
      <div className="Pokedex">
        <h4>Total experience: {this.props.exp}</h4>
        {winState}
        <div className="Pokedex-cards">

        {this.props.pokemon.map((p, i) => (
          <Pokecard key={i}
          id={p.id}
          name={p.name}
          type={p.type}
          exp={p.base_experience}
          />
          ))}
          </div>
      </div>
    )
  }
}

export default Pokedex;