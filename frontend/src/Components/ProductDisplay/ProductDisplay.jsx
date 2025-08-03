import React, {useContext, useState} from 'react'
import './ProductDisplay.css'   
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    
    const {product} = props;
    const {addToCart} = useContext(ShopContext); 
    const [selectedImgIdx, setSelectedImgIdx] = useState(0);
    if (!product) return <div>Loading...</div>;

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
           {product.image.map((imgUrl, idx) => (
            <img 
            key={idx} 
            src={imgUrl} 
            alt={product.name} 
            onClick={() => setSelectedImgIdx(idx)}
            style={{ cursor: 'pointer', border: selectedImgIdx === idx ? '2px solid #333' : 'none' }}
            />
        ))}
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' 
            src={product.image[selectedImgIdx]} alt={product.name} />
        </div>
      </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className='productdisplay-price'>${product.price}</div>
            
            </div>
            
            <div className="productdisplay-right-description">{product.description}</div>
            
             <button onClick={()=>{addToCart(product._id)}}className='productdisplay-add-to-cart'>Add to Cart</button>
            <p className='productdisplay-right-category'><span>Category :</span>{product.category}</p>
            <p className='productdisplay-right-category'><span>Tags :</span>Modern Latest</p>
    </div>
    </div>
  )
}

export default ProductDisplay;
