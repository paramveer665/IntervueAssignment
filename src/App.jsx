import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Resources from './components/Resources';
import Security from './components/Security';
import Testimonial from './components/Testimonial';
import Products from './components/Products';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Resources />
      <Security />
      <Testimonial />
      <Products />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;