import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { Link, useLocation } from 'react-router-dom';
import '../pages/generic.css'



const Card = (props) => {

    const location = useLocation();
    const [shaking, setShaking] = useState(false);
    const animate = () => {
        setShaking(true);
        setTimeout(() => {
            setShaking(false);
        }, 2000);
    }
    const isPathAndShaking = (pathname) => {
        if (pathname === location.pathname && shaking) {
            return true;
        }
        return false;
    }


    const header = (token) => {
        return (
            <Header>

                <Left>
                    <Link to={"/"} >
                        <ShakeyButton onClick={animate} className={isPathAndShaking("/") ? 'shake' : null}>
                            <Icon style={{ cursor: 'pointer' }} icon="twemoji:house" color="#B38679" />
                        </ShakeyButton>
                    </Link>

                    <Link to={"/menu"} >
                        <ShakeyButton onClick={animate} className={isPathAndShaking("/menu") ? 'shake' : null}><Icon style={{ cursor: 'pointer' }} icon="bx:bxs-food-menu" color="#B38679" />
                        </ShakeyButton>
                    </Link>

                    <Link to={"/foods"}>
                        <ShakeyButton onClick={animate} className={isPathAndShaking("/foods") ? 'shake' : null}><Icon style={{ cursor: 'pointer' }} icon="twemoji:hamburger" color="#adffb9" />
                        </ShakeyButton>
                    </Link>

                    <Link to={"/drinks"}>
                        <ShakeyButton onClick={animate} className={isPathAndShaking("/drinks") ? 'shake' : null}><Icon style={{ cursor: 'pointer' }} icon="noto:cup-with-straw" color="#adffb9" />
                        </ShakeyButton>
                    </Link>
                </Left>

                <Middle>
                    {token ? <p> Hello</p> : <p> Blue Cards restaurant</p>}
                    
                </Middle>

                <Right>
                
                    {token ? 
                        <>
                    <Link to={"/cart"} ><Icon style={{ cursor: 'pointer' }} icon="emojione:shopping-cart" color="red" /></Link>
                    <Link to={"/logout"}> <Icon style={{ cursor: 'pointer' }} icon="ant-design:logout-outlined" color="red" /></Link>
                    </>
                    : <Link to={"/login"}><Icon style={{ cursor: 'pointer' }} icon="ant-design:login-outlined" color="green" /></Link>}

                    
                </Right>
            </Header>

        )
    }



    return (
        <Body props={props}>
            {props.header ? header(props.token) : null}
            <Content>
                <Contents>
                    {props.title !== null ? props.title : null}
                </Contents>
                
                {props.isForeground ? props.children : null}
            </Content>

        </Body>
    )
}

const showCard = keyframes`
    0% {
        opacity: 0.5;
        transform: translate(3%) rotate(5deg);
        z-index: -1;
       
    }
    50%{
        opacity:1;
        filter:blur(3px);
        z-index: -1;
    }

    100% {
        opacity: 1;
    }
`
const hideCard = keyframes`

    0% {
        opacity: 1;
        transform: translate(0%) rotate(0deg);
    }
    50%{
        opacity:1;
        transform: translate(70%,-70%) rotate(5deg);

    }
    100% {
        opacity: 1;
        z-index: -1;

    `
const ShakeyButton = styled.div`
    ${'' /* animation-name: ${shaking => shaking ? shake : ''};
    animation-duration: 0.7s;
    animation-iteration-count: 4; */}
`;


const Body = styled.div`
    width: calc(80% - 8em);
    height: 80%;
    background: ${props => props.props.isForeground ? 'rgba(84, 138, 224, 0.8)' : 'rgba(84, 138, 224, 0.6)'};
    border-radius: 5em;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    filter: ${props => props.props.blurred ? 'blur(5px)' : 'none'};
    border: 1px solid rgba(84, 138, 224, 1);
    transform: ${props => props.props.transform ? 'translate(3%) rotate(5deg)' : 'none'};
    position: ${props => props.props.positionAbsolute ? 'absolute' : 'relative'};
    font-size: 2.5rem;
    padding-left:4em;
    padding-right:4em;


    animation-name: ${props => props.props.animate ? showCard : hideCard};
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-play-state: running;
    
`

const Header = styled.div`
    width: 100%;
    border-radius: 5em 5em 0 0;
    display:flex;
    align-items:center;
    `
const Contents = styled.div`
    width: 100%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:0.5em;
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
    height: calc(80% - 2.2em);
    width: 100%;
    border-radius: 0 0 5em 5em;
    margin-top:1em;
    font-size: 1.5rem;
    
`

export default Card;