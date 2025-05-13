import React from "react";
import { Nav, NavLink } from "./NavbarElements";
import logo from '../../images/carmens-logo.png';

const Navbar = ({ toggle }) => {
  return (
    <nav aria-label="Main Navigation">
      <Nav>

        {/* Logo with descriptive alt text */}
        <NavLink to='/'>
          <img
            src={logo}
            alt="Carmen’s La Hacienda restaurant logo"
            style={{ height: '50px' }}
          />
        </NavLink>

        {/* Optional: Menu toggle button for mobile (accessible version) */}
        {/* Uncomment and style as needed */}
        {/*
        <button
          onClick={toggle}
          aria-label="Toggle navigation menu"
          style={{
            background: 'none',
            border: '2px solid transparent',
            cursor: 'pointer',
            padding: '10px',
            outline: 'none'
          }}
          onFocus={(e) => e.target.style.border = '2px solid #FFD700'}
          onBlur={(e) => e.target.style.border = '2px solid transparent'}
        >
          <span>☰ Menu</span>
        </button>
        */}

      </Nav>
    </nav>
  );
};

export default Navbar;