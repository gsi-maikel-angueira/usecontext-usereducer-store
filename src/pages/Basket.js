import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { StoreContext } from "../context-and-reducer/StoreContext";
import BasketProduct from "../components/BasketProduct";

const Basket = () => {
  const { products, total } = useContext(StoreContext);
  return (
    <div>
      <Navbar />
      <div className="flex flex-row items-center justify-between mt-2 py-6 px-10 text-xl font-medium">
        <h3>Your Basket</h3>
        <p>Total: ${total.toFixed(2)}</p>
      </div>
      {products.map((product, i) => (
        <BasketProduct item={product} key={i} />
      ))}
      ;
    </div>
  );
};

export default Basket;
