import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

export class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
    let classType = `${this.props.type}`;
    return (
      <div className={`Pokecard ${classType}`}>
        <div className="Pokecard-title">
          {this.props.name}
        </div>
        <div className="Pokecard-image">
          <img src={imgSrc} alt="pokeimage"></img>
        </div>
        <div className="Pokecard-data">Type: {this.props.type}</div>
        <div className="Pokecard-data">EXP: {this.props.exp}</div>
      </div>
    )
  }
}

export default Pokecard;
