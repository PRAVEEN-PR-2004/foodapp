import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MenuCard from "./MenuCard";
import { PRODUCTS } from "./products";

function Menu() {
  return (
    <section id="menu" className="bg-light">
      <Container>
        <div className="text-center">
          <h3 style={{ color: "red" }} className="my-3 py-5">
            Treat Yourself With Our Everyday Menu <i class="bi bi-menu-up"></i>
          </h3>
        </div>
        <Row>
          {PRODUCTS.map((product) => (
            <Col md={6} lg={4}>
              <MenuCard key={product.id} data={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Menu;
