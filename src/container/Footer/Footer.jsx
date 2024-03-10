import React from 'react';
import {FooterOverlay, Newsletter} from '../../components';
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';
import {images} from '../../constants';
import './Footer.css';


const titly = `"The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others."`


const Footer = () => 
(
 <div className="app__footer  ">
   < FooterOverlay />
   < Newsletter />

    <div className="footer app__bg">

        <div className="subFooterSquare contactUs">
          <h1 className='contactUs-title'>Contact Us</h1>
          <p className='p__opensans'>123 Yonge Street, Toronto, ON M5H 2N2, Canada<br/>+966 57 636 6939<br/>+966 57 636 6939</p>
        </div>

        <div className="subFooterSquare logo">
          <img src={images.gericht} alt='app logo' style={{width: "250px"}} />
          <p className='p__opensans'>{titly}</p>
          <img src={images.spoon} alt='spoon' className='spoon__img2'/>
          <div className="icons">
          < FiFacebook className='icon'/>
          < FiTwitter className='icon'/>
          < FiInstagram  className='icon'/>
          </div>
        </div>

        <div className="subFooterSquare workingHours">
            <h1 className='workingHours-title'>Working Hours</h1>
            <p className='p__opensans'>Monday-Friday:<br/>08:00 Am - 12:00 Am<br/>Saturday-Sunday:<br/>07:00 Am - 11:00 Pm</p>
        </div>

    </div>




    <div className="trademark app__bg">
    <p className='p__opensans' >2021 Gericht. All Rights Reserved.</p>
    </div>
  </div>
)
export default Footer;




