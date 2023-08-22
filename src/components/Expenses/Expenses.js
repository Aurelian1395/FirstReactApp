import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  const [filteredYear, setselectedYear] = useState("2020");
  const selectedYear = (selectedYear) => {
    setselectedYear(selectedYear);
  };
  return (
    <div>
      <ExpensesFilter selected={filteredYear} onChangeFilter={selectedYear} />
      <Card className="expenses">
        <ExpenseItem
          title={props.item[0].title}
          amount={props.item[0].amount}
          date={props.item[0].date}
        />
        <ExpenseItem
          title={props.item[1].title}
          amount={props.item[1].amount}
          date={props.item[1].date}
        />
        <ExpenseItem
          title={props.item[2].title}
          amount={props.item[2].amount}
          date={props.item[2].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
