import React from "react";
import "./ExpenseItem.css";

function ExpenseItem({ title, amount, LocationOfExpenditure, date }) {
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className="expense-item">
      <div>
        {month} {day} {year}
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <h3>{LocationOfExpenditure}</h3>
        <div className="expense-item__price">{amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
