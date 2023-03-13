import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import './ExpenseDisplay.css';
import Card from "../UI/Card";

function ExpenseDisplay(props) {
  
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

return (
  <div>
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {props.expenses.map(expense =>  <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />)}
    </Card>
  </div>
  );
}

export default ExpenseDisplay;