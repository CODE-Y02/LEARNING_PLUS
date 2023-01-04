import React from "react";

function ExpenseItem({ name, amount }) {
  return (
    <div>
      {name} Rs {amount}
    </div>
  );
}

export default ExpenseItem;
