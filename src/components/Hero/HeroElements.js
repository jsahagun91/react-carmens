import styled from 'styled-components';
import ImgBg from '../../images/heroBanner.jpeg';

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px); /* Fixed typo */
  max-height: 100%;
  width: 100vw;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(1.5rem, 1vw, 3rem);
  box-shadow: 3px 5px #fcebd1;
  padding: 3px 7px;
`;

export const HeroP = styled.p`
  font-size: clamp(1.5rem, 1.5vw, 3rem);
  padding-top: 5px;
  margin-bottom: 2rem;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  border: none;
  background: #6b3716;
  color: #fff;
  border-radius: 15px;
  transition: 0.2s ease-out;
  width: 200px;
  height: 50px;
  margin: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  &:hover {
    background: #fcebd1;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }

  &:focus {
    outline: 3px solid #ffd700;
    outline-offset: 2px;
  }

  &:focus-visible {
    outline: 3px solid #ffd700;
    outline-offset: 2px;
  }
`;