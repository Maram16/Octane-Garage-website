import React, { useState, useEffect } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, CardGroup, Container, Row, Col, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { MdOutlineStar, MdOutlineStarHalf, MdOutlineStarBorder } from "react-icons/md";
import axios from 'axios';
import { IoCartOutline } from "react-icons/io5";
import { useCart } from './CartContext'; // Ensure this import is correct

const Products = () => {
  const [products, setProducts] = useState([]);
  const cartContext = useCart();  // Use the custom hook to get cart data
  console.log(cartContext);  // Output the cartContext to see what it contains
  const { addToCart, cartCount } = cartContext; // Destructure cartContext to get addToCart and cartCount // Use addToCart and cartCount from CartContext

  useEffect(() => {
    axios.get("http://127.0.0.1:3002/products")
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <Link to="/cart">
        <div className="nav-bag">
          <IoCartOutline />
          <span className="cart-quantity">{cartCount}</span>
        </div>
      </Link>
      <Container>
        <h1>Products</h1>
        <CardText>Our Available Products</CardText>
        <div className="products">
          <CardGroup>
            <Row className="justify-content-between">
              {products.map(product => (
                <Col md="3" key={product.prodid} className="mb-4">
                  <Card style={{ backgroundColor: 'white' }}>
                    <CardImg src={product.prodimage} alt={product.prodname} top width="100%" style={{ maxWidth: '200px', maxHeight: '200px' }} />
                    <CardBody>
                      <MdOutlineStar />
                      <MdOutlineStar />
                      <MdOutlineStarHalf />
                      <MdOutlineStarBorder />
                      <MdOutlineStarBorder />
                      <CardTitle tag="h5" style={{ fontWeight: 'bold' }}>{product.prodname}</CardTitle>
                      <CardSubtitle tag="h6" className="mb-2 text-muted" style={{ fontWeight: 'bold' }}>Product Price: ${product.prodprice}</CardSubtitle>
                      <Button onClick={() => addToCart(product)} style={{ backgroundColor: '#8B0000', color: 'white' }}>Add to Cart</Button>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </CardGroup>
        </div>
      </Container>
    </div>
  );
};

export default Products;
