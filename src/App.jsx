import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HeroSection from './components/HeroSection';
import AboutUSSection from './components/AboutUSSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import TestimonialSection from './components/TestimonialSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className='global-style'>
      <Header/>
      <section id="home">
    <HeroSection/>
    </section>

    <section id="about">
    <AboutUSSection/>
    </section>

    <section id="services">
    <ServicesSection/>
    </section>

    <section id="gallery">
    <GallerySection/>
    </section>

    <TestimonialSection/>

    <section id="contact">
    <ContactSection/>
    </section>
    
    <Footer/>

    </div> 
  )
}

export default App
