import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import TestimonialDesignLeft from "../assets/TestimonialDesignLeft.png";
import TestimonialDesignRight from "../assets/TestimonialDesignRight.png";
import TestimonialImageOne from "../assets/TestimonialImageOne.png";
import TestimonialImageTwo from "../assets/TestimonialImageTwo.png";
import TestimonialImageThree from "../assets/TestimonialImageThree.png";
import TestimonialUserLine from "../assets/TestimonialUserLine.png";
import LeftToRightReveal from './LeftToRightReveal';
import VisibleReveal from './VisibleReveal';

const testimonials = [
    {
        image: TestimonialImageOne,
        title: "Corporate Gala",
        description: `“We hired this company to decorate our annual corporate gala, and they exceeded all expectations. The attention to detail was impeccable, and the decor perfectly reflected our brand's image. The event was a huge success, and our clients were thoroughly impressed. We look forward to working with them again for future events.”`,
        username: " Jane D., HR Manager, Helfa Corporation",
    },
    {
        image: TestimonialImageTwo,
        title: "Princess Charm’s Birthday",
        description: `“I wanted my daughter's birthday party to be extra special, and they delivered beyond my wildest dreams! The themed decorations were vibrant and fun, and every little detail was taken care of. My daughter and her friends had an amazing time, and the memories we made that day will last a lifetime. I highly recommend their services for any special occasion!”`,
        username: " Emily R & Charm",
    },
    {
        image: TestimonialImageThree,
        title: "Mr & Mrs. Just Married",
        description: `“Our wedding day was nothing short of magical, thanks to the incredible team behind our decor. They listened to every detail of our vision and brought it to life in the most breathtaking way. From the floral arrangements to the reception setup, everything was perfect. Our guests couldn't stop raving about how beautiful everything looked. We can't thank them enough for making our day unforgettable!”`,
        username: "Sarah & Mark",
    },
    // Add more testimonials here
];

const TestimonialSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const controls = useAnimation();

    useEffect(() => {
        const interval = setInterval(() => {
            controls.start({ opacity: 0 })
                .then(() => {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
                    controls.start({ opacity: 1 });
                });
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, [controls]);

    const testimonial = testimonials[currentIndex];

    const handleIndicatorClick = (index) => {
        setCurrentIndex(index);
        controls.start({ opacity: 0 }).then(() => controls.start({ opacity: 1 }));
    };

    return (
        <div className='testimonial-section my-5'>
            <div className='testimonial-design-left'>
                <img src={TestimonialDesignLeft} alt="TestimonialDesignLeft" />
            </div>
            <div className='testimonial-design-right'>
                <img src={TestimonialDesignRight} alt="TestimonialDesignRight" />
            </div>
            <LeftToRightReveal>
            <div className='d-flex align-items-center'>
                <h1 className='title '>Testimonials </h1>&nbsp;&nbsp; <div className='subtitle mt-5'> Here from our Clients</div>
            </div>
            </LeftToRightReveal>
            <VisibleReveal>
            <div className='testimonial-container'>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={controls}
                    transition={{ duration: 1 }} // Fade duration
                    className='row'
                >
                    <div className='col-md-5'>
                        <div className='    '>
                        <img src={testimonial.image} alt="Testimonial" className='testimonial-image' width="100%" />
                    </div>
                    </div>
                    <div className='col-md-7 py-4'>
                        <div className='testimonial-content'>
                            <div>
                                <h1 className='testimonial-title'>{testimonial.title}</h1>
                                <div className='testimonial-description'>
                                    {testimonial.description}
                                </div>
                            </div>
                            <div className='d-flex align-items-center gap-2'>
                                <img src={TestimonialUserLine} alt='TestimonialUserLine' height='8px' />
                                <div className='testimonial-username'>
                                    {testimonial.username}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                
            </div>
            <div className='indicators'>
                    {testimonials.map((_, index) => (
                        <div
                            key={index}
                            className={`indicator ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => handleIndicatorClick(index)}
                        />
                    ))}
                </div>
                </VisibleReveal>
        </div>
    );
}

export default TestimonialSection;
