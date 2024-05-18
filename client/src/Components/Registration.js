import React, { useState, useEffect } from 'react';
import {  Button, Col, Container, Row, FormGroup} from 'reactstrap';
import {useSelector, useDispatch} from 'react-redux';
import {userSchemaValidation} from "../Validations/UserValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../Features/UserSlice";
import { useForm } from 'react-hook-form';
import backgroundImage from '../Images/4.jpg';
import logo from "../Images/logo.png"; 



function Registration() {
    const userList = useSelector((state) => state.users.value);
    let [firstname, setFirstname] = useState('');
    let [lastname, setLastname] = useState('');
    let [email, setEmail] = useState('');
    let [phone, setPhone] = useState('');
    let [password, setPassword] = useState('');
    let [showPassword, setShowPassword] = useState(false);
 
  
    const dispatch = useDispatch(); //every time we want to call an action, make an action happen
    const navigate = useNavigate(); //declares a constant variable named navigate and assigns it the value returned by the useNavigate() hook.
    //For form validation using react-hook-form
    const {
      register,
      handleSubmit: submitForm, //submitForm will be called when the form is submitted
      formState: { errors },
    } = useForm({
      resolver: yupResolver(userSchemaValidation), //Associate your Yup validation schema using the resolver
    });



    const handleSubmit = (data) => {
      const userData = {
        //sending the data
        firstname:data.firstname,
        lastname:data.lastname,
        email:data.email, //from the state variable
        phone:data.phone,
        password:data.password,
        isAdmin:false,
      };
      dispatch(registerUser (userData));
      navigate("/");
      console.log(data);
    };


    // const handleSubmit = (data) => {
    //     const userData = {
    //         firstname: data.firstname,
    //         lastname: data.lastname,
    //         email: data.email,
    //         phone: data.phone,
    //         password: data.password,
    //     };
    //     dispatch(registerUser(userData));
    //     navigate("/");
    //     console.log(data);
    // };
 
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
 
    return (
        <Container fluid style={{
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
      }} >
            
    
     <Row className="form-row">
        <Col className="column" lg="6">
          <form className="div-form">
          <div style={{ textAlign: "center" }}>
              <img src={logo} style={{ maxWidth: '100%', height: 'auto' }}  />
                
              </div>
            <div className="appTitle"></div>
            <section className="form">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  placeholder="Enter your first name..."
                  //register this input to the react-hook
                  {...register("firstname", {
                    value: firstname,
                    onChange: (e) => setFirstname(e.target.value),
                  })}
                />
              </div>
              <p className="error">{errors.firstname?.message}</p>
              <div className="form-group">
                <input
                  type="lastname"
                  className="form-control"
                  id="lastname"
                  placeholder="Enter your lastname..."
                  value={lastname}
                  {...register("lastname", {
                    value: lastname,
                    onChange: (e) => setLastname(e.target.value),
                  })}
                />
              </div>
              <p className="error">{errors.lastname?.message}</p>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  //register this input to the react-hook
                  {...register("email", {
                    value: email,
                    onChange: (e) => setEmail(e.target.value),
                  })}
                />
              </div>
              <p className="error">{errors.email?.message}</p>
              <div className="form-group">
                <input
                  type="phone"
                  className="form-control"
                  id="phone"
                  placeholder="Enter your phone..."
                  value={phone}
                  //register this input to the react-hook
                  {...register("phone", {
                    value: phone,
                    
                    onChange: (e) => setPhone(e.target.value),
                  })}
                />
              </div>
              <p className="error">{errors.phone?.message}</p>
              <div className="form-group">
              <input
    className="form-control"
    id="Password"
    name="password"
    placeholder="Enter Password"
    type={'password'}
    {...register("password", {
        onChange: (e) => setPassword(e.target.value),
    })}
    value={password}
    style={{ border: 'none', backgroundColor: '#f0f0f0', fontSize: '16px', height: '40px', paddingLeft: '35px' }}
/>

              </div>
              <p className="error">{errors.password?.message}</p>
              <FormGroup className="button-container">
              <Button 
                color="primary"
                className="button"
                onClick={submitForm(handleSubmit)} //Validate first the form data by invoking submitForm, if all is good execute handleSubmit
              >
                Register
              </Button>
              </FormGroup>
            </section>
          </form>
        </Col>
      </Row>
      {/* </div> */}
        </Container>
    );
}
 
export default Registration;