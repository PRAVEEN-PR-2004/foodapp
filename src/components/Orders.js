import React, { useContext } from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { ShopContext } from '../context/shop-context';
const Orders = (props) => {
  const {id, productName, price } = props.product;
  const { cartItems } = useContext(ShopContext);
  

  return (
    <>
      <ListGroup as="ol" numbered>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{productName}</div>
            PRICE: {price * cartItems[id] }
          </div>
          <Badge bg="danger" pill>
           {cartItems[id]}
          </Badge>
        </ListGroup.Item>
      </ListGroup>
    </>
      
  );
}

export default Orders;
