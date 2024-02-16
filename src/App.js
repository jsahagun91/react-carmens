import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
// import Products from "./components/Products";
// import { productData, productDataDesserts } from "./components/Products/data";
// import Feature from "./components/Feature";
// import MenuAccordion from "./components/AccordianMenu";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      {/* <Products heading='Choose your favorite' data={productData}/>
      <Feature />
      <Products heading='Dessert Time 😋' data={productDataDesserts}/>
      <MenuAccordion /> */}
    </Router>
  );
}

export default App;
