import styled from 'styled-components';
import Card from '../components/Card'
import './generic.css'
import ProductContainer from '../components/ProductContainer';


import React, { useState, useEffect } from 'react';



//api call to get products with flag on promiotion

function Cart(props) {



  return (
    <Container>
      <Card transform={true} positionAbsolute={true} blurred={true} animate={false} header={false} />

      <Card title={"Your cart: "} isCart={true} isForeground={true} animate={true} header={true} token={props.token}>
      <ProductContainer products={props.cart}/>


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
