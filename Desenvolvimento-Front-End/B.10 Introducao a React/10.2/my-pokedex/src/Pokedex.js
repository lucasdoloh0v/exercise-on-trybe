import React from "react"
import Pokemon from "./Pokemon"
import pokemons from "./data"

class Pokedex extends React.Component {
  render() {
    return (
      <section className="pokedex">
       {pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon}/>)}
      </section>
    )
  }
}

export default Pokedex