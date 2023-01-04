import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseItems.css";

function ExpenseItems() {
  let LocationOfExpenditure = "nagpur";
  return (
    <div>
      ExpenseItems
      <ExpenseItem
        name="food"
        amount={10}
        LocationOfExpenditure={LocationOfExpenditure}
      />
      <ExpenseItem
        name="petrol"
        amount={20}
        LocationOfExpenditure={LocationOfExpenditure}
      />
      <ExpenseItem name="movies" amount={1500} LocationOfExpenditure="mumbai" />
    </div>
  );
}

export default ExpenseItems;
