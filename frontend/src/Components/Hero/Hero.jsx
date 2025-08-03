import React from 'react';
import './Hero.css';
import heroImg from '../Assets/hero3.jpg'; // Make sure this path is correct

const Hero = () => {
  return (
    <div className="hero"  
      style={{ backgroundImage: `url(${heroImg})`,
      }}
    >
      <div className="hero-content">
        <h1>Welcome to ROSÉÉ</h1>
        <p>"Roséé stands for every quiet creator who dared to dream on paper</p>
        <p> — and then built something real."✨</p>
        {/* <button>Shop Now</button> */}
      </div>
    </div>
  );
};

export default Hero;
