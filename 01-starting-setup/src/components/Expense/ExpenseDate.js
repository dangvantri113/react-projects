import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const expenseDay = props.date.toLocaleDateString("en", { day: "2-digit" });
  const expenseMonth = props.date.toLocaleDateString("en", { month: "long" });
  const expenseYear = props.date.toLocaleDateString("en", { year: "numeric" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{expenseMonth}</div>
      <div className="expense-date__day">{expenseDay}</div>
      <div className="expense-date__year">{expenseYear}</div>
    </div>
  );
};

export default ExpenseDate;
