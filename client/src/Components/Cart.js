import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import  {useCart}  from './CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart } = useCart();
  console.log("Cart Items:", cart);

  // Function to calculate the total price
  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.prodprice, 0).toFixed(2);
  };

  return (
    <Container>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <Row>
          {cart.map((product, index) => (
            <Col md="3" key={index} className="mb-4">
              <Card>
                <CardBody>
                  <img src={product.prodimage} alt={product.prodname} width="100%" style={{ maxWidth: '200px', maxHeight: '200px' }} />
                  <CardTitle tag="h5" style={{ fontWeight: 'bold' }}>{product.prodname}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted" style={{ fontWeight: 'bold' }}>Price: ${product.prodprice}</CardSubtitle>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      )}
      {cart.length > 0 && (
        <div>
          <h3>Total: ${calculateTotal()}</h3>
          <Link to="/payment">
          <Button color="primary">Proceed to Checkout</Button>
          </Link>
        </div>
      )}
    </Container>
  );
};

export default Cart;
