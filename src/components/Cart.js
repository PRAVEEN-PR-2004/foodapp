import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Orders from './Orders';
import { ShopContext } from '../context/shop-context';
import { PRODUCTS } from './products';
import Modal from 'react-bootstrap/Modal';

const Cart = () => {
  const [show, setShow] = useState(false);
  const { cartItems, username } = useContext(ShopContext);
  const [modalShow, setModalShow] = useState(false);
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    PRODUCTS.forEach(product => {
      totalPrice += cartItems[product.id] * product.price;
    });
    return totalPrice;
  };
  const handleBuy = () => {
   const tprice = calculateTotalPrice();
    if (username !== 'you' && tprice !==0) {
      setModalShow(true);
    }
    else
    {
      window.alert('Please login or make a purchase befor buy.');
    }
  };

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
        <p className="text-muted mt-2"><strong>Note:</strong> Cash on delivery only. Total Price: ${calculateTotalPrice().toFixed(2)}<br></br></p>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className='btn btn-danger'>Close</Button>
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
          <h5 className="text-center mt-3">Total Price: ${calculateTotalPrice().toFixed(2)}</h5>
          <div className='text-end mt-3'>
            <Button style={{ background: "red", border: "none" }} onClick={handleBuy} className="w-100">BUY</Button>
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
