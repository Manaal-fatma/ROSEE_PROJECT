import React, { useContext, useState } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
// import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Items from '../Components/Items/Items'
// import { useParams } from 'react-router-dom'

const ShopCategory = (props) => {
  const {products, searchQuery} = useContext(ShopContext);
  // const { category } = useParams();
  const [sortOption, setSortOption] = useState('');
  

const filteredProducts = products?.filter(
  (item) =>
    item?.category?.toLowerCase?.() === props.category.toLowerCase() &&
   item?.name?.toLowerCase().includes(searchQuery.toLowerCase())
);

let sortedProducts = [...filteredProducts];

if (sortOption === "lowToHigh") {
  sortedProducts.sort((a, b) => a.price - b.price);
} else if (sortOption === "highToLow") {
  sortedProducts.sort((a, b) => b.price - a.price);
} else if (sortOption === "az") {
  sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
} else if (sortOption === "za") {
  sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
}


 
  return (
    <div className='shop-category'>

      <div className="shopcategory-indexSort">
      
        <div className="shopcategory-sort">
           <label htmlFor="sort-select">Sort by:</label>
            <select
              id="sort-select"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="">Default</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
              <option value="az">Name: A–Z</option>
              <option value="za">Name: Z–A</option>
            </select>
        </div>
      </div>


      <div className="shopcategory-products">
          {sortedProducts.map((product) => (

           <Items
            key={product._id}
            id ={product._id}
            name={product.name}
            price={product.price}
            image={product.image[0]}
             />
             ))}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory;