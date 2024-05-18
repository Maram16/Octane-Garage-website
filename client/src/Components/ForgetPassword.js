import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Form, FormGroup, Input, Button, Col, Label } from 'reactstrap';
import backgroundImage from '../Images/2.jpg';
import logo from '../Images/logo.png';
import { MdEmail, MdArrowBack } from "react-icons/md"; // Import MdArrowBack icon
 
function ForgetPassword() {
    const [email, setEmail] = useState('');
 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
    };
 
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
         
         <Card style={{
                minWidth: '400px',
                maxWidth: '400px',
                borderRadius: '15px',
                height: 'auto',
                marginTop: '250px',
                marginLeft: 'auto',
                marginRight: 'auto',
            }}>
                <CardBody>
                    <div className="text-center mb-4">
                        <img src={logo} alt="Logo" style={{ height: '100px', marginBottom: '20px' }} />
                        <p style={{ fontSize: '25px', fontWeight: 'bold', marginBottom: '5px' }}>Forget Password</p>
                        <p style={{ fontSize: '14px', color: '#888', marginBottom: '20px' }}>Please Enter Your Email Address <br /> Check your email account .. </p>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup style={{ position: 'relative' }}>
                            <Input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={{ border: 'none', backgroundColor: '#f0f0f0', fontSize: '16px', height: '40px', paddingLeft: '35px' }}
                                placeholder="Email"
                            />
                            <MdEmail style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '10px', color: '#888', fontSize: '20px' }} />
                        </FormGroup>
                        <br /><br />
                        <div className="text-center mt-3">
                            <Button type="submit" style={{ backgroundColor: 'gray', color: 'white', borderRadius: '2px', fontSize: '16px', height: '40px', width: '45%', marginRight: '5%' }}>Cancel</Button>
                            <Button type="submit" color="danger" style={{ borderRadius: '2px', fontSize: '16px', height: '40px', width: '45%', marginLeft: '5%' }}>Reset</Button>
                        </div>
                    </Form>
                </CardBody>
            </Card>
        </div>
    );
}
 
export default ForgetPassword; 