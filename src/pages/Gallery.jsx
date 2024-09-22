import React, { useState } from 'react';

import galleryPageLeftBottom from "../assets/galleryPageLeftBottom.png";
import galleryPageRightTop from "../assets/galleryPageRightTop.png";
import GalleryPageImageOne from "../assets/GalleryPageImageOne.png";
import GalleryPageImageTwo from "../assets/GalleryPageImageTwo.png";
import GalleryPageImageThree from "../assets/GalleryPageImageThree.png";
import GalleryPageImageFour from "../assets/GalleryPageImageFour.png";
import GalleryPageImageFive from "../assets/GalleryPageImageFive.png";
import GalleryPageImageSix from "../assets/GalleryPageImageSix.png";
import GalleryPageImageSeven from "../assets/GalleryPageImageSeven.png";
import GalleryPageImageEight from "../assets/GalleryPageImageEight.png";

const categories = ['All', 'Birthday', 'Corporate Events', 'Others'];

const galleryItems = [
  {
    id: 1,
    category: 'Birthday',
    image: GalleryPageImageOne,
    title: "Princess Charm's Birthday Celebration",
    description: "A lively and colorful tropical-themed birthday party held at a private villa. The decor features bright and bold colors with plenty of greenery, including palm leaves, tropical flowers, and bamboo furniture & a custom dessert table featuring themed treats"
  },
  {
    id: 2,
    category: 'Corporate Events',
    image: GalleryPageImageTwo,
    title: "Princess Charm's Birthday Celebration",
    description: "A lively and colorful tropical-themed birthday party held at a private villa. The decor features bright and bold colors with plenty of greenery, including palm leaves, tropical flowers, and bamboo furniture & a custom dessert table featuring themed treats"
  },
  {
    id: 3,
    category: 'Corporate Events',
    image: GalleryPageImageThree,
    title: "Princess Charm's Birthday Celebration",
    description: "A lively and colorful tropical-themed birthday party held at a private villa. The decor features bright and bold colors with plenty of greenery, including palm leaves, tropical flowers, and bamboo furniture & a custom dessert table featuring themed treats"
  },
  {
    id: 4,
    category: 'Birthday',
    image: GalleryPageImageFour,
    title: "Princess Charm's Birthday Celebration",
    description: "A lively and colorful tropical-themed birthday party held at a private villa. The decor features bright and bold colors with plenty of greenery, including palm leaves, tropical flowers, and bamboo furniture & a custom dessert table featuring themed treats"
  },{
    id: 5,
    category: 'Birthday',
    image: GalleryPageImageFive,
    title: "Princess Charm's Birthday Celebration",
    description: "A lively and colorful tropical-themed birthday party held at a private villa. The decor features bright and bold colors with plenty of greenery, including palm leaves, tropical flowers, and bamboo furniture & a custom dessert table featuring themed treats"
  },{
    id: 6,
    category: 'Corporate Events',
    image: GalleryPageImageSix,
    title: "Princess Charm's Birthday Celebration",
    description: "A lively and colorful tropical-themed birthday party held at a private villa. The decor features bright and bold colors with plenty of greenery, including palm leaves, tropical flowers, and bamboo furniture & a custom dessert table featuring themed treats"
  },{
    id: 7,
    category: 'Corporate Events',
    image: GalleryPageImageSeven,
    title: "Princess Charm's Birthday Celebration",
    description: "A lively and colorful tropical-themed birthday party held at a private villa. The decor features bright and bold colors with plenty of greenery, including palm leaves, tropical flowers, and bamboo furniture & a custom dessert table featuring themed treats"
  },{
    id: 8,
    category: 'Birthday',
    image: GalleryPageImageEight,
    title: "Princess Charm's Birthday Celebration",
    description: "A lively and colorful tropical-themed birthday party held at a private villa. The decor features bright and bold colors with plenty of greenery, including palm leaves, tropical flowers, and bamboo furniture & a custom dessert table featuring themed treats"
  },
  ,{
    id: 9,
    category: 'Others',
    image: GalleryPageImageSeven,
    title: "Princess Charm's Birthday Celebration",
    description: "A lively and colorful tropical-themed birthday party held at a private villa. The decor features bright and bold colors with plenty of greenery, including palm leaves, tropical flowers, and bamboo furniture & a custom dessert table featuring themed treats"
  },{
    id: 10,
    category: 'Others',
    image: GalleryPageImageEight,
    title: "Princess Charm's Birthday Celebration",
    description: "A lively and colorful tropical-themed birthday party held at a private villa. The decor features bright and bold colors with plenty of greenery, including palm leaves, tropical flowers, and bamboo furniture & a custom dessert table featuring themed treats"
  },{
    id: 11,
    category: 'Others',
    image: GalleryPageImageOne,
    title: "Princess Charm's Birthday Celebration",
    description: "A lively and colorful tropical-themed birthday party held at a private villa. The decor features bright and bold colors with plenty of greenery, including palm leaves, tropical flowers, and bamboo furniture & a custom dessert table featuring themed treats"
  },
  {
    id: 12,
    category: 'Others',
    image: GalleryPageImageTwo,
    title: "Princess Charm's Birthday Celebration",
    description: "A lively and colorful tropical-themed birthday party held at a private villa. The decor features bright and bold colors with plenty of greenery, including palm leaves, tropical flowers, and bamboo furniture & a custom dessert table featuring themed treats"
  },
  // Add more gallery items here with different categories
];

import { Helmet } from 'react-helmet-async';
import TopToBottomReveal from '../components/TopToBottomReveal';

const Gallery = () => {

    const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);
    
    return (
        <>
            <div style={{ position: "relative" }}>
                <Helmet>
                    <title>Gallery | Pop & Palm</title>
                    <meta name='description' content='Explore our gallery showcasing vibrant themed decorations and memorable moments from past events.' />
                </Helmet>
                <div className='left-bottom'>
                    <img src={galleryPageLeftBottom} alt="LeftBottom" width="100%" />
                </div>
                <div className='right-top'>
                    <img src={galleryPageRightTop} alt="RightTop" width="100%" />
                </div>
                <section className='gallerypage' id="gallery">
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <h1 className='gallerypage-title text-center'>Welcome to Our Storyline</h1>
                        <div className='gallerypage-description text-center w-75'>
                            The Gallery section is a visually rich area showcasing a curated collection of images from past events. Each image captures the essence of the event, whether it's a beautifully decorated venue, a lively birthday party, or a sophisticated corporate gathering.
                        </div>
                    </div>
                </section>

            </div>
            <div className='my-5 mx-4'>
      <div className='gallerypage-categories'>
        {categories.map(category => (
          <div
            key={category}
            className={`gallerypage-category ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </div>
        ))}
      </div>
      
      <div className='row my-5'>
        
        {filteredItems.map((item, index) => (
          <div className='col-md-6 mb-3' key={item.id}>
            
            <div className='gallerypage-card'>
              <div className='row'>
                <div className={`col-md-6 ${index % 4 < 2 ? 'order-md-1' : 'order-md-2'}`}>
                  <div className='gallerypage-image-container'>
                    <img src={item.image} className={`${index % 4 < 2  ? 'gallerypage-leftimage': 'gallerypage-rightimage'}`} alt={item.title} width="100%" />
                  </div>
                </div>
                <div className={`col-md-6 ${index % 4 < 2 ? 'order-md-2' : 'order-md-1'}`}>
                  <div className={`${index % 4 < 2 ? 'gallerypage-leftimage-content':'gallerypage-rightimage-content'}`} >
                    <div>
                      <div className='gallerypage-double-quote mt-4'>"</div>
                      <div className='gallerypage-image-title'>{item.title}</div>
                    </div>
                    <div className='gallerypage-image-description'>
                      {item.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>  
        </>
    );
}

export default Gallery;
