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

const Hero = () => {
  return (
    <HeroContainer role="region" aria-label="Hero section: location selector">
      <Navbar />

      <HeroContent>
        <HeroItems>
          <HeroH1>Carmen's La Hacienda</HeroH1>
          <HeroP>Authentic Mexican Food</HeroP>

          {/* Location links styled as buttons */}
          <p>
            <a
              href="https://novato.carmenslahacienda.com/"
              role="button"
              aria-label="Visit Carmen's La Hacienda Novato location"
              className="location-link"
              style={{ textDecoration: 'none' }}
            >
              <HeroBtn tabIndex="0">Novato</HeroBtn>
            </a>
          </p>
          <p>
            <a
              href="https://fairfax.carmenslahacienda.com/"
              role="button"
              aria-label="Visit Carmen's La Hacienda Fairfax location"
              className="location-link"
              style={{ textDecoration: 'none' }}
            >
              <HeroBtn tabIndex="0">Fairfax</HeroBtn>
            </a>
          </p>
          <p>
            <a
              href="https://rohnertpark.carmenslahacienda.com/"
              role="button"
              aria-label="Visit Carmen's La Hacienda Rohnert Park location"
              className="location-link"
              style={{ textDecoration: 'none' }}
            >
              <HeroBtn tabIndex="0">Rohnert Park</HeroBtn>
            </a>
          </p>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;