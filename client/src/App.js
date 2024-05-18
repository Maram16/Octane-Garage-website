import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'reactstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Services from './Components/Services';
import AboutUs from './Components/AboutUs';
import Footerers from './Components/Footerers';
import LoginUser from './Components/LoginUser';
import Admin from './Components/AdminCreate';
import Done from './Components/Done';
import Registration from './Components/Registration';
import PaymentPage from './Components/PaymentPage';
import { SharePost } from './Components/SharePost';
import UserProfile from './Components/UserProfile';
import CardInput from './Components/CardInput';
import ForgetPassword from './Components/ForgetPassword';
import { store } from "./Store";
import { Provider } from "react-redux";
import ContactUs from './Components/ContactUs';
import Products from './Components/Products';
import Cart from './Components/Cart';
import { CartProvider } from './Components/CartContext';
import AdminPage from './Components/AdminPage';
import AdminCreate from './Components/AdminCreate';
import { useDispatch } from 'react-redux';





function App() {
  return (
    <Provider store={store}>
    <Container fluid>
      <BrowserRouter>
       <Row>
        <Header/>
      </Row> 
       <Row className='main'>
       <CartProvider>
        <Routes>
          <Route path='/services' element={<Services/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/aboutUs' element={<AboutUs/>}/>
          <Route path='/' element={<LoginUser/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/payment' element={<PaymentPage/>}/>
          <Route path='/sharepost' element={<SharePost/>}/>
          <Route path='/userprofile' element={<UserProfile/>}/>
          <Route path='/cardinput' element={<CardInput/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/done' element={<Done/>}/>
          <Route path='/forgetpassword' element={<ForgetPassword/>}/>
          <Route path='/contactUs' element={<ContactUs/>}/> 
          <Route path='/products' element={<Products/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/cartprovider' element={<CartProvider/>}/>
          <Route path='/adminpage' element={<AdminPage/>}/>
          <Route path='/admincreate' element={<AdminCreate/>}/>

        
        </Routes>
        </CartProvider>
      </Row>
       <Row>
          <Footerers/>  
      </Row>  
      </BrowserRouter>
    </Container>
    </Provider>
    
  );
}

export default App;
