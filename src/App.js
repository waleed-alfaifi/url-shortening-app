import React from 'react';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import Features from './layout/Features';
import CTA from './layout/CTA';
import Footer from './layout/Footer';

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Showcase />
      </div>
      <Features />
      <div className="container">
        <CTA />
        <Footer />
      </div>
    </>
  );
}

export default App;
