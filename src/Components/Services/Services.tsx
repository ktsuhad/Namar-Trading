import { Row } from "react-bootstrap";
// importing images
import foodImg from "../../Assets/images/food_03.jpg";
import buildingImg from "../../Assets/images/building-material_03.jpg";
import importImg from "../../Assets/images/import_03.jpg";
import contractingImg from "../../Assets/images/contract_03.jpg";

// importing icons
import leafIcon from "../../Assets/Icons/leaf.png";
import buildIcon from "../../Assets/Icons/building.png";
import shipIcon from "../../Assets/Icons/ship.png";
import SpannerIcon from "../../Assets/Icons/spanner.png";
import CardComponent from "./CardComponent";

import "./Services.css"; // importing external css file

const Services = () => {
  const Cards = [
    {
      image: foodImg,
      icon: leafIcon,
      title: "Food Stuff Trading",
    },
    {
      image: buildingImg,
      icon: buildIcon,
      title: "Building Material",
    },
    {
      image: importImg,
      icon: shipIcon,
      title: "Import & Export",
    },
    {
      image: contractingImg,
      icon: SpannerIcon,
      title: "General Contracting",
    },
  ];
  return (
    <section id="services">
      <div className="container mt-5 mb-5">
        <Row className="text-center">
          <h1 className="heading">OUR SERVICES</h1>
          <h2 className="sub-heading">
            What We Are Offering To <br /> Customers
          </h2>
        </Row>
        <Row className="d-flex justify-content-center align-items-center gap-3">
          {Cards.map((card, index) => (
            <CardComponent key={index} card={card} />
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Services;
