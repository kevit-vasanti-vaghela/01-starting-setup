// import React from 'react';
// import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
   const [filteredYear, setFilteredYear] = useState('2020');

   const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  
  
   };

   const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
   });

   
    
      return ( 
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {/* {props.items.map((expense) => (
            <ExpenseItem 
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}

            />
        ))} */}
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}/>
      </Card>
       
      );
}

export default Expenses;