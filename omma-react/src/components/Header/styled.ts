import styled from "styled-components";
import {Link} from 'react-router-dom';

interface Props {
    active: string;
    to: string;
}

export const HeaderContainer = styled.header`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    z-index: 999;
`

export const HeaderLogoArea = styled.div`
    width: auto;
    height: 115px;
    background-color: #FFC107;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const HeaderLogo = styled.img`
    width: 325px;
    height: 85px;
    max-width: 100%;
    max-height: 100%;
`

export const HeaderNavbar = styled.nav`
    background-color: #FFA000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Navbar = styled.ul`
    list-style-type: none;
    height: 45px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const NavbarItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

export const NavbarLink = styled(Link)<Props>`
    display: block;
    padding: 0 55px;
    text-decoration: none;
    color: white;
    font-family: Montserrat;
    font-size: 20px;
    line-height: 25px;
    font-weight: 700;
    text-align: center;

    :hover{
        color: #FFC107;
        transition: all 0.5s ease-in-out;
    }
`

