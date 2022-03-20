import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const App = () => {
  const expensesInitial = [
    { title: "Car insurance", amount: 59.55, date: new Date(2020, 1, 20) },
    { title: "House insurance", amount: 30.11, date: new Date(2020, 1, 11) },
    { title: "Food", amount: 200.12, date: new Date(2021, 10, 2) },
    { title: "Milk", amount: 33.34, date: new Date(2019, 10, 31) },
    { title: "Electric consume", amount: 11.98, date: new Date(2021, 11, 7) },
  ];
  const [expenses, setExpenses] = useState(expensesInitial);

  const handleOnAdd = (expenseData) => {
    setExpenses([expenseData, ...expensesInitial]);
  };
  return (
    <>
      <NewExpense onAddExpense={handleOnAdd} />
      <Expenses expenses={expenses} />
    </>
  );
};

export default App;
