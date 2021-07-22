import React, { Component } from 'react';
import Pokedex from './Pokedex';
import './Pokegame.css'

export class Pokegame extends Component {
  static defaultProps = {
		pokemon : [
			{ id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
			{ id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
			{ id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
			{ id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
			{ id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
			{ id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
			{ id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
			{ id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
		]
	};
  handleClick = (e) => {
    e.preventDefault();
    window.location.reload();
  }
  render() {
    let hand1 = [];
    let hand2 = [ ...this.props.pokemon ];
    while (hand1.length < hand2.length) {
      let index = Math.floor(Math.random() * hand2.length);
      let pokemon = hand2.splice(index, 1)[0];
			hand1.push(pokemon);
		}
    let player1 = {player: 1, winner: false, totalExp: 0};
    let player2 = {player: 2, winner: false, totalExp: 0};
    player1.totalExp = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    player2.totalExp = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    if (player1.totalExp > player2.totalExp) {
      player1.winner = true;
    } else {
      player2.winner = true;
    }
    return (
      <div className="Pokegame">
        <button className="Pokegame-button" onClick={this.handleClick}>Play again!!!</button>
        <Pokedex pokemons={hand1} player={player1.player} experience={player1.totalExp} winner={player1.winner}/>
        <Pokedex pokemons={hand2} player={player2.player} experience={player2.totalExp} winner={player2.winner}/>
      </div>
    )
  }
}

export default Pokegame
