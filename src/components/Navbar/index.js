import React from "react";
import { Nav, NavLink } from "./NavbarElements";
import logo from '../../images/carmens-logo.png';
// import { Bars } from 'some-icon-library'; // Add this if you use Bars icon

const Navbar = ({ toggle }) => {
    return (
        <nav aria-label="Main Navigation">
            <Nav>
                <NavLink to='/'>
                    <img
                        src={logo}
                        alt="Carmen’s Restaurant logo"
                        style={{ height: '50px' }}
                    />
                </NavLink>

                {/* Mobile menu toggle button (if used) */}
                {/* <button
                    onClick={toggle}
                    aria-label="Toggle menu"
                    style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '8px'
                    }}
                >
                    <p style={{ margin: 0 }}>Menu</p>
                    <Bars />
                </button> */}
            </Nav>
        </nav>
    );
};

export default Navbar;