import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
     <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122.)</div>
     </div> 

        <div className="descriptionbox-description">
            <p>
                An E-Commerce website is an online platform that allows businesses to sell products or services directly to consumers over the internet. It provides a convenient and efficient way for customers to browse, select, and purchase items from the comfort of their own homes. E-commerce websites typically feature product listings, shopping carts, secure payment gateways, and user-friendly interfaces to enhance the shopping experience. They can range from small online stores to large marketplaces, catering to various industries and customer needs. 
            </p>
            <p>
                 E-Commerce websites typically display products or services with detailed descriptions, images, and prices. Customers can add items to their virtual shopping carts, proceed to checkout, and make payments using various methods. These websites often include features like  customer reviews, and personalized recommendations to enhance the shopping experience. 
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox;
