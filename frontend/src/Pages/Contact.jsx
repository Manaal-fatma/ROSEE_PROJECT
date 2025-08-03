import React from 'react';
import './CSS/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Get in Touch</h2>
      <p className="contact-subtext">We'd love to hear from you — whether it’s a question, feedback, or just to say hello!</p>

      <form className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <p>Email: <a href="mailto:support@rosee.com">support@rosee.com</a></p>
        <p>Instagram: <a href="https://instagram.com"> @rosee_stationery</a></p>
        <p>Location: India</p>
      </div>
    </div>
  );
};

export default Contact;
