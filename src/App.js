import './App.css';
import styled from 'styled-components';
import Home from './pages/Home';
import { Routes, Route, Link } from "react-router-dom";
import Menu from './pages/Menu';
import Drink from './pages/Drink';
import Food from './pages/Food';
function App() {
  return (
      <Routes>
      
          <Route path="/" element={<Home/>} />
          <Route path ="/menu" element={<Menu/>} />
          <Route path ="/drink" element={<Drink/>} />
          <Route path ="/food" element={<Food/>} />
          {/* <Route path ="/cart" element={<Cart/>} />
          <Route path ="/checkout" element={<Checkout/>} />
          <Route path ="/profile" element={<Profile/>} />
          <Route path= "/login" element={<Login/>} />
          <Route path= "/register" element={<Register/>} /> */}
      </Routes>
  );
}



export default App;
