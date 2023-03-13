import React, { useState } from "react";

import ExpenseDisplay from "./components/Expenses/ExpenseDisplay";
import NewExpense from "./components/NewExpense/NewExpense";
import './components/Expenses/ExpenseItem.css';

const dummyExpenses = [
    {
      id: 'e1',
      title: 'Add a new expense',
      amount: 0.01,
      date: new Date(),
    },
  ];

function App() {

  const [expenses, setExpenses] = useState(dummyExpenses)


  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, prevExpenses];
    } );
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseDisplay expenses={expenses} />
    </div>
  );
}

export default App;
