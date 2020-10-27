import React from "react";
import Contributors from "./Contributors";
import Card from "react-bootstrap/Card";

const Contributor = (props) => {
  return (
    <Card className="contributor mb-3">
      <Card.Body>
        <Card.Title>{props.data.name}</Card.Title>
        <Card.Text>{props.data.bio}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Contributor;
