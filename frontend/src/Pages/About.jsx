// About.jsx
import React from 'react';
import './CSS/About.css';
import About2 from '../Components/Assets/About2.png';
import About4 from '../Components/Assets/About4.png';
import About5 from '../Components/Assets/About5.png';
import About6 from '../Components/Assets/About6.png';
import About7 from '../Components/Assets/About7.png';



const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <div className="hero-text">
          <h1>Welcome to ROSÉÉ</h1>
          <p className="about-tagline">"Roséé was built with heart, but it belongs to hands that still reach for a pen over a screen."✨</p>
        </div>
        {/* <img
          src={About2}
          alt="Stationery Desk"
          className="hero-img"
        /> */}
      </section>

      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>Roséé began as more than just a project — it was a passion. As a student with zero background in tech, I decided to challenge myself by building something beautiful and meaningful from scratch. What started with curiosity turned into late nights of learning frontend, backend, and even admin functionalities, piece by piece.</p>
            <p>I wanted to create a cozy corner online where people could explore charming, pastel-themed stationery — journals, planners, pens — all with love and attention to detail. I didn’t buy templates. I didn’t copy-paste. Every button, every layout, every backend connection was built with care, code, and countless Google searches.</p>
            <p>Roséé reflects the warmth I associate with stationery — handwritten letters, scribbled dreams, and little reminders of who we are. This isn’t just a website. It’s a journey — mine, and hopefully, now yours too.</p>
          </div>
          <img
            src={About2}
            alt="Our Story"
            className="about-img animate-pop tilt-img"
          />
        </div>
      </section>

      <section className="about-section reverse">
        <div className="about-content">
          <img
            src={About4}
            alt="Vision"
            className="about-img animate-pop tilt-img"
          />
          <div className="about-text">
            <h2>Our Vision</h2>
            <p>At Roséé, we believe that stationery is more than just paper and pens — it’s a way of expressing yourself, organizing your thoughts, and adding a little beauty to your everyday. Our vision is to create a space where creativity meets comfort, where every product feels like it was picked with care — because it was.</p>
            <p>In a world full of mass-produced items, Roséé stands for thoughtful design, reliable quality, and a touch of personal charm. We want every visitor to feel like they’ve found a little corner of calm — a place where planning becomes peaceful and expression feels effortless.</p>
            <p>Whether you're a student, a planner, an artist, or someone who just loves pretty things that work, Roséé was built with you in mind. We're not just selling stationery — we're helping you write your story.</p>
          </div>
        </div>
      </section>

      <section className="about-extra">
        <h2 className="fade-in">Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card floating-card">
            <img src={About5} alt="Unique Designs" />
            <p>Exclusive pastel designs crafted with love</p>
          </div>
          <div className="feature-card floating-card delay-1">
            <img src={About7} alt="Eco Friendly" />
            <p>Eco-friendly & sustainable materials</p>
          </div>
          <div className="feature-card floating-card delay-2">
            <img src={About6} alt="Affordable" />
            <p>Beautiful. Affordable. Memorable.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
