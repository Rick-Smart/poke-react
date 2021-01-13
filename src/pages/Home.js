import React from "react";
import List from "../components/List";

class Home extends React.Component {
  state = {
    pokemon: [],
  };

  componentDidMount() {
    this.getAllPokemon();
  }

  getAllPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=200")
      .then((data) => data.json())
      .then((data) => this.setState({ pokemon: data.results }));
  };

  render() {
    console.log(this.state);
    return (
      <div className="Home">
        <List list={this.state.pokemon} />
      </div>
    );
  }
}

export default Home;
