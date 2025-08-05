import React, {useContext} from 'react'
import './CartItems.css';   
import { ShopContext } from '../../Context/ShopContext';    
import cart_cross_icon from '../Assets/cart_cross_icon.png';
import {toast} from 'react-toastify';

const CartItems = () => {
    const{getTotalCartAmount,products,cartItems,removeFromCart, navigate} = useContext(ShopContext);
    const Amount = getTotalCartAmount();
    const {isLoggedIn} = useContext(ShopContext);
    

    const handleCheckout = () => {
    if (!isLoggedIn) {
      toast.error("Please log in to proceed to checkout!", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }
    const isCartEmpty = Object.values(cartItems).every(quantity => quantity === 0);

  if (isCartEmpty) {
    toast.warn("Please add items to the cart before proceeding!", {
      position: "top-right",
      autoClose: 2000,
    });
    return;
  }
    navigate('/place-order');
  };

  
  return (
    <div className='cartitems'>
         <div className="cartitems-format-main">
            <p>Products</p>
            <p>Titles</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
         </div> 
         <hr />

       {products.map((e)=> {
        if(cartItems[e._id]>0)
        {
           return  <div key={e._id}>
                      <div className="cartitems-format cartitems-format-main ">
                        <img src={e.image[0]} alt="" className='carticon-product-icon' />
                        <p>{e.name}</p>
                        <p>${e.price}</p>
                        <button className='cartitems-quantity'>{cartItems[e._id]}</button>
                        <p>${e.price*cartItems[e._id]}</p>
                        <img className='cartitems-remove-icon' src={cart_cross_icon} onClick={()=>{removeFromCart(e._id)}} alt="" />
                      </div>
                     <hr />
                   </div>
        }
        return null;
       })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>CART TOTALS</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${Amount}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${Amount}</h3>
            </div>
          </div>
          <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promocode, Enter it here.</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='promo code'/>
            <button>Submit</button>
          </div>
        </div>
       </div>
    </div>
  )
}

export default CartItems;

 