import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Auto comprata",
    amount: 12900.0,
    date: new Date(2022, 12, 14),
  },
  {
    id: "e2",
    title: "Microonde",
    amount: 125.0,
    date: new Date(2022, 10, 25),
  },
  {
    id: "e3",
    title: "Lavatrice",
    amount: 400.0,
    date: new Date(2022, 1, 10),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
