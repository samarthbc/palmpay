import React from 'react';
import NavigationBar from './components/Navbar';
import HomeCarousel from './components/Carousel';
import About from './components/About';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TwoImages from './components/TwoImages';

function App() {
  return (
    <div>
      <NavigationBar />
      <HomeCarousel />
      <About />
      <Features />
      <TwoImages />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
