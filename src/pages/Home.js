import styled from 'styled-components';
import Card from '../components/Card'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Navigation } from "swiper";
import './generic.css'
import { Skeleton } from 'antd';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import jwt_decode from 'jwt-decode'
//api call to get products with flag on promiotion
let user = null;
function Home(props) {
    // const location = useLocation();
    // if(location.state !== null){
    //     // console.log(location.state.user)
    //     if(location.state.user !== null){
    //         user = location.state.user;
    //     }
    // }
    // console.log(jwt_decode(props.token, { header: true }));

    return (
        <Container>
            <Card transform={true} positionAbsolute={true} blurred={true} animate={false} header={false} />
            <Card PRODUCT_DATA={props.PRODUCT_DATA} isForeground={true} animate={true} header={true} token={props.token}>
                <p>Check out our freshest offers!</p>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="ProductSwiper"
                    slidesPerView={3}
                    centeredSlides={true}
                    style={{ height: '60%', width: '100%' }}
                >

                    {props.RANDOM_PRODUCTS.map(product => (
                        <SwiperSlide key={product._id}>
                            <div style={{ height: '60%', width: 'auto', display: 'flex' }}>
                                {/* tutaj przyciski do przeniesienia do oferty */}
                                <img src={product.image} alt="product" style={{ height: '100%', width: '100%' }} />
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>

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
export default Home;
