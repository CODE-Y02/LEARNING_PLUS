import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = ({ title, amount, LocationOfExpenditure, date }) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <ExpenseDetails
        title={title}
        LocationOfExpenditure={LocationOfExpenditure}
        amount={amount}
      />
    </Card>

    // THIS happen with JSX under the hood
    // React.createElement(
    //   "div",
    //   { className: "expense-item" },
    //   React.createElement(ExpenseDate, { date: date }),
    //   React.createElement(ExpenseDetails, {
    //     title: title,
    //     LocationOfExpenditure,
    //     amount,
    //   })
    // )
  );
};

export default ExpenseItem;
