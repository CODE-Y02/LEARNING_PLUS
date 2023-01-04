import React from "react";

function ExpenseItem({ name, amount, LocationOfExpenditure }) {
  return (
    <div className="expense-item">
      <div>JAN 4 2023</div>
      <div className="expense-item__description">
        <h2>{name}</h2>
        <div className="expense-item__price">{amount}</div>
        {LocationOfExpenditure}
      </div>
    </div>
  );
}

export default ExpenseItem;
