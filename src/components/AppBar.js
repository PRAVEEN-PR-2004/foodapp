import React, { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './AppBar.css';
import Cart from './Cart';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ShopContext } from '../context/shop-context';

const AppBar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const { setUsername } = useContext(ShopContext);
  const [customername, setCustomername] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false); // State to track login success

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  const handleLogin = () => {
    // Check if any field is empty
    if (!customername || !address || !phone) {
      alert('Please fill in all fields');
      return;
    }

    // Navigate to the home component after successful login
    setUsername(customername);
    setLoginSuccess(true); // Set login success to true
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary sticky-top">
        <Container>
          <Navbar.Brand href="#home"><h2 id='heading'><span>Al-Thaani Halal</span></h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
            <Nav>
              <Nav.Link href="#home" className='fw-bold'>Home</Nav.Link>
              <Nav.Link href="#menu" className='fw-bold'>Menu</Nav.Link>
              <Nav.Link href="#musttry" className='fw-bold'>Must try</Nav.Link>
              <Nav.Link href="#location" className='fw-bold'>Location</Nav.Link>
              <Nav.Link onClick={handleShowOffcanvas} className='fw-bold'>Login</Nav.Link>
              <Cart />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} placement='end' className="custom-offcanvas">
        <Offcanvas.Header closeButton className="bg-danger text-light">
          <Offcanvas.Title>Login</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="bg-light">
          {/* Your login form or content goes here */}
          <FloatingLabel controlId="floatingTextName" label="Name" className="mb-3">
            <Form.Control type="text" value={customername} placeholder="Name" onChange={(e) => setCustomername(e.target.value)} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Phone" className="mb-3">
            <Form.Control type="text" value={phone} placeholder="1234567890" onChange={(e) => setPhone(e.target.value)} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextPlace" label="Address" className="mb-3">
            <Form.Control type="text" value={address} placeholder="Address" onChange={(e) => setAddress(e.target.value)} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextPlace" label="City" className="mb-3">
            <Form.Control type="text" defaultValue="Thiruthuraipoondi" />
          </FloatingLabel>

          {/* Login button */}
          <Button variant="danger" className="w-100 mt-3" onClick={handleLogin}>Login</Button>

          {/* Login success message */}
          {loginSuccess && <p className="text-success mt-2">Login successful!</p>}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default AppBar;
