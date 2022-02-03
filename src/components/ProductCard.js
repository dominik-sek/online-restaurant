import styled from 'styled-components';
import { Icon } from '@iconify/react';
import React, { useState, useEffect, createRef, useRef } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const ProductCard = (props, { setCart }) => {


    const [open, setOpen] = useState(false);
    const [showBasicNav, setShowBasicNav] = useState(false);
    const ref = useRef();


    const showUnopened = () => {
        return (
            <ProductHeader style={{ height: '100%' }} onClick={() => { setOpen(!open) }}>
                <img src={props.product.image} alt="product" style={{ height: '100%', width: 'auto' }} />
                <p>{props.product.name}</p>
            </ProductHeader>
        )
    }

    const showOpened = () => {
        return (
            <ProductHeader onClick={() => { setOpen(!open); }}>
                <img src={props.product.image} alt="product" style={{ height: '100%', width: 'auto' }} />
                <p>{props.product.name}</p>
            </ProductHeader>
        )
    }

    const showAllInfo = () => {
        return (
            <ProductInfo>
                <ProductPhoto src={props.product.image} alt="product" />

                <ProductDesc>
                    <p>{props.product.desc}</p>

                </ProductDesc>

                <ProductPricing>

                    <p>{props.product.price * 0.01}zł</p>
                    <Button variant="text" style={{color:'green'}} endIcon={<AddIcon />}/>

                    
                </ProductPricing>
            </ProductInfo>
        );
    }


    const showNav = () => {
        return (
            <BasicNav show={showBasicNav} isOpen={open}>
                {/* <Icon icon="ant-design:left-outlined" /> */}
            </BasicNav>
        );
    }
    const scrollToOpened = () => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    }


    return (
        <Container ref={ref} isOpen={open} onMouseEnter={() => { setShowBasicNav(true) }} onMouseLeave={() => { setShowBasicNav(false) }} onClick={() => { scrollToOpened(ref) }} >
            <Body>
                <Navigation>
                    <Icon onClick={() => { setOpen(!open) }} style={{ cursor: 'pointer' }} icon={open ? "ant-design:up-outlined" : "ant-design:down-outlined"} />
                </Navigation>
                {open ? showOpened() : showUnopened()}
                {showNav()}
            </Body>
            {open ? showAllInfo() : null}

        </Container>
    )

}

ProductCard.propTypes = {
    setCart: PropTypes.func.isRequired
}

const ProductHeader = styled.div`
    display: flex;
    width:100%;
    cursor:pointer
    `
const ProductPhoto = styled.img`
    width:auto;
    display:flex;
    height:70%;
    `
const ProductInfo = styled.div`
    display: flex;
    width:100%;
    height:12em;
    padding:0.3em;
    cursor:pointer;
    justify-content: space-between;
    align-items: center;
    
    `
const ProductPricing = styled.div`
    display: flex;
    width:10%;
    padding:0.3em;
    justify-content:center;
    right:0;
    `
const ProductDesc = styled.div`
    display: flex;
    width:40%;
    padding:0.3em;
    `
const BasicNav = styled.div`
    justify-content: center;
    align-items: center;
    display:flex;
    width: calc(100% - 0.3em);
    opacity: ${props => props.show && !props.isOpen ? 1 : 0};
    display: ${props => props.show ? 'flex' : 'none'};
    transition: opacity 0.5s linear;
    position:absolute;
    bottom:0;
    height: 40%;
    background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8));
    `
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height:${props => props.isOpen ? '15em' : '3em'};
    position:relative;
    transition: height 0.5s ease-in-out;
    padding:0.3em;
    margin:0.5em;
    justify-content: flex-start;
    box-sizing: border-box;
    `
const Body = styled.div`
    display: flex;
    border-radius: 5px;
    width: 100%;
    height: 3em;
    padding:0.3em;
    position:relative;
    `
const Navigation = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    position:absolute;
    right:0;
    `

export default ProductCard;