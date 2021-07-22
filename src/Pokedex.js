import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

export class Pokedex extends Component {
  render() {
    let title = this.props.winner ? <h2 className="Pokedex-winner">Winning Hand</h2> : <h2 className="Pokedex-loser">Losing Hand</h2>;
    return (
      <div className="Pokedex">
        <div className="Pokedex-title">
          Pokedex {this.props.player}: {title}
        </div>
        <div className="Pokedex-exp">
          Total experience: {this.props.experience}
        </div>
        <div className="Pokedex-cards">
					{this.props.pokemons.map((p) => (
						<Pokecard key={p.id} id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
					))}
				</div>
      </div>
    )
  }
}

export default Pokedex;






