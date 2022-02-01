import styled from 'styled-components';
import Card from '../components/Card'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css/bundle';
import { Navigation } from "swiper";
import './generic.css'


//api call to get products with flag on promiotion
function Home() {
  return (
    <Container>
    <Card transform={true} position={true} blurred={true}/>
        <Card foreground={true}>
        
            <p>Check out our freshest offers!</p>
            
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
