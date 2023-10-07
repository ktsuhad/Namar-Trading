import { Container, Row, Col } from "react-bootstrap";
import AboutUsImg from "../../Assets/images/about-us_03.jpg"; //about image
import "./AboutUs.css"; // importing external css file

const AboutUs = () => {
  return (
    <section id="AboutUs" className="py-5">
      <Container>
        <Row className="d-flex align-items-stretch">
          <Col lg={6} md={6}>
            <div className="image-div">
              <img src={AboutUsImg} alt="About Us" className="img-fluid" />
              <div className="layer2"></div>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div>
              <span className="heading">ABOUT US</span>
              <h2 className="sub-heading">We Work with You</h2>
              <p className="about-text">
                Namar Al Ghubairaa Trading was established in 2011 as a Food
                Stuff Trading company. Our continuous efforts and business
                expansion have led us into Food Stuff Trading, Building
                Materials, and General Trading based in the Sultanate of Oman.
                We import goods from around the world and neighboring GCC
                countries.
              </p>
              <button className="btn-style">View More</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
