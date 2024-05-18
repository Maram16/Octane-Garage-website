import React, { useEffect, useState } from 'react';
import {
    Container,
    FormGroup,
    Label,
    Button,
    Row,
    Col,
} from "reactstrap";
import { LoginValid } from "../Validations/LoginValidations";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Features/UserSlice";
import { useNavigate, Link } from "react-router-dom";
import backgroundImage from '../Images/4.jpg';
import logo from "../Images/logo.png";

function LoginUser() {
  const adminEmail = "admin@gmail.com";
  const adminPassword = "adminSecret123";

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const user = useSelector(state => state.users.user);
  const isSuccess = useSelector(state => state.users.isSuccess);
  const isError = useSelector(state => state.users.isError);
  const navigate = useNavigate();

  const { register, handleSubmit: submitForm, formState: { errors } } = useForm({
    resolver: yupResolver(LoginValid)
  });


  useEffect(() => {
    if (user && isSuccess) {
      // Check if it's the admin email and password after a successful login
      if (email === adminEmail && password === adminPassword) {
        navigate("/adminpage");
      } else {
        navigate("/home");
      }
    } if (isError) {
      // Navigate should be removed to stay on the login page
      alert("Invalid Credentials");  
      navigate("/");
    }
}, [user, isSuccess, isError]);



  // Make sure to use formData if it's defined or directly take from state

  const handleSubmit = (formData) => {
    const data = {
      //sending the data
      email: email, //from the state variable
      password: password,
    };
    dispatch(login(data));
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
    }}>
      <Row className="form-row">
        <Col md="6" className="column">
          <form onSubmit={submitForm(handleSubmit)} className="div-form">
            <div style={{ textAlign: "center" }}>
              <img src={logo} alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <FormGroup style={{ position: 'relative' }}>
              <Label for="Email" className="smalltext">Email</Label>
              <input
                className="form-control"
                id="Email"
                type="email"
                placeholder="Email Address"
                {...register("email", {
                  required: true,
                  onChange: (e) => setEmail(e.target.value),
                })}
                style={{ border: 'none', backgroundColor: '#f0f0f0', fontSize: '16px', height: '40px', paddingLeft: '35px' }}
              />
              <p className="error">{errors.email?.message}</p>
            </FormGroup>
            <FormGroup style={{ position: 'relative' }}>
              <Label for="Password" className="smalltext">Password</Label>
              <input
                className="form-control"
                id="Password"
                type="password"
                placeholder="Enter Password"
                {...register("password", {
                  required: true,
                  onChange: (e) => setPassword(e.target.value),
                })}
                style={{ border: 'none', backgroundColor: '#f0f0f0', fontSize: '16px', height: '40px', paddingLeft: '35px' }}
              />
              <p className="error">{errors.password?.message}</p>
            </FormGroup>
            <FormGroup row className="mb-0">
              <Col xs="6">
                <Link to="/forgetpassword" style={{ color: 'red', fontSize: '14px', textDecoration: 'none' }}>Forgot Password?</Link>
              </Col>
            </FormGroup>
            <Button type="submit" color="primary">
              Submit
            </Button>
            <FormGroup>
              <Label className="smalltext">
                No Account?
                <Link to="/registration">Sign Up</Link> now.
              </Label>
            </FormGroup>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginUser;
