import React from 'react'
import ServicesCrown from "../assets/servicesCrown.png";


const ServicesSection = () => {
  return (
    <div className='services-section my-5'>
      <div className='d-flex flex-column '>
        <img src={ServicesCrown} className='services-crown' width="400px" alt="ServicesCrown" />
        <div className='d-flex align-items-center'>
          <h1 className='title '>Our Services </h1>&nbsp;&nbsp; <div className='subtitle mt-5'> Expertise</div>
        </div>
      </div>

      <div className='row'>
        <div className='col-md-12 col-lg-4 my-3'>
          <div className='d-flex align-items-center gap-3'>
            <h1 className='service-number'>01</h1>
            <div className='service-title'>Themed Private Celebrations</div>
          </div>
          <div className='service-subtitle '>
            Unique themed decor and planning for private parties and family events.
          </div>
          <div className='service-hr' />
          <div className='my-5'>
            <div className='service-item-title'>
              Ceremony Decor:
            </div>
            <div className='service-item-descrition'>
              Customizing altar arrangements, aisle runners, and seating layouts to match the wedding theme.
            </div>
            <div className='service-item-hr'/>
          </div>
          <div className='my-5'>
            <div className='service-item-title'>
              Ceremony Decor:
            </div>
            <div className='service-item-descrition'>
              Customizing altar arrangements, aisle runners, and seating layouts to match the wedding theme.
            </div>
            <div className='service-item-hr'/>
          </div>

        </div>
        <div className='col-md-12 col-lg-4 my-3'>
          <div className='d-flex align-items-center gap-3'>
            <h1 className='service-number'>02</h1>
            <div className='service-title'>Exclusive Corporate Event</div>
          </div>
          <div className='service-subtitle '>
          Specialized planning for high-end executive meetings, client dinners and small corporate events.
          </div>
          <div className='service-hr' />
          <div className='my-5'>
            <div className='service-item-title'>
            Themed Decorations:
            </div>
            <div className='service-item-descrition'>
            Designing and executing themed decor for birthday parties, tailored to the interests of the celebrant.
             </div>
            <div className='service-item-hr'/>
          </div>
          <div className='my-5'>
            <div className='service-item-title'>
            Cake and Dessert Table Styling:
            </div>
            <div className='service-item-descrition'>
            Styling cake and dessert tables with coordinated linens, stands, and decor.
             </div>
            <div className='service-item-hr'/>
          </div>

        </div>
        <div className='col-md-12 col-lg-4 my-3'>
          <div className='d-flex align-items-center gap-3'>
            <h1 className='service-number'>03</h1>
            <div className='service-title'>Event Furniture Rentals</div>
          </div>
          <div className='service-subtitle '>
          Stylish and comfortable furniture options for private and corporate events.
          </div>
          
          <div className='service-hr' />
          <div className='my-5'>
            <div className='service-item-title'>
            Brand-Aligned Decor:
            </div>
            <div className='service-item-descrition'>
            Ensuring that all decor elements reflect the company’s brand identity and event objectives.
            </div>
            <div className='service-item-hr'/>
          </div>
          <div className='my-5'>
            <div className='service-item-title'>
            Stage and Presentation Design:
            </div>
            <div className='service-item-descrition'>
            Creating attractive and functional stage setups for speakers, awards, and performances.
            </div>
            <div className='service-item-hr'/>
          </div>

        </div>


      </div>

    </div>
  )
}

export default ServicesSection