import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5 fixed-bottom">
      <Container>
        <Row>
          <Col>
            <p>&copy; 2024 Peak Rentals. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
