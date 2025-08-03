import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { ShopContext } from '../../Context/ShopContext';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [saleIndex, setSaleIndex] = useState(0);
  const { getTotalCartItems } = useContext(ShopContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { searchQuery, setSearchQuery } = useContext(ShopContext);
  const location = useLocation();
  const { isLoggedIn, logout } = useContext(ShopContext);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const saleMessages = [
    'Summer Sale: Up to 50% off on all stationery!',
    'New Arrivals just in: Check out our latest journals.',
    'Exclusive Offer: Buy 2 get 1 free on select planners.',
    'Back to School Sale: Special discounts on Art Supplies.',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSaleIndex((prevIndex) => (prevIndex + 1) % saleMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Pages where search bar should appear
 const showSearch = ['/new-arrivals', '/popular', '/shop', '/journals-planners', '/washi-tapes', '/art-supplies', '/stationery'].includes(location.pathname);

  return (
    <nav className="navbar-container">
      {/* Top Sliding Banner */}
      <div className="navbar-top-sale">
        <div className="sale-message" key={saleIndex}>
          {saleMessages[saleIndex]}
        </div>
      </div>

      {/* Main Navbar */}
      <div className="main-navbar">
        {/* Left: Search Bar */}
        <div className="search-container">
          {showSearch && (
            <div className="search-container">
            <input
               type="text"
               placeholder="Search stationery..."
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
            />
              <button aria-label="Search">&#128269;</button>
         </div>
          )}

        </div>

        {/* Center: Logo */}
        <div className="logo-container">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1 className="logo-text">ROSÉÉ</h1>
          </Link>
        </div>

        {/* Right: Cart + Login/Signup */}
        <div className="auth-cart-section">
          <Link style={{ textDecoration: 'none' }} to="./cart">
            <div className="cart-icon">
              🛒
              <span className="cart-count">{getTotalCartItems()}</span>
            </div>
          </Link>

          <div className="auth-buttons">
                {isLoggedIn ? (
                 <button className="logout-btn" onClick={logout}>LOGOUT</button>
                ) : (
                  
                    <button onClick={() => navigate("/login")} className="login-btn">LOGIN</button>
               
                )}
           </div>
        </div>
      </div>

      {/* Hamburger Menu (visible on mobile) */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Bottom Category Navbar */}
      <div className={`navbar-category ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/shop" className="nav-link">
          Shop
        </Link>
        <Link to="/journals-planners" className="nav-link">
          Journals & Planners
        </Link>
        <Link to="/washi-tapes" className="nav-link">
          Washi Tapes
        </Link>
        <Link to="/art-supplies" className="nav-link">
          Art Supplies
        </Link>
        <Link to="/stationery" className="nav-link">
          Stationery
        </Link>
        <Link to="/new-arrivals" className="nav-link">
          Newest Arrivals
        </Link>
        <Link to="/popular" className="nav-link">
          Popular
        </Link>
         <Link to="/orders" className="nav-link">
          Your Orders
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
