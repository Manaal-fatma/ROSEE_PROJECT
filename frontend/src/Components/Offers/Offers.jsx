import React from 'react';
import './Offers.css';
import offersImage from '../Assets/offers_image2.png'; 
import offers_bg3 from '../Assets/offers_bg3.png'; // Ensure this path is correct
import { Link } from 'react-router-dom';
const Offers = () => {
  return (
    <div className="offer-container" style={{ backgroundImage: `url(${offers_bg3 })`,
          }}>
      <div className="offer-image">
        <img
          src={offersImage} 
          alt="Special Offer"
        />
      </div>
      <div className="offer-content">
       <h2>📚 Rise & Shine with Creativity</h2>
        <p>
          Discover our new range of beautifully crafted journals, planners, stationery, washi tapes and more — 
          designed to brighten your desk and boost your productivity.✨
        </p>
        <p>
          <strong>Get 20% OFF</strong> on all <strong>NEW ARRIVALS.</strong> Whether you're a writer, student, 
          or dreamer — there's a page for you here.
        </p>
        <Link to='/new-arrivals'><button className="offer-button">Shop Now</button></Link>
      </div>
    </div>
  );
};

export default Offers;
