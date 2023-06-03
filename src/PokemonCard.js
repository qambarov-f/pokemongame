import { Component } from 'react'

const POKE_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

export class PokemonCard extends Component {

render(){

        // console.log(this.props, "props");
        
        let imgSrc = `${POKE_API}${this.props.id}.png`;
        
        return (
          <div className="Pokecard">
            <h3 className="Pokecard-title">{this.props.name}</h3>
            <div className="Pokecard-image">
              <img src={imgSrc} alt={this.props.name}></img>
            </div>
            <div className="Pokecard-data">Type: {this.props.type}</div>
            <div className="Pokecard-data">
              EXP: {this.props.base_experience}
            </div>
          </div>
        );
      }
    }

