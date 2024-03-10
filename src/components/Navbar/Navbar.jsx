import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
  <div className='App__navbar'>
    <div className="App__navbar-logo">
      <img src={images.gericht} alt='app logo'/>
    </div>
    <ul className='App__navbar-links'>
      <li><a className='p__opensans' href='#home'>Home</a></li>
      <li><a className='p__opensans' href='#about'>Abuot</a></li>
      <li><a className='p__opensans' href='#menu'>Menu</a></li>
      <li><a className='p__opensans' href='#awards'>Awards</a></li>
      <li><a className='p__opensans' href='#contact'>Contact</a></li>
    </ul>
    <div className="App__navbar-login">
      <a href='#login' className="p__opensans">Login / Register</a>
      <div />
      <a href='/' className="p__opensans">Book Table</a>
    </div>
    <div className="App__navbar-smallscreen">
      <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=>setToggleMenu(true)}/>
      {toggleMenu && (
        <div className="App__navbar-smallscreen_overlay flex__center slide-bottom">
        <MdOutlineRestaurantMenu color='#fff' className='overlay__close' fontSize={27} onClick={ () => {setToggleMenu(false)} }/>
        <ul className='App__navbar-smallscreen_links'>
          <li><a className='' href='#Home'>Home</a></li>
          <li><a className='' href='#About'>Abuot</a></li>
          <li><a className='' href='#Menu'>Menu</a></li>
          <li><a className='' href='#Awards'>Awards</a></li>
          <li><a className='' href='#Contact'>Contact</a></li>
        </ul>
        </div>
      )}

    </div>
  </div>
)}

export default Navbar;
