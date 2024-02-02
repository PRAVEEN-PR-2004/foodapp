import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import './AppBar.css';
const AppBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home"><h2 id='heading'><span>I <i class="bi bi-heart-fill"></i> BIRIYANI</span></h2></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
        <Nav >
          <Nav.Link href="#home" className='fw-bold'>Home</Nav.Link>
          <Nav.Link href="#menu" className='fw-bold'>Menu</Nav.Link>
          <Nav.Link href="#musttry" className='fw-bold'>Must try</Nav.Link>
          <Nav.Link href="#contact" className='fw-bold'>Contact us</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default AppBar