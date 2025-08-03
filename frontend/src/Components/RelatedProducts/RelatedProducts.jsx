import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import Items from '../Items/Items';
import './RelatedProducts.css';

const RelatedProducts = ({ category }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
  

  if (!category) return;

  if (products.length > 0) {
    let productsCopy = products.slice();

    productsCopy = productsCopy.filter((item) =>
      item.category?.toLowerCase() === category.toLowerCase()
    );

    
    setRelated(productsCopy.slice(0, 4));
  }
}, [products, category]);

 

  return (
  <div className="related-products-container">
    <div className="related-products-heading">
      <h2>RELATED PRODUCTS</h2>
    </div>
    <div className="related-products-grid">
      {related.length === 0 ? (
        <p>No related products found.</p>) : (related.map((item) => (
          <Items
            key={item._id}
            id={item._id}
            name={item.name}
            image={item.image[0]}
            price={item.price}
          />
        ))
      )}
    </div>
  </div>
);

};

export default RelatedProducts;
