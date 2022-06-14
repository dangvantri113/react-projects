import { useRef } from "react";
import Input from "../../UI/Input/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddItem(amountInputRef.current.value);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input label="Amount" type="number" id="amount" min="0" max="5" defaultValue={0} ref={amountInputRef} />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
