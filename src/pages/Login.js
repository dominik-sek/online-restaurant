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

function Login({setToken}) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const loginAndRedirect = () =>{
      axios({
          method: 'post',
          url: 'https://pizzadev-server.herokuapp.com/login',
          data: {
              "username": login,
              "password": password
          }
      }).then(function (response) {
          if(response.data !== false){
            setToken(response.data);
            navigate('/');
          }else{
          }
      }).catch(function (error) {
      });
  }
    

  return (
    <Container>
      <Card transform={true} positionAbsolute={true} blurred={true} animate={false} header={false} />

      <Card title={"Login: "} isForeground={true} animate={true} header={true}>
      <Box
        noValidate
        autoComplete="off"
        component="form"
        style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height:'50%', width: '100%'}}
      > 
        <TextField
          required
          id="outlined-basic"
          label="Username"
          variant="outlined"
          onChange={(e) => {
            setLogin(e.target.value);
          }}

        />
        <TextField
          required
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          onChange={(e) => {
             setPassword(e.target.value);
          }}
          />

      <Button onClick={loginAndRedirect} variant="contained" endIcon={<SendIcon />}>
        Login
      </Button>
      <Link to={"/signup"}> <p style={{fontSize:15}}>dont have an account?</p> </Link>

      </Box>

      </Card>

    </Container>
  );
}
Login.propTypes = {
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
export default Login;
