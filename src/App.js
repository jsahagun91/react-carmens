import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";

function App() {
  return (
    <Router>
      <GlobalStyle />

      {/* Skip link for keyboard users */}
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      {/* Main content landmark for screen readers */}
      <main id="main" role="main" aria-label="Main content">
        <Hero />
      </main>
    </Router>
  );
}

export default App;