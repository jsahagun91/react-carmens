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
          <a href='https://novato.carmenslahacienda.com/'>
            <HeroBtn>Novato</HeroBtn>
          </a>
          <a href='https://fairfax.carmenslahacienda.com/'>
            <HeroBtn>Fairfax</HeroBtn>
          </a>
          <a href='https://rohnertpark.carmenslahacienda.com'>
            <HeroBtn>Rohnert Park</HeroBtn>
          </a>
        </HeroItems>
      </HeroContent>
   </HeroContainer>
  )
}

export default Hero