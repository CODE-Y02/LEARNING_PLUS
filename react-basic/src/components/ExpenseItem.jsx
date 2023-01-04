import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

function ExpenseItem({ title, amount, LocationOfExpenditure, date }) {
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <ExpenseDetails
        title={title}
        LocationOfExpenditure={LocationOfExpenditure}
        amount={amount}
      />
    </div>
  );
}

export default ExpenseItem;
