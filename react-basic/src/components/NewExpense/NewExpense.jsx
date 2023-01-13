import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Date.now(),
    };

    // console.log(expenseData);
    props.onAddExpense(expenseData);

    setShowForm(false);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {!showForm && (
        <button
          onClick={() => {
            setShowForm(true);
          }}
        >
          Add New Expense
        </button>
      )}

      {showForm && (
        <ExpenseForm
          onCancel={closeForm}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
