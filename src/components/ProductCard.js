import styled from 'styled-components';
import { Icon } from '@iconify/react';
import React, { useState, useEffect, createRef, useRef } from 'react';

const ProductCard = (props) => {


    const [open, setOpen] = useState(false);
    const [showBasicNav, setShowBasicNav] = useState(false);
    const ref = useRef();


    const showContent = () =>{
        return(
            <div style={{width:'100%', display:'flex', cursor:'pointer'}} onClick={()=>{setOpen(!open)}}>
                <img src={props.product.img} alt="product" style={{height:'100%', width:'auto'}}/>
                <p>{props.product.id}</p>

            </div>
        )
    }

    const showImage = () =>{
        return(
            <div style={{width:'100%',cursor:'pointer'}} onClick={()=>{setOpen(!open);}}> 
                <img src={props.product.img} alt="product" style={{height:'100%', width:'auto'}}/>
            </div>
        )
    }
    const showNav = () =>{
        return(
            <BasicNav show={showBasicNav} isOpen={open}>
                <Icon icon="ant-design:left-outlined" />
            </BasicNav>
        );
    }
    const scrollToOpened = () =>{
        if(ref && ref.current){
                ref.current.scrollIntoView({behavior: 'smooth'});

        }

    }
    return (
        <Container ref={ref} isOpen={open} onMouseEnter={()=>{setShowBasicNav(true)}} onMouseLeave={()=>{setShowBasicNav(false)}} onClick={()=>{scrollToOpened(ref) }} >
            <Body >
                <Navigation>
                    <Icon onClick={()=>{setOpen(!open)}} style={{ cursor: 'pointer' }} icon={open ? "ant-design:up-outlined" : "ant-design:down-outlined"} />
                </Navigation>
                {open ? showContent() : showImage()}
                {showNav()}
            </Body>
        </Container>
    )

}
const BasicNav = styled.div`
    justify-content: center;
    align-items: center;
    display:flex;
    width: 100%;
    opacity: ${props => props.show && !props.isOpen ? 1 : 0};
    transition: opacity 0.5s linear;
    position:absolute;
    bottom:0;
    height: 40%;
    background-image: linear-gradient(rgba(0,0,0,0), black);
    `
const Container = styled.div`
border:1px solid white;
    display: flex;
    width: 100%;
    height:${props => props.isOpen ? '100%' : '6em'};
    position:relative;
    transition: height 0.5s ease-in-out;
    justify-content: flex-start;
    box-sizing: border-box;
    `
const Body = styled.div`
    display: flex;
    border: 0.5px solid #D3D3D3;
    border-radius: 5px;
    width: 100%;
    height: 6em;
    position:relative;
    `
const Navigation = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 10%;
    height: 100%;
    position:absolute;
    right:0;
    `

export default ProductCard;