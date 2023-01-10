import React from "react";
import "./ExpenseForm.css";
function ExpenseForm() {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense title</label>
          <input type="text" onChange={(e) => console.log(e.target.value)} />
        </div>
        <div className="new-expense__control">
          <label>Expense Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={(e) => console.log(e.target.value)} />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
