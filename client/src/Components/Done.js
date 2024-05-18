import React, { useState } from 'react';
import { Card, CardBody } from 'reactstrap';
import backgroundImage from '../Images/2.jpg';
import logo from '../Images/logo.png';
import { MdArrowBack } from "react-icons/md"; // Import MdArrowBack icon
import validIcon from '../Images/valid.png'; // Use a modern checkmark icon
import '../Css/Forget.css'; // Create a CSS file for styling
 
function Done() {
    const [email, setEmail] = useState('');
 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
    };
 
    return (
        <div className="forget-password-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Card className="forget-password-card">
                <CardBody>
                    <div className="logo-container">
                        <img src={logo} alt="Logo" className="logo-img" />
                    </div>
                    <div className="valid-icon-container">
                        <img src={validIcon} alt="valid" className="valid-icon" />
                    </div>
                    <p className="success-message">Well Done!</p>
                    <p className="sub-message">Your password has been changed successfully, we will let you know if there are more problems with your account.</p>
                </CardBody>
            </Card>
        </div>
    );
}
 
export default Done;