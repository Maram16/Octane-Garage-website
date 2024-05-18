import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';
import { useCart } from './CartContext';

const PaymentPage = () => {
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const { cart } = useCart(); // Fetch the cart from context

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.prodprice, 0).toFixed(2);
  };

  const handleCardHolderChange = (e) => {
    setCardHolder(e.target.value);
  };

  const handleCardNumberChange = (e) => {
    const input = e.target.value.replace(/\D/g, '').slice(0, 16); // Allow only digits, limit to 16 characters
    setCardNumber(input);
  };

  const handleExpiryChange = (e) => {
    const input = e.target.value.replace(/\D/g, '').slice(0, 4); // Allow only digits, limit to 4 characters
    const month = input.slice(0, 2);
    const year = input.slice(2, 4);
    setExpiry(month + (year.length === 2 ? '/' : '') + year);
  };

  const handleCvvChange = (e) => {
    const input = e.target.value.replace(/\D/g, '').slice(0, 3); // Allow only digits, limit to 3 characters
    setCvv(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your payment processing logic here
  };

  return (
    <Container className="py-5">
      <Row>
        {/* Left Side: Cart Items */}
        <Col md={6}>
          <h1>Selected Products</h1>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <Row>
              {cart.map((product, index) => (
                   <Col md="7" key={index} className="mb-4">
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
        </Col>

        {/* Right Side: Payment Form */}
        <Col md={6}>
          <Card className="border-gray shadow" style={{ minHeight: '600px', marginTop: '112px' }}>
            <CardBody className="d-flex flex-column justify-content-between">
              <div>
                <h2 className="mb-4">Payment Details</h2>
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label for="cardHolder">Card Holder Name</Label>
                    <Input
                      type="text"
                      id="cardHolder"
                      value={cardHolder}
                      onChange={handleCardHolderChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="cardNumber">Card Number</Label>
                    <Input
                      type="text"
                      id="cardNumber"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                      placeholder="**** **** **** ****"
                      maxLength="16"
                      minLength="16"
                      required
                    />
                  </FormGroup>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label for="expiry">Expiry Date</Label>
                        <Input
                          type="text"
                          id="expiry"
                          value={expiry}
                          onChange={handleExpiryChange}
                          placeholder="MM/YY"
                          maxLength="5"
                          minLength="5"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Label for="cvv">CVV</Label>
                        <Input
                          type="text"
                          id="cvv"
                          value={cvv}
                          onChange={handleCvvChange}
                          placeholder="***"
                          maxLength="3"
                          minLength="3"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Button type="submit" color="primary" className="mt-4">Submit Payment</Button>
                </Form>
              </div>
              <div>
                <p style={{ fontWeight: 'bold', textAlign: 'left', marginBottom: '0' }}>Total Amount:</p>
                <h3>Total: ${calculateTotal()}</h3>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentPage;
