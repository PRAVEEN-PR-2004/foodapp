import React, { useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import './Mustry.css'

const MustTry = () => {
  const [show, setShow] = useState(false);

  return (
    <section id='musttry' className='my-3'>
      <div className='text-center my-2 py-3'>
        <h2 className='display-5' style={{ color: "red", fontWeight: "bold" }}>
          <i className="bi bi-search-heart"></i>PICK OF THE WEEK!
        </h2>
      </div>
      <Container>
        <Row className='align-items-center'>
          <Col md={7}>
            <div className="image-container">
              <Image
                src={require('../assets/bucket biryani.jpg')}
                fluid={true} alt='' rounded
              />
            </div>
          </Col>
          <Col md={5}>
            <div>
              <h2 className="h1" style={{ fontWeight: "bold" }}>BUCKET BIRYANI</h2>
              <p className='text-muted lead medium-font' style={{ color: "#6c757d" }}>
  Enjoy a feast fit for royalty with our bucket biryani, brimming with fragrant rice and succulent meat, offering a convenient and indulgent dining experience perfect for sharing with loved ones
</p>

            </div>
          </Col>
        </Row>
        <ToastContainer
          className="p-3 position-fixed bottom-0 end-0 "
          position="bottom-end"
          style={{ zIndex: 1 }}
        >
          <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">ADDED</strong>
              <small>just now</small>
            </Toast.Header>
            <Toast.Body>WE RECEIVED YOUR ORDER</Toast.Body>
          </Toast>
        </ToastContainer>
      </Container>
    </section>
  );
}

export default MustTry;
