import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Orders from './Orders';

const Cart = () => {
    const [show, setShow] = useState(false);

  return (
   <>
   <Button variant="light" onClick={()=> setShow(!show) } className="me-2">
   <i class="bi bi-cart4"></i>
      </Button>
      <Offcanvas show={show} onHide={()=> setShow(!show)} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart:</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Orders/>
          <div className='text-end mt-3'>
           <Button  style={{ background: "red", border:"none" }} >BUY</Button>
          </div>

        </Offcanvas.Body>
      </Offcanvas>
   </>
  )
}

export default Cart