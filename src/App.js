import ExpenseItem from "./components/ExpenseItem";
import './components/ExpenseItem.css';

function App() {
  return (
    <div className="app-container">
      <div className="start">
        <h2>Let's get started!</h2>
        <ExpenseItem />
      </div>
    </div>
  );
}

export default App;
