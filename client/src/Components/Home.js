
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import backgroundImage from '../Images/car.jpg'; // Ensure this path is correct
import Services from './Services';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import { useSelector} from "react-redux";
import React, { useState, useEffect } from 'react';


// function getUser() {
//   let user = localStorage.getItem("user");
//   if (user) {
//       return JSON.parse(user);
//   } else {
//       return null; // Return null if user data is not found in local storage
//   }
// }


const Home = () => {

//   useEffect(() => {
//     localStorage.setItem("user", JSON.stringify(user));
   
// }, [user]); // Only re-run the effect if user or services change

// const user = getUser() || userFromRedux; // Check local storage first, then Redux state
const user= useSelector((state) => state.users.user);
   // Check local storage first, then Redux state
    // const services = servicesFromRedux;
  return (
    <div>
       <div>
      <h1>Welcome {user.firstname}</h1>
    </div>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          opacity: 0.7,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          zIndex: -1,
        }}
      />
      <Container className="content" style={{ position: 'relative', zIndex: 1, paddingTop: '2rem' }}>
        <Row className="align-items-center" style={{ minHeight: '100vh' }}>
          <Col md="6">
            <h1 style={{ color: 'black', fontWeight: 'bold', fontSize: '60px' }}>Fastest Service Within Short Time Care</h1>
            <div className="button-group" style={{ marginTop: '20px' }}>
              <Link to="/aboutUs">
                <Button className="btn-about" style={{ marginRight: '10px' }}>About Us</Button>
              </Link>
              <Link to="/contactUs">
                <Button className="btn-services">Contact Us</Button>
              </Link>
            </div>
          </Col>
        </Row>

        <Container style={{ textAlign: 'center', maxWidth: '2200px', margin: 'auto', padding: '2rem 0', transform: 'translate(0%, -9%)' }}>
        <h2 style={{ fontSize: '4.5rem', fontWeight: 'bold', color: 'grey', marginBottom: '1rem' }}>About Us</h2>
        <AboutUs />
      </Container>
      </Container>
      <Container style={{ textAlign: 'center', maxWidth: '2200px', margin: 'auto', padding: '-1rem 0',  transform: 'translate(0%, -15%)'}}>
        <h2 style={{ fontSize: '4.5rem', fontWeight: 'bold', color: 'grey', marginBottom: '-4rem' }}>Contact Us</h2>
        <ContactUs />
      </Container>
      
    </div>
  );
};

export default Home;
