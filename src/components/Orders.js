import React, { useContext } from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { ShopContext } from '../context/shop-context';

const Orders = (props) => {
  const { id, productName, price } = props.product;
  const { cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <>
      <ListGroup>
        <ListGroup.Item
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
        <button className="btn btn-dark" onClick={() => removeFromCart(id)}>Remove</button>
      </ListGroup>
    </>
  );
}

export default Orders;
