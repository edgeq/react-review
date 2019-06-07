import React, { Component } from 'react';
import Coin from './Coin';
import { choice } from './helpers';

class CoinFlip extends Component {
  static defaultProps = {
    coins : [
      {side: 'heads', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg'},
      {side: 'tails', imgSrc: 'http://www.pcgscoinfacts.com/UserImages/71009269r.jpg'}
    ]
  }

  constructor(props) {
    super(props);
    this.state = {
      currCoin : 'https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg',
      flips: 0,
      heads: 0,
      tails: 0,
    }
  }

  flipCoin() {
    let newCoin = choice(this.props.coins);
    this.setState((st) =>{
      return {
        currCoin: newCoin.imgSrc,
        flips: st.flips + 1,
        heads: st.heads + (newCoin.side === 'heads' ? 1 : 0),
        tails: st.tails + (newCoin.side === 'tails' ? 1 : 0)
      }
    })
  }

  handleClick = e => {
    this.flipCoin();
  }

  render() {
    return (
      <div className="CoinFlip">
        <Coin
          face={this.state.currCoin}
          heads={this.state.heads}
          tails={this.state.tails}
          flips={this.state.flips}
          />
        <button onClick={this.handleClick}>Flip Coin</button>
      </div>
    )
  }
}

 export default CoinFlip;