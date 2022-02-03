import styled from 'styled-components';
import Card from '../components/Card'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Navigation } from "swiper";
import './generic.css'
import ProductContainer from '../components/ProductContainer';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';


//api call to get products with flag on promiotion

function Cart(props) {

  const navigate = useNavigate();
  // const loginAndRedirect = () =>{
    
  //     axios({
  //         method: 'post',
  //         url: 'http://localhost:8080/login',
  //         data: {
  //             "username": login,
  //             "password": password
  //         }
  //     }).then(function (response) {
  //       console.log(response)
  //         if(response.data !== false){
  //           setToken(response.data);
  //           navigate('/');
  //         }else{
  //           console.log("wrong something")
  //         }
  //     }).catch(function (error) {
  //         console.log(error);
  //     });
  // }
    

  return (
    <Container>
      <Card transform={true} positionAbsolute={true} blurred={true} animate={false} header={false} />

      <Card title={"Your cart: "} isForeground={true} animate={true} header={true}>
      <ProductContainer products={props.cart}/>

      <Button  variant="contained" endIcon={<SendIcon />}>
        Checkout
      </Button>
      </Card>

    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  
`
export default Cart;
