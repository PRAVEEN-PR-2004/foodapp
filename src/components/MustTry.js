import React, { useState } from 'react'
import { Button, Container, Image } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const MustTry = () => {
    const[show, setShow] = useState(false);
  return (
   <section id='musttry' className='my-3'>
    <div className='text-center my-2 py-3'>
        <h2 className='display-5'  style={{ color: "red" }}><i class="bi bi-search-heart"></i>PICK OF THE WEEK!</h2>
    </div>
    <Container>
        <Row className='align-items-center'>
            <Col md={7}>
                <Image 
                src={require('../assets/br.jpg')}
                fluid={true} alt='pick of the week' rounded></Image>
            </Col>
            <Col md={5}>
                <div>
                    <h2 className="h1">BUCKET BIRYANI</h2>
                    <p className='text-muted lead'>Loremlorelknn remlorelknn LoLoremlo LoLoremlorelknn Lremlorelknn Lorem</p>
                    <Button  style={{ background: "red",border: "none" }}
                    onClick={()=> setShow(true)}>
                        <i class="bi bi-basket-fill"></i>buy now</Button>
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
            <Toast.Body>WE RECEIVE YOUR ORDER</Toast.Body>
          </Toast>
        </ToastContainer>
    </Container>
   </section>
  )
}

export default MustTry