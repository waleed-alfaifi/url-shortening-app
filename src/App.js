import React from 'react';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import Features from './Layout/Features';
import CTA from './Layout/CTA';
import Footer from './Layout/Footer';

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Showcase />
      </div>
      <Features />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
