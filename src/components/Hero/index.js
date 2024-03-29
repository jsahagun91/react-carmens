import React, { useState } from 'react'
// import Navbar from '../Navbar'
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HeroElements";
// import Sidebar from '../Sidebar';
import novatoMenu from '../../images/2024-novato.pdf'
import fairfaxMenu from '../../images/2024-fairfax.pdf'
import rpMenu from '../../images/2024-rp.pdf'

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
   <HeroContainer>
    {/* <Navbar toggle={toggle}/>
    <Sidebar isOpen={isOpen} toggle={toggle}/> */}
      <HeroContent>
        <HeroItems>
          <HeroH1>Carmen's La Hacienda</HeroH1>
          <HeroP>Authentic Mexican Food</HeroP>
          <a href={novatoMenu}>
            <HeroBtn>Novato</HeroBtn>
          </a>
          <a href={fairfaxMenu}>
            <HeroBtn>Fairfax</HeroBtn>
          </a>
          <a href={rpMenu}>
            <HeroBtn>Rohnert Park</HeroBtn>
          </a>
        </HeroItems>
      </HeroContent>
   </HeroContainer>
  )
}

export default Hero