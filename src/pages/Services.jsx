import React from 'react';
import HeroSection from '../components/HeroSection';
import GalleryImageFive from "../assets/galleryImageFive.png";
import galleryPageLeftBottom from "../assets/galleryPageLeftBottom.png";
import galleryPageRightTop from "../assets/galleryPageRightTop.png";
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Event Planning",
    description: "From start to finish, we meticulously manage every detail of your event. Our team is dedicated to making your vision a reality!",
    image: GalleryImageFive,
  },
  {
    title: "Venue Decoration",
    description: "Transform your venue with our stunning decoration services. We create beautiful atmospheres tailored to your unique theme!",
    image: GalleryImageFive,
  },
  {
    title: "Catering Services",
    description: "Delight your guests with our gourmet catering options. We offer diverse menus that cater to various tastes and dietary needs.",
    image: GalleryImageFive,
  },
  {
    title: "Entertainment Coordination",
    description: "Engage your guests with our entertainment options. From live music to DJs, we ensure your event is lively and memorable!",
    image: GalleryImageFive,
  },
  {
    title: "Photography & Videography",
    description: "Capture every precious moment with our professional services. We tell your story through stunning photography and videography.",
    image: GalleryImageFive,
  },
  {
    title: "On-the-Day Coordination",
    description: "Relax and enjoy your event while we manage all logistics. Our team ensures everything runs smoothly for your special day!",
    image: GalleryImageFive,
  },
];

const Services = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <section className='gallerypage' id="gallery">
        <div className='left-bottom'>
          <img src={galleryPageLeftBottom} alt="LeftBottom" width="100%" />
        </div>
        <div className='right-top'>
          <img src={galleryPageRightTop} alt="RightTop" width="100%" />
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <h1 className='gallerypage-title text-center'>Services</h1>
          <div className='gallerypage-description text-center w-75'>
            At Pop & Palm, we offer a comprehensive range of services to bring your vision to life. Whether you’re planning an intimate gathering or a grand celebration, our dedicated team is here to ensure every detail is perfect.
          </div>
        </div>
      </section>

      <div className='servicespage-section'>
        <div className='row my-3 h-100'>
          {services.map((service, index) => (
            <div className='col-md-6 col-lg-4 my-3' key={index}>
              <div className='servicepage-card'>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='servicepage-card-image-container'>
                      <img src={service.image} width='100%' alt={service.title} className='servicepage-card-image' />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <h2 className='servicepage-card-title'>{service.title}</h2>
                    <p className='servicepage-card-description'>{service.description}</p>
                    <Link to="/" onClick={scrollToTop}>
                      <button className='button-primary'>View Gallery &rarr;</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
