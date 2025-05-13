import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { GiTacos } from "react-icons/gi";

// Navbar container
export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  position: relative;
`;

// Logo or nav link
export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  &:focus,
  &:focus-visible {
    outline: 3px solid #FFD700;
    outline-offset: 2px;
  }

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

// Mobile menu icon container
export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;
  padding: 10px;

  &:focus,
  &:focus-visible {
    outline: 3px solid #FFD700;
    outline-offset: 2px;
  }

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

// Icon itself
export const Bars = styled(GiTacos)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;