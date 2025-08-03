import React, {useContext,} from 'react';
import './Popular.css';
// import productData from '../Assets/data';
// import productData1 from '../Assets/data1';
import Items from '../Items/Items';
import { ShopContext } from '../../Context/ShopContext';


const Popular = () => {
 
const { searchQuery } = useContext(ShopContext);
const {products} = useContext(ShopContext);

const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
  product.category === "journals-planners"
);

const filteredProducts1 = products.filter((product) =>
  product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
  product.category === "washi-tapes"
);

const filteredProducts2 = products.filter((product) =>
  product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
  product.category === "art-supplies"
);


  return (
    <div className="popular-container">
      <h2 className="popular-title">🌟POPULAR IN JOURNALS</h2>
      <hr/>
      <div className="popular-items">
        {filteredProducts.slice(0, 4).map((product) => (
          <Items
            key={product._id}
            id ={product._id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>

     

      <h2 className="popular-title">🌟POPULAR IN WASHI TAPES</h2>
      <hr/>
      <div className="popular-items">
        {filteredProducts1.slice(0, 4).map((product) => (
          <Items 
            key={product._id}
            id ={product._id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    
  
      
      <h2 className="popular-title">🌟POPULAR IN ART SUPPLIES</h2>
      <hr/>
      <div className="popular-items">
        {filteredProducts2.slice(0, 4).map((product) => (
          <Items
            key={product._id}
            id ={product._id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
