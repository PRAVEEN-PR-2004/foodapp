import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap';

function Banner() {
  return (
    <Container fluid className='mt-3'>
      <Row className='justify-content-center align-item-center'>
        <Col lg={8}>
          <Carousel>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={require('../assets/br.jpg')}
                alt=''
              />
              <Carousel.Caption>
                <h3>BIRYANI</h3>
                <p className='d-none d-sm-block'>
                  Indulge in the irresistible flavors of our authentic biryani, a true delight for your taste buds.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={require('../assets/b.jpg')}
                alt=''
              />
              <Carousel.Caption>
                <h3>sauce</h3>
                <p className='d-none d-sm-block'>
                  Experience richness in every bite with our savory gravies
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={require('../assets/d.jpg')}
                alt=''
              />
              <Carousel.Caption>
                <h3>DESSERTS</h3>
                <p className='d-none d-sm-block'>
                  Satisfy your sweet cravings with our decadent desserts
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <div className='text-center'>
        <h2 className='display-4 mt-3' style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: '#333' }}>BIRIYANI For Every Occasion!</h2>
        
      </div>
    </Container>
  );
}

export default Banner;
