import React, { Component } from 'react';
import './Pokecard.css'

// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const POKE_API = ' https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

//take a number less than 100 and add two 0s in front of it, then slice the number from the last 3 digits and return that new number.
let padToThree = (number) => (number <= 99 ? `00${number}`.slice(-3): number)

class Pokecard extends Component {
  render() {
  // console.log(this.props)
  let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`
   return (
    <div className="Pokecard">
      <h1 className="Pokecard-title">{this.props.name}</h1>
      <div className="Pokecard-image">
        <img src={imgSrc} alt={this.props.name} />
      </div>
      <div className="Pokecard-data">Type: {this.props.type}</div>
      <div className="Pokecard-data">EXP: {this.props.exp}</div>
    </div>
    )
  }
}

export default Pokecard;