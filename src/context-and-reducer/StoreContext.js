import { createContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";

export const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToBasket = (product) => {
    const updateBasket = state.products;
    updateBasket.push(product);

    updatePrice(updateBasket);

    dispatch({
      types: "add",
      payload: updateBasket,
    });
  };

  const removeToBasket = (product) => {
    const updateBasket = state.products.filter((p) => p.name !== product.name);

    updatePrice(updateBasket);
    dispatch({
      types: "remove",
      payload: updateBasket,
    });
  };

  const updatePrice = (products) => {
    const total = products.reduce((s, item) => s + item.price, 0);
    dispatch({
      types: "update price",
      payload: total,
    });
  };

  const value = {
    total: state.total,
    products: state.products,
    addToBasket,
    removeToBasket,
    updatePrice,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
