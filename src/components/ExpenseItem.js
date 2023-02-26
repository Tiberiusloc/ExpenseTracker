import './ExpenseItem.css';
import Card from './Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
  const { title, amount } = props;

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
          <div className="expense-item__description">
            <h2>{title}</h2>
          </div>
          <div className="expense-item__price">{amount}
        </div>
    </Card>
  );
}

export default ExpenseItem;
