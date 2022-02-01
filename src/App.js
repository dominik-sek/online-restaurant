import './App.css';
import styled from 'styled-components';
import Home from './pages/Home';
import { Routes, Route, Link, __RouterContext } from "react-router-dom";
import Menu from './pages/Menu';
import Drink from './pages/Drink';
import Food from './pages/Food';
import { useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';


function App() {

return(
  <>
      <Routes>
       <Route exact path="/" element={<Home/>} />
       <Route exact path ="/menu" element={<Menu/>} />
       <Route exact path ="/drinks" element={<Drink/>} />
       <Route exact path ="/foods" element={<Food/>} />
       {/* <Route path ="/cart" element={<Cart/>} />
       <Route path ="/checkout" element={<Checkout/>} />
       <Route path ="/profile" element={<Profile/>} />
       <Route path= "/login" element={<Login/>} />
       <Route path= "/register" element={<Register/>} /> */}
   </Routes>

  </>

)

}



export default App;
