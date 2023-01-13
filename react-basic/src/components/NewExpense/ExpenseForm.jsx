import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  const [enteredtitle, setEnteredtitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInputState, setUserInputState] = useState({
  //   enteredtitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const changeExpenseTitle = (e) => {
    setEnteredtitle(e.target.value);

    // setUserInputState((previousState) => {
    //   return { ...previousState, enteredtitle: e.target.value };
    // });
  };
  const changeExpenseAmount = (e) => {
    setEnteredAmount(e.target.value);

    // console.log(userInputState.enteredAmount);
    // setUserInputState((previousState) => {
    //   return { ...previousState, enteredAmount: e.target.value };
    // });
  };
  const changeExpenseDate = (e) => {
    setEnteredDate(e.target.value);
    // setUserInputState((previousState) => {
    //   return { ...previousState, enteredDate: e.target.value };
    // });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredtitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(expenseData);

    props.onSaveExpenseData(expenseData);

    setEnteredAmount("");
    setEnteredDate("");
    setEnteredtitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense title</label>
          <input
            type="text"
            value={enteredtitle}
            onChange={changeExpenseTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Expense Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={changeExpenseAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={changeExpenseDate} />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
