import React from 'react';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import Shorten from './components/Shorten';
import Features from './Layout/Features';
import CTA from './Layout/CTA';
import Footer from './Layout/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Showcase />
      <Shorten />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
