import React, { useState } from "react";

import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import './ExpenseDisplay.css';
import Card from "../UI/Card";

function ExpenseDisplay(props) {

  const [filteredYear, setFilteredYear] = useState('all');
  const [filteredExpenses, setFilteredExpenses] = useState(props.expenses);

  const filterChangeHandler = selectedYear => {
    console.log(selectedYear);
    if (selectedYear === 'all') {
      setFilteredYear(selectedYear);
      setFilteredExpenses(props.expenses);
    } else {
      setFilteredYear(selectedYear);
      const filteredExpense = props.expenses.filter(
        expense => expense.date.getFullYear().toString() === selectedYear
      );
      setFilteredExpenses(filteredExpense);
    }
  }


return (
  <div>
    <Card className="expenses">
      <ExpenseFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler} 
      />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  </div>
  );
}

export default ExpenseDisplay;