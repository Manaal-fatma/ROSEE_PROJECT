import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";

const List = ({ token }) => {
  const [listProducts, setListProducts] = useState([]);

  const fetchListProducts = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");

      if (response.data.success) {
        setListProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(response.data.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.info(response.data.message);
        await fetchListProducts();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    fetchListProducts();
  }, []);

  return (
  <>
    <div className="flex flex-col gap-2 px-2 md:px-4 py-2">
      {/* List Table Title */}
      <div className="hidden md:grid grid-cols-[0.5fr_1fr_1.5fr_0.5fr_0.5fr_0.5fr_0.2fr] items-center py-2 px-3 border bg-[#f2f5f4] text-[17px] font-medium text-gray-700 rounded-md shadow-sm">
        <b>Image</b>
        <b>Name</b>
        <b>Description</b>
        <b>Category</b>
        {/* <b>Sub Category</b> */}
        <b>Price</b>
        <b className="text-center">Action</b>
      </div>

      {/* Display Products */}
      {listProducts.map((item, index) => (
        <div
          className="grid grid-cols-[0.5fr_1fr_1.5fr_0.5fr_0.5fr_0.5fr_0.2fr] md:grid-cols-[0.5fr_1fr_1.5fr_0.5fr_0.5fr_0.5fr_0.2fr] items-center gap-2 py-2 px-3 border border-gray-200 rounded-md text-sm text-gray-700 bg-[#fbfdfc] hover:bg-[#f1f4f3] transition-colors duration-200 shadow-sm"
          key={index}
        >
          <img className="w-12 rounded-md shadow-sm" src={item.image[0]} alt="Product" />
          <p className="text-left font-medium">{item.name}</p>
          <p className="text-left text-gray-600">{item.description}</p>
          <p className="font-semibold text-gray-600">{item.category}</p>
          {/* <p>{item.subCategory}</p> */}
          <p className="text-green-700 font-semibold">{currency(item.price)}</p>
          <p
            onClick={() => removeProduct(item._id)}
            className="font-bold text-white bg-red-400 hover:bg-red-500 rounded-full cursor-pointer text-center w-6 h-6 flex items-center justify-center transition-colors duration-200"
          >
            X
          </p>
        </div>
      ))}
    </div>
  </>
);
};

export default List;
