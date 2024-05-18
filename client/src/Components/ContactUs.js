import React, { useState } from 'react';
import { Card, CardBody, Form, FormGroup, Input, Button } from 'reactstrap';
import { MdEmail } from "react-icons/md";
import { AiFillFacebook, AiFillTwitterSquare, AiOutlineWhatsApp, AiFillInstagram, AiFillLinkedin} from "react-icons/ai";
import google from '../Images/google.png';
import octanepic from '../Images/octanepic.jpeg';
import '../Css/ContactUs.css';

function ContactUs() {
    const [email, setEmail] = useState('');
 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
    };
 
    return (
        <div className="about-us-container">
       {/* <img src={octanepic} alt='background pic' className="background-image" style={{ width: '100%', height: '100vh', objectFit: 'cover' }} /> */}
            <div className="title-container" style={{ textAlign: 'center', paddingTop: '50px' }}>
              
                <p style={{ color: '#333', fontSize: '18px', marginBottom: '1px', fontWeight:'bold' }}>Octane is ready to provide the right solution according to your needs</p>
            </div>
 
            <div className="contact-card-container">
                <div className="contact-card">
                    <Card className='card' style={{ backgroundColor: '#f0f0f0' }}>
                        <CardBody>
                               <h1 style={{ textAlign: 'center', color:'#8B0000' }} >Get in touch</h1>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <div style={{ textAlign: 'center', margin: '0 10px' }}>
                                    <AiFillFacebook size={50} />
                                    <AiFillTwitterSquare size={50} />
                                </div>
                                <div style={{ textAlign: 'center', margin: '0 10px' }}>
                                    <a href="https://wa.me/96896999922" target="_blank" rel="noopener noreferrer">
                                        <AiOutlineWhatsApp size={50} />
                                    </a>
                                    <a href="https://www.instagram.com/octane.motor.om/" target="_blank" rel="noopener noreferrer">
                                        <AiFillInstagram size={50} />
                                    </a>
                                </div>
                                <div style={{ textAlign: 'center', margin: '0 10px' }}>
                                    <AiFillLinkedin size={50} />
                                    <MdEmail size={50} />
                                </div>
                            </div>
                            {/* Google Maps Link in a Picture with text on top*/}
                            <div style={{ position: 'relative', textAlign: 'center' }}>
                                <a href="https://maps.app.goo.gl/mJLQ4xTV5p69crYL7" target="_blank" rel="noopener noreferrer">
                                    <img src={google} alt="Google Maps" style={{ maxWidth: '100%', maxHeight: '250px' }} />
                                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'black' }}>
                                        <p style={{ margin: '0', fontSize: '20px', textDecoration: 'underline', cursor: 'pointer', color:"blue" }}>Find us in Google Maps</p>
                                    </div>
                                </a>
                            </div>
                        </CardBody>
                    </Card>
                </div>
 
                <div className="request-card">
                    <Card style={{ backgroundColor: '#f0f0f0' }}>
                        <CardBody>
                            <h1 style={{ textAlign: 'center', color:'#8B0000' }}>Request a Quote</h1>
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Input
                                        type="text"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        placeholder="Full Name"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        placeholder="Email"
                                    />
                                    <MdEmail size={20} />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type="textarea"
                                        placeholder="Send us a request"
                                    />
                                </FormGroup>
                                <FormGroup style={{ textAlign: 'center' }}>
                                <Button type="submit" style={{ backgroundColor: '#8B0000', color: 'white', width: '100%' }}>Submit</Button></FormGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}
 
export default ContactUs;