import React, { useState } from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  totalPrice: 0,
  addItem: () => {},
  removeItem: () => {},
});

export const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItemHandler = (id, name, price, amount) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    const item = items[itemIndex];
    let newItems = [];  
    if (item !== undefined) {
      const updatedItem = { ...item, amount: item.amount + amount };
      newItems = [...items];
      newItems[itemIndex] = updatedItem;
    } else {
      newItems = [
        ...items,
        { id: id, name: name, price: price, amount: amount },
      ];
    }

    setItems(newItems);
    setTotalAmount((totalAmount) => totalAmount + amount);
    setTotalPrice((totalPrice) => totalPrice + price * amount);
  };

  const removeItemHandler = (id) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    const item = items[itemIndex];
    let newItems = [];
    if (item.amount !== 1) {
      const updatedItem = { ...item, amount: item.amount - 1 };
      newItems = [...items];
      newItems[itemIndex] = updatedItem;
    } else {
      newItems = items.filter(item => item.id !== id);
    }

    setItems(newItems);
    setTotalAmount((totalAmount) => totalAmount - 1);
    setTotalPrice((totalPrice) => totalPrice + item.price);
  };

  return (
    <CartContext.Provider
      value={{
        items: items,
        totalAmount: totalAmount,
        totalPrice: totalPrice,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
