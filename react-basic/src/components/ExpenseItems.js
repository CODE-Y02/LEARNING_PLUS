import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseItems() {
  return (
    <div>
      ExpenseItems
      <ExpenseItem name="food" amount={10} />
      <ExpenseItem name="petrol" amount={20} />
      <ExpenseItem name="movies" amount={1500} />
    </div>
  );
}

export default ExpenseItems;
