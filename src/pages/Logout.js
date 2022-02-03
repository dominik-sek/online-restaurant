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


//api call to get products with flag on promiotion

function Logout({setToken}) {
  const navigate = useNavigate();
  const logoutAndRedirect = () =>{
    setTimeout(() => {
      setToken('');
      navigate('/');
    }, 1500);
  }
  
  return (
    <Container>
      <Card transform={true} positionAbsolute={true} blurred={true} animate={false} header={false} />

      <Card isForeground={true} animate={true} header={true}>
        <div style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>You have been logged out!</div>
        <div>Redirecting...</div>
        {logoutAndRedirect()}
      </Card>

    </Container>
  );
}
Logout.propTypes = {
  setToken: PropTypes.func.isRequired
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  
`
export default Logout;
