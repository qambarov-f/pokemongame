import React, { Component } from 'react'
import { PokemonCard } from './PokemonCard'



export class Pokedex extends Component {
  render() {
    // console.log(this.props.data, "props");
    
    return (
      <div className="Pokedex">
      
        {this.props.text ? (
          <h2 className="Pokedex-winner">Winning Player</h2>
        ) : (
          <h2 className="Pokedex-loser">Losing Player</h2>
        )}

        <h4>Total Experience: {this.props.exp} </h4>
        <div className="Pokedex-cards">
          {this.props.data.map((item) => (
            <PokemonCard
              key={`card-pokemon-id-${item.id}`}
              {...item}
              //   id={item.id}
              //   name={item.name}
              //   type={item.type}
              //   exp={item.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}