import React from 'react';
import {images} from '../../constants';
import {SubHeading} from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>

    <div className="app__wrapper_img app__wrapper_img-reverse chef_img">
      <img  src={images.chef} alt='chef'/>
    </div>

    <div className="app__wrapper_info">

      <SubHeading title="Chef's Word"/>
      <h1 className='headtext__cormorant'>What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt='quote'/>
          <p className='p__opensans'>We believe in the power of food to bring people together, to inspire joy, and to create lasting memories.</p>
        </div>
        <p className="p__opensans">At Gourmand, our passion is crafting exceptional dining experiences that delight the senses and nourish the soul. We believe in using the freshest, locally sourced ingredients to create dishes that burst with flavor and showcase the vibrant culinary traditions of our region. Our talented chefs take pride in their artistry, infusing each plate with creativity and attention to detail.</p>
      </div>

        <div className="app__chef-sign">
        <p className='kevin-luo'>Mahmoud Kanaan</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt='sign'/>
        </div>

    </div>

  </div>
);

export default Chef;
