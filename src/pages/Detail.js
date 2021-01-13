import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
    const { details } = this.state;
    console.log(details);
    return (
      <div className="text-center">
        <Card style={{ width: "18rem" }} className="text-center">
          <Card.Img variant="top" src={details.sprites?.front_default} />
          <Card.Body>
            <Card.Title>{details.name}</Card.Title>
            <Card.Text>Weight: {details.weight}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Detail;
