import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import axios from 'axios';
import './CSS/Orders.css'

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {

    console.log("Backend URL:", backendUrl);
    console.log("Token being used:", token);
    

    try {
      
      if (!token) return;
      const response = await axios.post(
        backendUrl + '/api/order/userorders', {}, { headers: { Authorization: `Bearer ${token}` }});
        console.log("Order response:", response.data);

      if (response.data.success) {
         console.log("Fetched orders data:", response.data.orders);

        let allOrdersItem = [];
        response.data.orders.forEach((order, i) => {
        console.log(`Order ${i + 1} items:`, order.items);
          order.items.forEach((item) => {
            item['status'] = order.status;
            item['paymentMethod'] = order.paymentMethod;
            item['payment'] = order.payment;
            item['date'] = order.date;
            allOrdersItem.push(item);
          });
        });
        console.log("All flattened items:", allOrdersItem);
        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.error("Error fetching user orders:", error);
    }
  };

  useEffect(() => {
    if (token) {
      loadOrderData();
    }
  }, [token]);

  return (
    <div className='order-container'>
      <div className='order-title'>
        <h3>MY ORDERS</h3>
      </div>
      <div className='order-list'>
        {orderData.length === 0 ? (
          <p style={{ marginTop: '20px' }}>No orders found.</p>
        ) : (
          orderData.map((item, index) => (
              console.log("Item in order:", item),
             console.log("Image:", item.image),
            <div key={index} className='order-item'>
              <div className='order-details'>
              {item.image && Array.isArray(item.image) && item.image[0] && (
  <img src={`${backendUrl}/uploads/${item.image[0]}`} alt={item.name} />
)}


                <div>
                  <p className='order-name'>{item.name}</p>
                  <div className='order-meta'>
                    <p>{currency}{item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Size: {item.size}</p>
                  </div>
                  <p className='order-date'>Date: <span className='order-light'>{new Date(item.date).toDateString()}</span></p>
                  <p className='order-date'>Payment: <span className='order-light'>{item.paymentMethod}</span></p>
                </div>
              </div>
              <div className='order-status-wrap'>
                <div className='order-status'>
                  <p className='status-dot'></p>
                  <p className='status-text'>{item.status}</p>
                </div>
                <button onClick={() => alert(`Tracking order status: ${item.status}`)} className='track-btn'>Track Order</button>
              </div>
            </div>
             
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;
