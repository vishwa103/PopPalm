import React from 'react'
import logo from '../assets/logo.svg';
import FooterInstagram from '../assets/FooterInstagram.png';
import FooterX from '../assets/FooterX.png';
import FooterFacebook from '../assets/FooterFacebook.png';
import FooterPopAndPalm from '../assets/FooterPopAndPalm.png';


const Footer = () => {
  return (
    <div className='footer-section'>
        <div className='footer-hr'/>
        <div className='row'>
          <div className='col-md-3 my-3'>
        <img
            src={logo}
            alt="Logo"
            style={{ height: '60px' }}
          />
          </div>
          <div className='col-md-6 my-4'>
            <div className='footer-links'>
          <a className='footer-link' href="#home">Home</a>
          <a className='footer-link' href="#about">About Us</a>
          <a className='footer-link' href="#services">Services</a>
          <a className='footer-link' href="#gallery">Gallery</a>
          <a className='footer-link' href="#contact">Contact Us</a>
          </div>
          </div>
          <div className='col-md-3 my-4'>
            <div className='d-flex gap-3  justify-content-sm-end justify-content-start align-items-end'>
            <img src={FooterInstagram} alt='instagram'/>
            <img src={FooterX} alt='instagram'/>
            <img src={FooterFacebook} alt='instagram'/>
            </div>
          </div>
          <div className='col-md-6 my-2'>
            <div className='footer-text'>All Copyrights and License are Claimed @2024</div>
          </div>
          <div className='col-md-6 d-flex justify-content-sm-end my-2'>
            <div className='footer-text'>Terms & Conditions</div>
          </div>
          <div className='col-md-12'>
            <img src={FooterPopAndPalm} alt='FooterPopAndPalm'  width="100%"/>
          </div>
          </div>
    </div>
  )
}

export default Footer