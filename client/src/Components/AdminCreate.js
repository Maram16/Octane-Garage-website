import React, { useState } from 'react';
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
  CardBody
} from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import { fetchPosts } from '../Features/PostSlice';
 
// Import your logo and background image if needed
// import backgroundImage from '../Images/4.jpg';
// import logo from '../Images/logo.png';
 
const AdminCreate = () => {
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate(); // Use useNavigate hook
 
  const handleProductChange = (e) => {
    setProduct(e.target.value);
  };
 
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
 
  const handleImageChange = (e) => {
    setProfileImage(URL.createObjectURL(e.target.files[0]));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create form data to send to the backend
    const formData = new FormData();
    formData.append('prodname', product);
    formData.append('prodprice', price);
    formData.append('prodimage', e.target.profileImageInput.files[0]);
 
    // Send POST request to add product
    axios.post('http://localhost:3003/fetchPosts', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => {
      alert('Product added successfully.');
      navigate('/'); // Navigate back to the admin page after adding the product
    })
    .catch(error => {
      console.error('Error adding product:', error);
      alert('Error adding product.');
    });
  };
 
 
 
  return (
    <div
      className="background"
      // style={{ backgroundImage: `url(${backgroundImage})`, minHeight: '100vh', display: 'flex', alignItems: 'center' }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="border-0 shadow-lg">
              <CardBody>
                {/* Logo and Title */}
                <div className="text-center mb-5">
                  {/* <img src={logo} alt="Logo" style={{ height: '100px', marginBottom: '10px' }} /> */}
                  <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '5px' }}>Admin Setting</h2>
                </div>
 
                {/* Product Form */}
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6} className="mb-4">
                      <FormGroup>
                        <Label for="product">Product Name</Label>
                        <Input
                          type="text"
                          id="product"
                          value={product}
                          onChange={handleProductChange}
                          placeholder="Product Name"
                          required
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="price">Product Price</Label>
                        <Input
                          type="text"
                          id="price"
                          value={price}
                          onChange={handlePriceChange}
                          placeholder="Product Price"
                          required
                        />
                      </FormGroup>
                    </Col>
 
                    {/* Product Image */}
                    <Col md={6} className="text-center">
                      <div>
                        {profileImage && <img src={profileImage} alt="Product" style={{ width: '100%', marginBottom: '10px', borderRadius: '5px' }} />}
                        <input id="profileImageInput" type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
                        <label htmlFor="profileImageInput" className="image-upload-label">Choose Product Image</label>
                      </div>
                    </Col>
                  </Row>
 
                  {/* Save Button */}
                  <Row className="justify-content-center mt-5">
                    <Col md={6} className="text-center">
                      <Button type="submit" color="danger" style={{ width: '100%' }}>Save Changes</Button>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
 
export default AdminCreate;