import React from 'react'
// import {Route, Router,Switch} from 'react-router-dom';
import styled from 'styled-components';
import BurgerMenu from './BurgerMenu';
// import RightNav from './RightNav';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Nav=styled.nav`
    width:100%;
    height:100px;
    border-bottom:5px solid #ffff00;
    padding:0 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;

    .logo{
        padding:15px 0;
        font-size:22px;
        font-weight:bold;
        position:relative;
        left:100px;
    }


@media(max-width:480px){

    .logo{
        padding:15px 0;
        font-size:18px;
        font-weight:bold;
        position:relative;
        left:0px;
    }

}    
`


function Navbar() {
    return (
        
        <div>
            <Nav>
            <div className="logo">
                <Link className="link" to="/home">

                Marketution

                </Link>
            </div>

        
        <BurgerMenu />

        </Nav>


        </div>
    )
}

export default Navbar
