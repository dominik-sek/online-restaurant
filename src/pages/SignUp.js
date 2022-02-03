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
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

//api call to get products with flag on promiotion

function SignUp() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [telephone, setTelephone] = useState(0);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const loginAndRedirect = () =>{
      axios({
          method: 'post',
          url: 'https://pizzadev-server.herokuapp.com/register',
          data: {
              "username": login,
              "password": password,
              "first_name": firstName,
              "last_name": lastName,
              "address": address,
              "telephone": telephone
          }
      }).then(function (response) {
          if(response.data !== false){
            //show message
            setSuccess(true);
          }else{
            setError(true)
          }
      }).catch(function (error) {
      });
  }
  const somethingWrong = () =>{
    return(
      <Snackbar
        open={error}
        autoHideDuration={2000}
        onClose={() => setError(false)}
        anchorOrigin={ { vertical: 'top', horizontal: 'center' } }
      >
      <Alert onClose={() => setError(false)} severity="error" sx={{ width: '100%' }}>
        Something went wrong!
      </Alert>

  </Snackbar>
    )
  };
  const successMessage = () =>{
    return(
      <Snackbar
        open={success}
        autoHideDuration={2000}
        onClose={() => {setSuccess(false); navigate('/login')}}
        anchorOrigin={ { vertical: 'top', horizontal: 'center' } }
      >
      <Alert onClose={() => {setSuccess(false)}} severity="success" sx={{ width: '100%' }}>
        Successfully registered!
        You can now login!
      </Alert>

  </Snackbar>
    )
  };

  return (
    <Container>

      <Card transform={true} positionAbsolute={true} blurred={true} animate={false} header={false} />
      <Card title={"Register: "} isForeground={true} animate={true} header={true}>
      
      {somethingWrong()}
      {successMessage()}
      
      <Box
        noValidate
        autoComplete="off"
        component="form"
        style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height:'100%', width: '100%'}}
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
          <TextField
          required
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}

        />
        <TextField
          required
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          onChange={(e) => {
            setLastName(e.target.value);
          }}

        />
        <TextField
          required
          id="outlined-basic"
          label="Address"
          variant="outlined"
          onChange={(e) => {
            setAddress(e.target.value);
          }}

        />
        <TextField
          required
          id="outlined-basic"
          label="telephone"
          variant="outlined"
          onChange={(e) => {
            setTelephone(e.target.value);
          }}

        />

      <Button onClick={loginAndRedirect} variant="contained" endIcon={<SendIcon />}>
        Register
      </Button>

      </Box>

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
export default SignUp;
