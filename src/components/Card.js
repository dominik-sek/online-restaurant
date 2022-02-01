import React from 'react';
import styled,{keyframes} from 'styled-components';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { Skeleton } from 'antd';


const Card = (props) => {
    return (
        <Body props={props}>

        <Header>
             <Left>
                 <Link to={"/"} >   <Icon style={{cursor:'pointer'}} icon="twemoji:house"  color="#B38679" /></Link>
                 <Link to={"/menu"}>  <Icon style={{cursor:'pointer'}} icon="bx:bxs-food-menu"  color="#B38679" /></Link>
                 <Link to={"/foods"}> <Icon style={{cursor:'pointer'}} icon="twemoji:hamburger" color="#adffb9"  /></Link>
                 <Link to={"/drinks"}> <Icon style={{cursor:'pointer'}} icon="noto:cup-with-straw" color="#adffb9" /> </Link>
             </Left>
 
                 <Middle>
                 <p> Hello, namehere</p>
                 </Middle>
 
                 <Right>
                 <Icon style={{cursor:'pointer'}} icon="emojione:shopping-cart" color="red"  />
                 <Icon style={{cursor:'pointer'}} icon="ant-design:logout-outlined" color="red"  />
                 </Right>
             </Header>


        <Content>

        {props.children}

        </Content>

        </Body>
    )
}


const showCard = keyframes`
    0% {
        opacity: 0;
        transform: translate(3%) rotate(5deg);
        filter:blur(5px);

    }
    50%{
        opacity:1;
        filter:blur(2px);
    }

    100% {
        opacity: 1;
    }
`
const hideCard = keyframes`

    0% {
        opacity: 1;
        transform: translate(0%) rotate(0deg);
        filter:blur(5px);
    }
    50%{
        opacity: 0.5;
        transform: translate(30%,-30%) rotate(5deg);
        filter:blur(10px);

    }
    100% {
        opacity: 1;
        transform: translate(3%) rotate(5deg);
}
    `

const Body = styled.div`
    width: calc(80% - 8em);
    height: 80%;
    background: ${props => props.props.isForeground ? 'rgba(221, 255, 185, 1)' : 'rgba(221, 255, 185, 0.6)'};
    border-radius: 5em;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    filter: ${props => props.props.blurred ? 'blur(5px)' : 'none'};
    border: 1px solid rgba(221, 255, 185, 1);
    transform: ${props => props.props.transform ? 'translate(3%) rotate(5deg)' : 'none'};
    position: ${props => props.props.positionAbsolute ? 'absolute' : 'relative'};
    font-size: 2.5rem;
    padding-left:4em;
    padding-right:4em;


    animation-name: ${props => props.props.animate ? showCard : hideCard };
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-play-state: running;
    
`

const Header = styled.div`
    height: 20%;
    width: 100%;
    border-radius: 5em 5em 0 0;
    display:flex;
    align-items:center;
    `
const Right = styled.div`
    margin-left:auto;
    margin-right:0;
    display:flex;
    align-items:center;
    justify-content:flex-end;
`   
const Middle = styled.div`
    margin-left:auto;
    margin-right:auto;
    display:flex;
    align-items:center;
    justify-content:center;
    
`
const Left = styled.div`
    margin-left:0;
    margin-right:auto;
    display:flex;
    align-items:center;
    justify-content:flex-start;
`

const Content = styled.div`
    height: calc(80% - 1em);
    width: 100%;
    border-radius: 0 0 5em 5em;
    margin-top:1em;
    font-size: 1.5rem;
    
`

export default Card;