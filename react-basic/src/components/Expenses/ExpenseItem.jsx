import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = ({ title, amount, LocationOfExpenditure, date }) => {
  const [titleState, setTitle] = useState(title);
  const [amountState, seAmount] = useState(amount);

  // console.log("EXPENSE item is rendered");

  const clickHandler = () => {
    console.log("clicked");

    setTitle("new Title");
  };

  const add100toAmount = () => {
    seAmount(amountState + 100);
  };

  const deleteExpense = (event) => {
    let ele = event.target.parentElement;
    // console.log(ele);
    ele.remove();
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <ExpenseDetails
        title={titleState}
        LocationOfExpenditure={LocationOfExpenditure}
        amount={amountState}
      />
      <button onClick={clickHandler}>Change Title </button>
      <button onClick={deleteExpense}>Delete</button>
      <button onClick={add100toAmount}>Add 100$</button>
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
