import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  let expensesContent = (
    <h2 className="expenses-list__fallback">No expense found!</h2>
  );

  if (props.expenses.length > 0) {
    expensesContent = props.expenses.map((expense, index) => (
      <ExpenseItem
        key={index}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return <div className="expenses-list">{expensesContent}</div>;
};

export default ExpensesList;
