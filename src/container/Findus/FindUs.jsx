import React from 'react';
import {SubHeading} from '../../components';
import {images} from '../../constants';
const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    
    <div className="app__wrapper_info">
      < SubHeading title="Contact" />
      <h1 className='headtext__cormorant' style={{marginBottom: '3rem'}} >Find Us</h1>
      <p className="app__findus-line p__opensans"  style={{marginBottom: '2rem'}} >1600 Amphitheatre Parkway, Toronto, ON M4X 1W7, Canada</p>
      <p className='app__findus-line2 p__cormorant' style={{marginBottom: '2rem', color:'#DCCA87'}}>Opening Hours</p>
      <p className='app__findus-line3 p__opensans' style={{marginBottom: '2rem'}}>Mon - Fri: 10:00 Am - 02:00 Am <br/>Sat - Sun: 10:00 Am - 03:00 Am</p>
      <button type='button' className='custom__button' >View More</button>
    </div>

    <div className="app__wrapper_img">
      < img src={images.findus} alt='findus' />
    </div>

  </div>
);

export default FindUs;
