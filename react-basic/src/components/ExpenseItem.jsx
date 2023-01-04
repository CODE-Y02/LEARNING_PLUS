import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "./Card";

function ExpenseItem({ title, amount, LocationOfExpenditure, date }) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <ExpenseDetails
        title={title}
        LocationOfExpenditure={LocationOfExpenditure}
        amount={amount}
      />
    </Card>
  );
}

export default ExpenseItem;
