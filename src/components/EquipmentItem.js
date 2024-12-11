import React from "react";
import { Card } from "react-bootstrap";

const EquipmentItem = ({ equipment }) => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={equipment.imageUrl} />
      <Card.Body>
        <Card.Title>{equipment.name}</Card.Title>
        <Card.Text>Category: {equipment.category}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default EquipmentItem;
