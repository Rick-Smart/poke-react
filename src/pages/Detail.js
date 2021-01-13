import React from "react";

class Detail extends React.Component {
  state = {
    details: {},
  };

  componentDidMount() {
    this.getPokemonDetails();
  }

  getPokemonDetails = () => {
    const { params } = this.props.match;
    fetch("https://pokeapi.co/api/v2/pokemon/" + params.name)
      .then((data) => data.json())
      .then((data) => this.setState({ details: data }));
  };

  render() {
    console.log(this.state);
    return <div>Hey there, I am detail</div>;
  }
}

export default Detail;
