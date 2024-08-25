import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutUSSection from '../components/AboutUSSection';
import ServicesSection from '../components/ServicesSection';
import GallerySetion from '../components/GallerySection';
import TestimonialSection from '../components/TestimonialSection';
import ContactSection from '../components/ContactSection';  
import { Helmet } from 'react-helmet-async';

const Home = () => {
  
  return (
    <>
    <Helmet>
      <title>Pop & Palm </title>
      <meta name='description' content='Exceptional event planning services with vibrant themed decorations. Turn your special occasion into unforgettable memories with Pop & Palm.' />
    </Helmet>
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
