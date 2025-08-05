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
      <h2 className="popular-title">🌟POPULAR IN JOURNALS(*^_^*)</h2>
      <p className="emotive-line">“For your thoughts, your dreams, your chaos — these pages are waiting just for you. Let your heart rest here.💗”</p>
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

     

      <h2 className="popular-title">🌟POPULAR IN WASHI TAPES(*^▽^*)</h2>
      <p className="emotive-line">“Little rolls of love — to wrap your world with you-ness, one beautiful detail at a time.💗”</p>
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
  
      
      <h2 className="popular-title">🌟POPULAR IN ART SUPPLIES(❁´◡`❁)</h2>
      <p className="emotive-line">“You don’t just make art — you leave pieces of yourself in every stroke. These supplies? They’re here to honor that.💗”</p>
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
