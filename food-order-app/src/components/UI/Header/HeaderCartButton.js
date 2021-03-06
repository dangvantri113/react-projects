import { useContext } from "react";
import CartIcon from "../../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const {totalAmount} = useContext(CartContext);
  console.log(totalAmount);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon} >
        <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalAmount}</span>
    </button>
  );
};

export default HeaderCartButton;
