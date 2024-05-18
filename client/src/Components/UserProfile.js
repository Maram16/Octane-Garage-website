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
import backgroundImage from '../Images/4.jpg'; // Import the background image
import { useSelector } from "react-redux";


function getUser() {
  let user = localStorage.getItem("user");
  if (user) {
      return JSON.parse(user);
  } else {
      return null; // Return null if user data is not found in local storage
  }
}



const UserProfile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleImageChange = (e) => {
    setProfileImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your profile update logic here
  };
  const handleLogout = () => {
    // Add your logout logic here
  };
  const user = useSelector((state) => state.users.user);
  console.log('User data from Redux:', user);




  return (
    <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                zIndex: -2,
            }}
        >
      <Container className="h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col lg={8}>
            <Card className="border-0 shadow-lg">
              <CardBody>
                <Row>
                  {/* Left Side: Profile Form */}
                  <Col md={6} className="mb-4">
                    <h2 className="mb-4">Account Setting</h2>
                    <Form onSubmit={handleSubmit}>
                      <Row>
                     
                        <Col md={6}>
                          <FormGroup>
                          
                            <Label for="firstName" >First Name</Label>
                            <Input
                             
                              type="text"
                              id="firstName"
                              value={user.firstname} 
                              onChange={handleFirstNameChange}
                              placeholder="Enter First Name"
                              required
                            />
                            <p style={{ color: 'red' }}>Change</p>
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="lastName">Last Name</Label>
                            <Input
                              type="text"
                              id="lastName"
                              value={lastName}
                              onChange={handleLastNameChange}
                              placeholder="Enter Last Name"
                              required
                            />
                            <p style={{ color: 'red' }}>Change</p>
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormGroup>
                        <Label for="phoneNumber">Phone Number</Label>
                        <Input
                          type="tel"
                          id="phoneNumber"
                          value={phoneNumber}
                          onChange={handlePhoneNumberChange}
                          placeholder="Enter your phone number"
                          required
                        />
                        <p style={{ color: 'red' }}>Change</p>
                      </FormGroup>
                      <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                          type="password"
                          id="password"
                          value={password}
                          onChange={handlePasswordChange}
                          placeholder="Enter your password"
                          required
                        />
                        <p style={{ color: 'red' }}>Change</p>
                      </FormGroup>
                      <Button type="submit" color="danger" block>Update Profile</Button>
                    </Form>
                  </Col>

                  {/* Right Side: User Information */}
                  <Col md={6} className="text-center">
                    <div style={{ textAlign: 'center' }}>
                      {profileImage && <img src={profileImage} alt="Profile" style={{ width: '100%', marginBottom: '10px', borderRadius: '50%' }} />}
                      <label htmlFor="profileImageInput" style={{ color: 'red', cursor: 'pointer', display: 'inline-block', padding: '10px 20px', border: '1px solid red', borderRadius: '5px', backgroundColor: 'transparent' }}>Choose Image</label>
                      <input id="profileImageInput" type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
                    </div>
                  </Col>
                </Row>
                <br></br>
                <Row className="justify-content-center">
                  <Col md={6} className="text-center">
                    <Button type="submit" color="danger">Save Changes</Button>
                    <Button type="button" color="black" onClick={handleLogout} style={{ marginLeft: '10px' }}>Logout</Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserProfile;
