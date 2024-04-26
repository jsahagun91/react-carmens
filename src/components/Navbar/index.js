import React from "react";
import { Nav, NavLink } from "./NavbarElements";
import logo from '../../images/carmens-logo.png'

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavLink to='/'><img src={logo} alt="Logo" style={{ height: '50px'}}/></NavLink>
                {/* <NavIcon onClick={ toggle }>
                    <p>Menu</p>
                    <Bars />
                </NavIcon> */}
            </Nav>
        </>
    )
}

export default Navbar