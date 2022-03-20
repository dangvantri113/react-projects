import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
  };
  const changeAmountHandler = (event) => {
    setAmount(event.target.value);
  };
  const changeDateHandler = (event) => {
    setDate(event.target.value);
  };

  const submitExpenseHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    setDate("");
    setAmount("");
    setTitle("");
    setIsOpenForm(false);

    props.onAddExpense(expenseData);
  };

  let addExpenseFormContent = (
    <button onClick={() => setIsOpenForm(true)}>New Expense</button>
  );

  if (isOpenForm) {
    addExpenseFormContent = (
      <form onSubmit={submitExpenseHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={title} onChange={changeTitleHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min={0.1}
              step={0.1}
              value={amount}
              onChange={changeAmountHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min={"07-10-1997"}
              max={"07-10-2097"}
              value={date}
              onChange={changeDateHandler}
            />
          </div>
        </div>
        <div className="new-expense_actions">
          <div className="new-expense_action">
            <button type="submit">Add </button>
            <button
              onClick={(event) => {
                event.preventDefault();
                setIsOpenForm(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    );
  }

  return addExpenseFormContent;
};

export default ExpenseForm;
