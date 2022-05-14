import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setselectedYear] = useState("2020");

  const selectYearHandler = (sYear) => {
    // console.log(sYear);
    setselectedYear(sYear);
  };
  const filteredExpenses = props.expense.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );
  console.log(filteredExpenses);

  // console.log(props.expense[0].date.getFullYear());
  // console.log(props.expense);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onselectYear={selectYearHandler}
        />
        {/* <ExpenseItem title={props.expense[0].title} amount = {props.expense[0].amount} date={props.expense[0].date} /> */}
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
        
      </Card>
    </div>
  );
};

export default Expenses;
