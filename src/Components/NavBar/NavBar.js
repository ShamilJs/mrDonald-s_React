import React from 'react';
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import signImg from '../../image/sign.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 19;
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: white;
`;

const Logo = styled.div`
    display: flex;  
    align-items: center;  
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const ImgSign = styled(ImgLogo)`
    max-height: 30px;
`;

const Button = styled.button`
    margin-right: 15px;
    border: none;
    background-color: #299B01;
    color: white;
    max-width: 50px;
    cursor: pointer;
    :hover {
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        border-radius: 5px;
    }
    :active {
        background-color: #300B01;
        border: none;
    }
`;


export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt='logo'/>
            <H1>MrDonald's</H1>
        </Logo>
        <Button>
            <ImgSign src={signImg} alt='sign'></ImgSign>
            войти</Button>
    </NavBarStyled>
);