import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Services.css"; // Import the external CSS file

interface CardItem {
  image: string;
  icon: string;
  title: string;
}

interface CardComponentProps {
  card: CardItem;
}

const CardComponent: React.FC<CardComponentProps> = ({ card }) => {
  return (
    <Col md={5} sm={6}>
      <Card style={{ position: "relative" }} className="hoverable">
        <img src={card.image} alt="Card background" />
        <div className="card-overlay">
          <img src={card.icon} alt="Card icon" className="card-icon" />
          <h4 className="mt-2 text-white fs-4 fw-bold">{card.title}</h4>
        </div>
      </Card>
    </Col>
  );
};

export default CardComponent;
