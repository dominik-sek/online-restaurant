import './App.css';
import styled from 'styled-components';
import Home from './pages/Home';
import { Routes, Route, Link, __RouterContext } from "react-router-dom";
import Menu from './pages/Menu';
import Drink from './pages/Drink';
import Food from './pages/Food';
import Login from './pages/Login';
import Logout from './pages/Logout';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import { useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

let PRODUCT_DATA = [];
let RANDOM_PRODUCTS = [];
let FOOD = [];
let DRINKS = [];
const getRandomProducts = () => {
  let randomIndexes =[];
    for (let i = 0; i < 5; i++) {
        let randomIndex = Math.floor(Math.random() * PRODUCT_DATA.length);
        while (randomIndexes.includes(randomIndex)) {
            randomIndex = Math.floor(Math.random() * PRODUCT_DATA.length);
        }
        randomIndexes.push(randomIndex);
        RANDOM_PRODUCTS.push(PRODUCT_DATA[randomIndex]);
    }
}
const splitFoodDrinks =()=>{
  for(let i=0;i< PRODUCT_DATA.length;i++){
    if(PRODUCT_DATA[i].vat === 5){
      FOOD.push(PRODUCT_DATA[i]);
    }else{
      DRINKS.push(PRODUCT_DATA[i]);
    }
  }
}


const getMenu = async () => {
    const response = await axios.get('https://pizzadev-server.herokuapp.com/menu');
    return response.data;
}


function App() {
    const [menu, setMenu] = useState([]);
    const [randomProducts, setRandomProducts] = useState([]);
    const [food, setFood] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [token, setToken] = useState('');
    const [cart, setCart] = useState([]);


    useEffect(() => {
        getMenu().then(data => {
            PRODUCT_DATA = data;
            getRandomProducts();
            splitFoodDrinks();
            setMenu(PRODUCT_DATA);
            setRandomProducts(RANDOM_PRODUCTS);
            setFood(FOOD);
            setDrinks(DRINKS);
            PRODUCT_DATA = [];
            RANDOM_PRODUCTS = [];
        })
    }, []);

return(
  <>
      <Routes>
       <Route exact path="/" element={<Home PRODUCT_DATA={menu} RANDOM_PRODUCTS={randomProducts} token={token}/>} />
       <Route exact path ="/menu" element={<Menu setCart={setCart} PRODUCT_DATA={menu} token={token}/>} />
       <Route exact path ="/drinks" element={<Drink setCart={setCart} PRODUCT_DATA={drinks} token={token} />} />
       <Route exact path ="/foods" element={<Food setCart={setCart} PRODUCT_DATA={food} token={token}/>} />
       <Route exact path= "/login" element={<Login setToken={setToken} token={token}/>} />
       <Route exact path= "/logout" element={<Logout setToken={setToken} token={token}/>} />
       <Route exact path= "/signup" element={<SignUp/>} />
       <Route exact path ="/cart" element={<Cart cart= {cart} token={token} />} />
       {/*  />
       <Route path ="/checkout" element={<Checkout/>} />
      
       */}
   </Routes>

  </>

)

}



export default App;
