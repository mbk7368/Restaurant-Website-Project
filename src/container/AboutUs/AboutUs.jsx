import React from 'react';
import images from '../../constants/images';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt='G letter'/>
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='spoon img' className='spoon__img'/>
        <p className='p__opensans'>Welcome to Gourmand, where culinary excellence meets warm hospitality. We are dedicated to creating a memorable dining experience, offering a fusion of flavors, fresh ingredients, and impeccable service.At Gourmand, we believe that every meal should be a culinary journey. Our talented team of chefs crafts each dish with passion and creativity, showcasing the finest local and international ingredients.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt='knife'/>
      </div>

      <div className="app__aboutus-content_history">
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='spoon img' className='spoon__img'/>
        <p className='p__opensans'>Established in 2012, Gourmand has been a beloved culinary destination for the city. Our rich history is rooted in a passion for exceptional food, attentive service, and a commitment to creating memorable dining experiences.Throughout the years, Gourmand has garnered numerous awards, solidifying our reputation as a culinary leader. We continue to draw inspiration from both traditional and contemporary flavors.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
