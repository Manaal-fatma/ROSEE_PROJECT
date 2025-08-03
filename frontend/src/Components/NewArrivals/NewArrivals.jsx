import React, {useContext} from 'react'
import './NewArrivals.css'
import Items from '../Items/Items';
import { ShopContext } from '../../Context/ShopContext';



const NewArrivals = () => {

  const { products,searchQuery } = useContext(ShopContext);

  // Sort products by date (newest first)
  const sortedProducts = [...products].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Filter by search query if needed
  const filteredProducts = sortedProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Limit to 8 new arrivals (or any number you want)
  const newArrivals = filteredProducts.slice(0, 8);



  return (
    <div className="new-arrivals">
      <h2 className="new-arrivals-title">*NEW ARRIVALS*</h2>
      <p className="new-arrivals-subtitle">Check out our latest collections</p>
      <div className="new-arrivals-description">
        <p>Discover the latest additions to our collection, featuring unique designs and high-quality materials. Perfect for those who love to stay ahead of the trends!</p>
      </div>

      <div className="new-arrivals-items">
         {newArrivals.map((product) => (
          <Items
            key={product._id}
            id={product._id}
            name={product.name}
            price={product.price}
            image={product.image[0]}
          />
        ))}
      </div>
    </div>
  )
}

export default NewArrivals;
