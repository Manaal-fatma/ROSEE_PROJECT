import React from 'react'
import './Footer.css'   
import instagram_icon from '../Assets/instagram_icon.png';
import pinterest_icon from '../Assets/pinterest_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <p>ROSÉÉ</p>
    </div>
    <ul className="footer-links">
        {/* <li>Company</li> */}
        <Link to='/shop'><li>Home</li></Link>
        {/* <li>Offices</li> */}
        <Link to='/about' ><li>About</li> </Link>      
        <Link to='/contact'><li>Contact</li></Link>
    </ul>
    <div className="footer-social-icons">
        <div className="footer-icons-container">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={pinterest_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
        </div>
    </div>
    <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Rights Reserved</p>
    </div>
  </div>
  )
}

export default Footer;
