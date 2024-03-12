import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { ShopContext } from '../context/shop-context';
import './menu.css';

export const MenuCard = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const { addToCart } = useContext(ShopContext);
  const { id, productName, price, productImage, content } = props.data;

  return (
    <>
      <Card className='mt-3 mb-3 menu-card' style={{ transition: 'transform 0.3s ease' }}>
        <Card.Img variant="top" src={productImage} alt='' />
        <Card.Body>
          <Card.Title className='product-name'>{productName}</Card.Title>
          <Card.Text className='content'>{content}</Card.Text>
          <Card.Text className='price'>PRICE: {price}</Card.Text>
          <div className='text-center'>
            <Button style={{ background: "red", border: "none" }} onClick={() => { setModalShow(true); addToCart(id) }}>Add to basket</Button>
          </div>
        </Card.Body>
      </Card>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        productName={productName}
      />
    </>
  )
}

function MyVerticallyCenteredModal(props) {
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
        <h4>{props.productName}</h4>
        <p>
          Thank you for your order! You'll receive a delicious meal from us soon. We appreciate your support
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MenuCard;
