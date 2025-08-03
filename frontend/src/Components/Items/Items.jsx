// src/Components/Item/Item.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Items.css';
import { ShopContext } from '../../Context/ShopContext';
import { toast } from 'react-toastify';



const Items = ({ id, name, price, image }) => {
  const {addToCart} = useContext(ShopContext);

  const handleAddToCart = () => {
    addToCart(id);
    toast.success(`${name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  return (
    <div className="item-card">
      <Link to={`/product/${id}`}>
      <img onClick={window.scrollTo(0,0)}src={image} alt={name} className='item-image'/>
      <h3><a className='link'>{name}</a></h3>
      <p className="price">${price}</p>
      </Link>
      <button onClick={handleAddToCart} className="add-btn">Add to Cart</button>
    </div>
  );
};

export default Items;

