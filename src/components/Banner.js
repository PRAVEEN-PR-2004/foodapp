import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap';
function Banner() {
  return (
    <Container fluid className='mt-3'>
        <Row  className='justify-content-center align-item-center'>
            <Col lg={8}>
            <Carousel>
      <Carousel.Item>
        <img className='d-block w-100'
        src={require('../assets/br.jpg')}/>
        <Carousel.Caption>
          <h3>HYDERABADI BIRYANI</h3>
          <p className='d-none d-sm-block'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block w-100'
        src={require('../assets/b.jpg')}/>
        <Carousel.Caption>
          <h3>DUM BIRIYANI</h3>
          <p className='d-none d-sm-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block w-100'
        src={require('../assets/d.jpg')}/>
        <Carousel.Caption>
          <h3>AMBUR BIRYANI</h3>
          <p className='d-none d-sm-block'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </Col>
        </Row>
        <div className='text-center'>

        <h2 className='display-5 mt-3'>BIRIYANI For Every Occasion!</h2>
        <p className='lead text-muted'>Lorem Loremlorelknn sanleonfg vsln.ew asdkk i am praveen form thiruthurai poondi</p>
        </div>
    </Container>
  )
}

export default Banner