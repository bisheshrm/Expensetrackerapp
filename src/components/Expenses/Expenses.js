import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedYear, setselectedYear] = useState("2020");

  const selectYearHandler = (sYear) => {
    console.log(sYear);

    setselectedYear(sYear);
  };

  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onselectYear={selectYearHandler} />
        <ExpenseItem
          title={props.expense[0].title}
          amount={props.expense[0].amount}
          date={props.expense[0].date}
        />
        <ExpenseItem
          title={props.expense[1].title}
          amount={props.expense[1].amount}
          date={props.expense[1].date}
        />
        <ExpenseItem
          title={props.expense[2].title}
          amount={props.expense[2].amount}
          date={props.expense[2].date}
        />
        <ExpenseItem
          title={props.expense[3].title}
          amount={props.expense[3].amount}
          date={props.expense[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
