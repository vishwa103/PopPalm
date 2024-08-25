import React from 'react'
import GalleryPop from "../assets/galleryPop.png";
import GalleryBalloons from "../assets/galleryBalloons.png";
import GalleryImageOne from "../assets/galleryImageOne.png";
import GalleryImageTwo from "../assets/galleryImageTwo.png";
import GalleryImageThree from "../assets/galleryImageThree.png";
import GalleryImageFour from "../assets/galleryImageFour.png";
import GalleryImageFive from "../assets/galleryImageFive.png";
import GalleryImageSix from "../assets/galleryImageSix.png";
import GalleryDesignRight from "../assets/galleryDesignRight.png";

const GallerySection = () => {
    return (
        <div className='gallery-section'>
             <div className='gallery-design-right'>
        <img src={GalleryDesignRight}  alt="leaf left" />
      </div>
            <div>
                <div className='subtitle'>We Create & Craft <img src={GalleryPop} alt="GalleryPop" /></div>
                <h1 className='title d-flex align-items-center position-relative'> The Experience <div className='gallery-hr' /><img src={GalleryBalloons} style={{ position: "absolute", right: 0 }} alt="GalleryBalloons" /></h1>
            </div>
            <div className='row'>
                <div className='col-md-6 my-3'>
                    <div className='d-flex flex-column gap-3' >
                        <img src={GalleryImageOne} style={{position:"relative"}} alt="GalleryImageOne" width="100%" />
                        <img src={GalleryImageTwo} style={{position:"relative"}} alt="GalleryImageTwo" width="100%" />
                        <img src={GalleryImageThree} style={{position:"relative"}} alt="GalleryImageThree" width="100%" />
                    </div>
                </div>
                <div className='col-md-6 my-3'>
                    <div className='d-flex flex-column gap-3'>
                        <img src={GalleryImageFour} style={{position:"relative"}} alt="GalleryImageFour" width="100%" />
                        <img src={GalleryImageFive} style={{position:"relative"}} alt="GalleryImageFive" width="100%" />
                        <img src={GalleryImageSix} style={{position:"relative"}} alt="GalleryImageSix" width="100%" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default GallerySection