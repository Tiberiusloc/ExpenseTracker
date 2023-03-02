import React, { useState } from "react";

import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
  const { amount } = props;
  const [title, setTitle] = useState(props.title);

  const ButtonClick = () => {
    setTitle('Updated');
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
          <div className="expense-item__description">
            <h2>{title}</h2>
          </div>
          <div className="expense-item__price">{amount}
        </div>
        <button onClick={ButtonClick}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
