import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Orders from './Orders';
import { ShopContext } from '../context/shop-context';
import { PRODUCTS } from './products';
import Modal from 'react-bootstrap/Modal'; // Import Modal component

const Cart = () => {
  const [show, setShow] = useState(false);
  const { cartItems } = useContext(ShopContext);
  const [modalShow, setModalShow] = useState(false);

  // Define your modal component
  function MyVerticallyCenteredModal2(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           ORDER RECEIVED
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Thank you for your order! You'll receive a delicious meal from us soon. We appreciate your support.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
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
            <Button style={{ background: "red", border: "none" }} onClick={() => setModalShow(true)}>BUY</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <MyVerticallyCenteredModal2
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Cart;
