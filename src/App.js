import React from 'react';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import Shorten from './components/Shorten';
import Features from './layout/Features';
import CTA from './layout/CTA';
import Footer from './layout/Footer';

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
