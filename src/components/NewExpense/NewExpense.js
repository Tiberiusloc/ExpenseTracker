import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import './NewExpense.css';

const NewExpense = (props) => {

  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    showAddExpenseModalHandler();
  };

  const showAddExpenseModalHandler = () => {
    setShowAddExpenseModal(!showAddExpenseModal)
  };

  return (
    <div>
      {showAddExpenseModal  
      &&
      <div className="new-expense">
        <ExpenseForm onShowAddExpenseModal={showAddExpenseModalHandler} onSaveExpenseData={saveExpenseDataHandler} />
      </div>
      }
      {!showAddExpenseModal &&
      <div className="new-expense">
        <button onClick={showAddExpenseModalHandler}>Add New Expense</button>
      </div>
      }
    </div>
  );
};

export default NewExpense;