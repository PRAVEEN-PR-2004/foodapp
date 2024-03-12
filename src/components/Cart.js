import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Orders from './Orders';
import { ShopContext } from '../context/shop-context';
import { PRODUCTS } from './products';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const Cart = () => {
  const [show, setShow] = useState(false);
  const { cartItems } = useContext(ShopContext);
  const [showOrder, setShowOrder] = useState(false);

  return (
    <>
      <Button variant="light" onClick={() => setShow(!show)} className="me-2">
        <i className="bi bi-cart4"></i>
      </Button>
      <Offcanvas show={show} onHide={() => setShow(!show)} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart:</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <Orders key={product.id} product={product} count={cartItems[product.id]} /> 
            }
            return null;
          })}
          <div className='text-end mt-3'>
            <Button style={{ background: "red", border: "none" }} onClick={() => setShowOrder(true)}>BUY</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <ToastContainer
        className="p-3 position-fixed bottom-0 end-0"
        position="middle-center" // Corrected position value
        style={{ zIndex: 1 }}
      >
        <Toast onClose={() => setShowOrder(false)} show={showOrder} delay={3000} autohide>
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
    </>
  );
}

export default Cart;
