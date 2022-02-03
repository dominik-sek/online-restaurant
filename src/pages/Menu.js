import styled from 'styled-components';
import Card from '../components/Card'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Navigation } from "swiper";
import './generic.css'
import ProductContainer from '../components/ProductContainer';

//api call to get products with flag on promiotion
function Menu(props) {
    return (
        <Container>
            <Card transform={true} positionAbsolute={true} blurred={true} animate={false} header={false} />
            
            <Card title={"All of our products:"} isForeground={true} animate={true} header={true} token={props.token}>
                <ProductContainer products={props.PRODUCT_DATA}/>
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
export default Menu;
