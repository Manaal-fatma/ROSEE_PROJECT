import React, { createContext, useEffect } from "react" ;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const ShopContextProvider = (props) => {
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    const currency = "$"; // or "$", depending on your app
    const token = localStorage.getItem('userToken');

    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState([]);
    const [cartItems,setCartItems] = useState(() => {

      

      const email = localStorage.getItem("userEmail");
      if (email) {
      const localData = localStorage.getItem(`cartItems-${email}`);
      try {
      return localData ? JSON.parse(localData) : {};
      } catch (err) {
      localStorage.removeItem(`cartItems-${email}`);
      return {};
      }
  }



    const localData = localStorage.getItem("cartItems");
  try {
    return localData ? JSON.parse(localData) : {};
  } catch (err) {
    console.error("Invalid JSON in cartItems:", localData);
    localStorage.removeItem("cartItems"); // clear corrupted data
    return {};
  }
});
   const navigate = useNavigate();

   useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(process.env.REACT_APP_BACKEND_URL + "/api/product/all");
        setProducts(res.data.products || []);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };
    fetchProducts();
  }, []);

    const [isLoggedIn, setIsLoggedIn] = useState(() => {
  return !!localStorage.getItem('userToken');
});


   useEffect(() => {
  const email = localStorage.getItem("userEmail");
  if (email && isLoggedIn) {
    localStorage.setItem(`cartItems-${email}`, JSON.stringify(cartItems));
  }
}, [cartItems, isLoggedIn]);

  useEffect(() => {
  const handleLoginStatus = () => {
    const token = localStorage.getItem('userToken');
    setIsLoggedIn(!!token);
  };

  window.addEventListener('storage', handleLoginStatus);
  handleLoginStatus(); // call it once on mount

  return () => {
    window.removeEventListener('storage', handleLoginStatus);
  };
}, []);


  const login = (token, email) => {
    localStorage.setItem("userToken", token);
  localStorage.setItem("userEmail", email);
  const savedCart = localStorage.getItem(`cartItems-${email}`);
  setCartItems(savedCart ? JSON.parse(savedCart) : {});
  setIsLoggedIn(true);
  navigate("/");

  };

  const logout = () => {
  localStorage.removeItem("userToken");
   localStorage.removeItem("cartItems"); 
  localStorage.removeItem("userEmail");
  setIsLoggedIn(false);
  setCartItems({});
  navigate("/login");

  };


    
    const addToCart = (itemId) => {


      setCartItems((prev) => ({ ...prev,[itemId]: (prev[itemId]||0)+1,}))
    }

    const removeFromCart = (itemId) => {
      setCartItems((prev) => ({ ...prev,[itemId]:prev[itemId]-1}));
    }

    const getTotalCartAmount = () => {
      let totalAmount = 0;
      Object.entries(cartItems).forEach(([id, quantity]) => {
      if (quantity > 0) {
      const product = products.find((item) => String(item._id) === String(id));
      if (product) { // Defensive check!
        totalAmount += product.price * quantity;
      }
    }
  });
      return totalAmount; // <-- Move this outside the loop
    }

    const getTotalCartItems = () => {
     let totalItems = 0;
     for (const item in cartItems) 
    {
      if(cartItems[item]>0)
      {
        totalItems += cartItems[item];
      }
    }
     return totalItems;
    }

    const contextValue = {getTotalCartItems,getTotalCartAmount,products,addToCart,removeFromCart, navigate,searchQuery, setSearchQuery,isLoggedIn, login, logout, cartItems, setCartItems, backendUrl,
  token,
  currency };

    return (
         <ShopContext.Provider value={contextValue}>
           {props.children}
          </ShopContext.Provider>
    )
}

export default ShopContextProvider;
export const ShopContext = createContext();