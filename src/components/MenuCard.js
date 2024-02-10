import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

export const MenuCard = (props) => {

  const [modalShow, setModalShow] = React.useState(false);
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
          <h4>{productName}</h4>
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
  
  const { productName, price, productImage,content} = props.data;
  return (
    <>
    <Card className='mt-3 mb-3' >
      <Card.Img variant="top" src={productImage} alt=''/>
      <Card.Body>
        <Card.Title>{productName}</Card.Title>
        <Card.Text>
          {content}
          <br></br>
         <p className='text-center bold'>PRICE:{price}</p>
        </Card.Text>
        <div className='text-center'>

          <Button  style={{background : "red",border:"none" }} onClick={() => setModalShow(true)}>Add to basket</Button>
        </div>
      </Card.Body>
    </Card>
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}

export default MenuCard