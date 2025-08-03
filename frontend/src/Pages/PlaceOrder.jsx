import React, {  useState, useEffect, useContext } from 'react';
import './CSS/PlaceOrder.css';
import { ShopContext } from '../Context/ShopContext';
import stripe_logo from '../Components/Assets/stripe_logo.png';
import razorpay_logo from '../Components/Assets/razorpay_logo.png';
import axios from  'axios';
// import Items from '../Components/Items/Items';
import { Link } from 'react-router-dom';

const PlaceOrder = () => {
  const[method,setMethod]=useState('cod');
  const { getTotalCartAmount, products,  cartItems } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
 
  // State for shipping info
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zip: ''
  });




  // State for selected address
  const [selectedAddress, setSelectedAddress] = useState(null);

  // Load saved address on mount
  useEffect(() => {
   const email = localStorage.getItem("userEmail");
  if (email) {
    const saved = localStorage.getItem(`shippingInfo-${email}`);
    if (saved) {
      setShippingInfo(JSON.parse(saved));
      setSelectedAddress(JSON.parse(saved));
    }
  }
}, []);

  // Handle input change
  const handleChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  // Save address on submit
  const handleSaveAddress = (e) => {
    e.preventDefault();
   const email = localStorage.getItem("userEmail");
  if (email) {
    localStorage.setItem(`shippingInfo-${email}`, JSON.stringify(shippingInfo));
    setSelectedAddress(shippingInfo);
  }
  };


   const formatCartItems = () => {
    const formatted = [];

    for (const productId in cartItems) {
      const quantity = cartItems[productId];
      if (quantity > 0) {
        const product = products.find(
          (item) => String(item._id) === String(productId)
        );

        if (product) {
          formatted.push({
            name: product.name,
            price: product.price,
            quantity: quantity,
          });
        }
      }
    }

    return formatted;
  };


  // Place order
const handlePlaceOrder = async () => {
   const finalCart = formatCartItems(); 
   const token = localStorage.getItem("userToken"); // ✅ now this will work

   try {
    const updatedCart = finalCart.map(item => ({
  ...item,
  image: item.image || [], // Make sure image exists (you can default to [] if unsure)
}));
console.log("Final cart with images:", finalCart)
      const response = await axios.post("http://localhost:4000/api/order/place", {
      items: updatedCart,
      amount: totalAmount, // total price
      address: shippingInfo, // address object
      paymentMethod: method // e.g., "cod", "stripe"
  },
    {
        headers: {
          Authorization: `Bearer ${token}`
        }
    }
);
  console.log("Order placed successfully", response.data);
    } catch (err) {
      console.error("Error placing order", err);
    }
  };
  // navigate('/place-order');


  return (
    <div className="placeorder">
      <div className="placeorder-container">
        {/* Top: Saved Address */}
        {selectedAddress && (
          <div className="saved-address">
            <h3>Selected Shipping Address</h3>
            <p>{selectedAddress.firstName} {selectedAddress.lastName}</p>
            <p>{selectedAddress.email}</p>
            <p>{selectedAddress.phone}</p>
            <p>{selectedAddress.street}, {selectedAddress.city}, {selectedAddress.state}, {selectedAddress.zip}</p>
            <button onClick={() => setSelectedAddress(null)}>Edit Address</button>
          </div>
        )}

        {/* Left: Form */}
        {!selectedAddress && (
          <div className="placeorder-left">
            <h2>Shipping Information</h2>
            <form className="placeorder-form" onSubmit={handleSaveAddress}>
              <input type="text" name="firstName" placeholder="First Name" value={shippingInfo.firstName} onChange={handleChange} required />
              <input type="text" name="lastName" placeholder="Last Name" value={shippingInfo.lastName} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email Address" value={shippingInfo.email} onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Phone Number" value={shippingInfo.phone} onChange={handleChange} required />
              <input type="text" name="street" placeholder="Street Address" value={shippingInfo.street} onChange={handleChange} required />
              <input type="text" name="city" placeholder="City" value={shippingInfo.city} onChange={handleChange} required />
              <input type="text" name="state" placeholder="State" value={shippingInfo.state} onChange={handleChange} required />
              <input type="text" name="zip" placeholder="ZIP / Postal Code" value={shippingInfo.zip} onChange={handleChange} required />
              <button type="submit">Save Address</button>
            </form>
          </div>
        )}

        {/* Right: Order Summary */}
        <div className="placeorder-right">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <p>Subtotal</p>
            <p>${totalAmount}</p>
          </div>
          <div className="summary-row">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div className="summary-row total">
            <strong>Total</strong>
            <strong>${totalAmount}</strong>
          </div>
           <div className="payment-container">
      <h2 className="payment-title">
        PAYMENT <span className="highlight">METHOD</span>
      </h2>

      <div className="payment-options">
        {/* <div
          className={`payment-option ${method === "stripe" ? "selected" : ""}`}
          onClick={() => setMethod("stripe")}
        >
          <span className={`radio-button ${method === "stripe" ? "active" : ""}`}></span>
          <img src={stripe_logo} alt="Stripe" className="payment-logo" />
        </div>

        <div
          className={`payment-option ${method === "razorpay" ? "selected" : ""}`}
          onClick={() => setMethod("razorpay")}
        >
          <span className={`radio-button ${method === "razorpay" ? "active" : ""}`}></span>
          <img src={razorpay_logo} alt="Razorpay" className="payment-logo" />
        </div> */}

        <div
          className={`payment-option ${method === "cod" ? "selected" : ""}`}
          onClick={() => setMethod("cod")}
        >
          <span className={`radio-button ${method === "cod" ? "active" : ""}`}></span>
          <p className="cod-text">CASH ON DELIVERY</p>
        </div>
      </div>
    </div>
          <Link to='/orders'><button
            onClick={handlePlaceOrder}
            className="placeorder-btn"
            disabled={!selectedAddress}>Place Order</button></Link>
          
        </div>
      </div>
      </div>
 
  );
};

export default PlaceOrder;