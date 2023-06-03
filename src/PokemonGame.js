import { Component } from 'react'
import { Pokedex } from "./Pokedox";
import "./Pokedex.css";

import PokemonData from "./constant/Pokemons/pokemons.json";

export class PokemonGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonData: PokemonData.pokemon,
      team1: [],
      team2: [],
    };

    this.startGame = this.startGame.bind(this);
  }

  startGame() {
    let data = this.state.pokemonData;
    let randomTeam1 = [];
    let randomTeam2 = [...data];

    console.log(randomTeam1, "random team1");
    console.log(randomTeam2, "random team2");

    while (randomTeam1.length < randomTeam2.length) {
      let randomNum = Math.floor(Math.random() * randomTeam2.length);

      let randomDeletePlayer = randomTeam2.splice(randomNum, 1)[0];
      randomTeam1 = [...randomTeam1, randomDeletePlayer];
    }
    this.setState({ team1: randomTeam1, team2: randomTeam2 });
  }

  render() {
    //     let pokeData = [...this.state.pokemonData];
    // console.log(pokeData, "pokeData");
    let teamPoint1 = this.state.team1.reduce(
      (exp, pokemonData) => exp + pokemonData.base_experience,
      0
    );

    let teamPoint2 = this.state.team2.reduce(
      (exp, pokemonData) => exp + pokemonData.base_experience,
      0
    );

    return (
      <>
        <button className="pokeBtn" onClick={() => this.startGame()}>
          Fight
        </button>
        <Pokedex
          data={this.state.team1}
          exp={teamPoint1}
          text={teamPoint1 > teamPoint2}
        />
        <Pokedex
          data={this.state.team2}
          exp={teamPoint2}
          text={teamPoint1 < teamPoint2}
        />
      </>
    );
  }
}