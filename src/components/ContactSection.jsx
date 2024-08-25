import React from 'react'
import ContactImage from "../assets/ContactImage.png";
import ContactDesignLeft from "../assets/ContactDesignLeft.png";



const ContactSection = () => {
    return (
        <div className='contact-section'>
            <div className='contact-design-left'>
                        <img src={ContactDesignLeft} alt="ContactImage" />
                        </div>
            <div className='d-flex align-items-center'>
                <h1 className='title '>Get In Touch </h1>&nbsp;&nbsp; <div className='subtitle mt-5'> Expecting your calls</div>
            </div>
            <div className='contact-container'>
                <div className='row'>
                    <div className='col-md-6 my-4'>
                        <img src={ContactImage} alt="ContactImage" width="100%" height="100%"style={{objectFit:"cover" ,borderRadius:"20px"}} />
                    </div>
                    <div className='col-md-6 my-4'>
                        <div className='contact-title'>Reach out to our team</div>
                        <div className='contact-subtitle'>We are here to answer all your queries and need, leave us a message.</div>
                        <form className='mt-3'>
                            <div className='row'>
                                <div className='col-md-6 d-flex flex-column mb-3'>
                                    <label className='contact-label'>First Name</label>
                                    <input type='text' className='contact-input' placeholder='First Name'/>
                                </div>
                                <div className='col-md-6 d-flex flex-column mb-3'>
                                    <label className='contact-label'>Last Name</label>
                                    <input type='text' className='contact-input' placeholder='Last Name'/>
                                </div><div className='col-md-6 d-flex flex-column mb-3'>
                                    <label className='contact-label'>Email</label>
                                    <input type='email' className='contact-input' placeholder='Email'/>
                                </div><div className='col-md-6 d-flex flex-column mb-3'>
                                    <label className='contact-label'>Contact</label>
                                    <input type='text' className='contact-input' placeholder='Contact'/>
                                </div> 

                                <div className='col-md-12 d-flex flex-column mb-3'>
                                    <label className='contact-label'>Description</label>
                                    <textarea rows={4} type='text' className='contact-input' placeholder='Contact'/>
                                </div> 
                                <div className='col-md-12 d-flex flex-column mb-3'>
                                    <button className='button-primary'>SUBMIT INFORMATION &rarr;</button>
                                    </div>  
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ContactSection