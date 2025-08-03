import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// place order using cod
const placeOrder = async (req, res) => {
     
    try {
        const { items, amount, address,paymentMethod} = req.body;
      const orderData = {
        userId:req.userId,
        items,
        amount,
        address,
        paymentMethod: paymentMethod|| "COD",
        payment: false,
        date: Date.now(),
        
      };

      const newOrder = new orderModel(orderData);
      await newOrder.save();

      await userModel.findByIdAndUpdate(req.userId, {cartData:{}});
        
      res.json({success:true, message: "Order placed successfully" });
     }
     catch (error) {
        console.error("Error placing order:", error);
        res.status(500).json({success:false, message: "Internal server error" });
        
    }
}

// place order using stripe
const placeOrderStripe = async (req, res) => {

}

// place order using razorpay
const placeOrderRazorpay = async (req, res) => {

}

//All orders for admin panel
const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({})
              
            res.json({ success: true, orders });
        
    } catch (error) {
        console.error("Error fetching all orders:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
        
    }

    }

//user order for frontend
const userOrders = async (req, res) => {
    try {
        const  userId  = req.userId;
        const orders = await orderModel.find({ userId })
        res.json({ success: true, orders });
        
    } catch (error) {
        console.error("Error fetching user orders:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

    }

    //update order status for admin panel
const updateStatus = async (req, res) => {
const {orderId, status} = req.body;
 await orderModel.findByIdAndUpdate(orderId, {status}, {new: true})
 .then((updatedOrder) => {}
 )
}
export {
    placeOrder, placeOrderRazorpay, placeOrderStripe,
    allOrders, userOrders, updateStatus}