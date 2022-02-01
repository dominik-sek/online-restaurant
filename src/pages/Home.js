import styled from 'styled-components';
import Card from '../components/Card'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css/bundle';
import { Navigation } from "swiper";
import './generic.css'
import { Skeleton } from 'antd';

const PRODUCT_DATA=[
    {
        id:1,
        img:'https://pngimg.com/uploads/cocacola/coca_cola_PNG8908.png',
    },
    {
        id:2,
        img:'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    },
    {
        id:3,
        img:'https://i.ytimg.com/vi/WcCAt9Cgpsk/mqdefault.jpg',
    },
    {
        id:4,
        img:'https://i.ytimg.com/vi/KgCGW4qwdB0/maxresdefault.jpg',
    },
    {
        id:5,
        img:'./images/product5.jpg',
    },
    {
        id:6,
        img:'./images/product6.jpg',
    },
    {
        id:7,
        img:'./images/product7.jpg',
    },
]
//api call to get products with flag on promiotion
function Home() {
  return (
    <Container>
    <Card transform={true} positionAbsolute={true} blurred={true} animate={false} header={false}/>
        <Card isForeground={true} animate={true} header={true}>
            <p>Check out our freshest offers!</p>
            <Swiper 
            navigation={true} 
            modules={[Navigation]} 
            className="ProductSwiper"
            slidesPerView={3}
            centeredSlides={true}
            style={{height:'60%', width:'100%'}}
            >
                
                {PRODUCT_DATA.map(product => (
                    <SwiperSlide key={product.id}>
                    <div style={{height:'60%', width:'auto', display:'flex' }}>
                    {/* tutaj przyciski do przeniesienia do oferty */}
                    <img src={product.img} alt="product" style={{height:'100%', width:'100%'}}/>
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
