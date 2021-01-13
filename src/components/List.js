import React from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

function List({ list }) {
  return (
    <ListGroup>
      {list.map((item) => (
        <ListGroup.Item key={item.name}>
          <Link to={`/pokemon/${item.name}`}>{item.name}</Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default List;
