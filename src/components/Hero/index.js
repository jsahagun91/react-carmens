import React from 'react';
import Navbar from '../Navbar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HeroElements";
// import Sidebar from '../Sidebar';

const Hero = () => {
  return (
    <HeroContainer role="region" aria-label="Hero section">
      <Navbar />
      {/* <Sidebar isOpen={isOpen} toggle={toggle}/> */}
      <HeroContent>
        <HeroItems>
          <HeroH1>Carmen's La Hacienda</HeroH1>
          <HeroP>Authentic Mexican Food</HeroP>

          {/* Accessible Buttons Styled as Links */}
          <p>
            <a
              href="https://novato.carmenslahacienda.com/"
              role="button"
              className="location-link"
              style={{ textDecoration: 'none' }}
            >
              <HeroBtn aria-label="Visit Carmen's La Hacienda Novato location">Novato</HeroBtn>
            </a>
          </p>
          <p>
            <a
              href="https://fairfax.carmenslahacienda.com/"
              role="button"
              className="location-link"
              style={{ textDecoration: 'none' }}
            >
              <HeroBtn aria-label="Visit Carmen's La Hacienda Fairfax location">Fairfax</HeroBtn>
            </a>
          </p>
          <p>
            <a
              href="https://rohnertpark.carmenslahacienda.com/"
              role="button"
              className="location-link"
              style={{ textDecoration: 'none' }}
            >
              <HeroBtn aria-label="Visit Carmen's La Hacienda Rohnert Park location">Rohnert Park</HeroBtn>
            </a>
          </p>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;