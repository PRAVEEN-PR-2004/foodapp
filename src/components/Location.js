import React from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';


const Location = () => {
  return (
    <section id='location' className='my-3 bg-light'>
       <div className='text-center my-2 py-3'>
        <h2 className='display-5' style={{ color: "red", fontWeight: "bold" }}>
          <i className="bi bi-search-heart"></i>VISIT OUR JOB!
        </h2>
      </div>
      <Container>
        <Row className='align-items-center'>
          <Col md={7}>
            <div className="map-container mb-4">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.551752298686!2d79.63640277451441!3d10.53592736358483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5559577fe11133%3A0xf560770f75b02de9!2sAl-%20Thaani%20-Halal!5e0!3m2!1sen!2sin!4v1710332660933!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
          <Col md={5}>
            <div>
            <h2 className="h1" style={{ fontWeight: "bold" }}>Al-Thaani Halal Restaurant</h2>
              <p className='text-muted lead medium-font' style={{ color: "#6c757d" }}>
                Al-Thaani Halal Restaurant is located in a bustling area of the city, offering a cozy and welcoming atmosphere for diners. Indulge in our authentic flavors of biryani, curated with the finest ingredients and spices. Whether you're a local resident or a traveler exploring the city, our restaurant promises a delightful culinary experience that will leave you craving for more.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Location;
