import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import { useContext } from "react";
import CartContext from "../store/cart-context";

const Cart = (props) => {
  const { items, totalPrice, removeItem, addItem } = useContext(CartContext);

  const decreaseItemHandler = (id) => {
    removeItem(id);
  };
  const increaseItemHandler = (id, name, price) => {
    addItem(id, name, price, 1);
  };
  const listItems = items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      onIncreaseItem = {() => increaseItemHandler(item.id,item.name,item.price)}
      onDecreaseItem = {() => decreaseItemHandler(item.id)}
    />
  ));

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes["cart-items"]}>{listItems}</ul>
      <div className={classes.total}>
        <span>Total</span>
        <span>${totalPrice}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
