import React from 'react';
import { motion, useInView } from 'framer-motion';
import LeafRight from "../assets/aboutusLeftDesign.png";
import LeafLeft from "../assets/aboutusRightDesign.png";
import AboutusStar from "../assets/aboutusStar.png";
import AboutusImageOne from "../assets/aboutusImageOne.png";
import AboutusImageTwo from "../assets/aboutusImageTwo.png";
import AboutusCraker from "../assets/aboutusCraker.png";
import TextReveal from './TextReveal';


const AboutUSSection = () => {
    return (
        <motion.div className='aboutus-section'>
            <div className='aboutus-leaf-left'>
                <img src={LeafRight} alt="leaf right" />
            </div>
            <div className='aboutus-leaf-right'>
                <img src={LeafLeft} alt="leaf left" />
            </div>
            <div className='row my-3'>
                <div className='col-md-6 '>
                <TextReveal> <div className='subtitle'>Let Talk about</div></TextReveal><br/>
                   <TextReveal> <h1 className='title'> Our Story</h1></TextReveal>
                    <img src={AboutusStar} className='aboutus-star' alt="star" />
                </div>
                <div className='col-md-6'>
                    <div className='description'>
                        Founded by two friends who shared a passion for creative artistry, Pop & Palm Events began its journey with humble origins. Initially focusing on crafting memorable birthday parties for their own children, they discovered a shared talent and enthusiasm for event decor. With little formal business knowledge but a wealth of creativity and determination, they took the leap into professional event planning.
                    </div>
                </div>
            </div>
            <div className='row my-3'>
                <div className='col-md-4'>
                    <img src={AboutusImageOne} className='aboutus-image' alt="AboutusImageOne" />
                </div>
                <div className='col-md-8' style={{position:"relative"}}>
                    <img src={AboutusImageTwo} className='aboutus-image' alt="AboutusImageTwo" />
                    <img src={AboutusCraker} className='aboutus-cracker' alt="AboutusCraker" />

                </div>
            </div>
        </motion.div>
    );
}

export default AboutUSSection;
