import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutUSSection from '../components/AboutUSSection';
import ServicesSection from '../components/ServicesSection';
import GallerySetion from '../components/GallerySection';
import TestimonialSection from '../components/TestimonialSection';
import ContactSection from '../components/ContactSection';  

const Home = () => {
  
  return (
    <>
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
    <GallerySetion/>
    </section>

    <TestimonialSection/>

    <section id="contact">
    <ContactSection/>
    </section>

    </>
  );
}

export default Home;
