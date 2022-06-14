import { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const { addItem } = useContext(CartContext);

  const addItemHandler = (amount) => {
    amount = parseInt(amount)
    if(amount > 0){
      addItem(props.id, props.title, props.price, amount)

    }
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.title}</h3>
        <p className={classes.description}>{props.description}</p>
        <span className={classes.price}>${props.price}</span>
      </div>
      <div>
        <MealItemForm onAddItem={addItemHandler} />
      </div>
    </li>
  );
};

export default MealItem;
