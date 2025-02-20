import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import SpendingChart from "./components/SpendingChart";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  // Load transactions from localStorage
  useEffect(() => {
    const savedTransactions =
      JSON.parse(localStorage.getItem("transactions")) || [];
    setTransactions(savedTransactions);
    calculateSummary(savedTransactions);
  }, []);

  // Save transactions to localStorage
  useEffect(() => {
    if (transactions.length !== 0) {
      localStorage.setItem("transactions", JSON.stringify(transactions));
      calculateSummary(transactions);
    }
  }, [transactions]);

  const calculateSummary = (trans) => {
    let totalIncome = 0;
    let totalExpense = 0;
    trans.forEach((t) => {
      if (t.type === "income") totalIncome += t.amount;
      else totalExpense += t.amount;
    });
    setIncome(totalIncome);
    setExpense(totalExpense);
    setBalance(totalIncome - totalExpense);
  };

  const addTransaction = (transaction) => {
    setTransactions([...transactions, { ...transaction, id: Date.now() }]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <div className="app">
      <Header />
      <div className="container">
        <Dashboard balance={balance} income={income} expense={expense} />
        <SpendingChart transactions={transactions} />
        <TransactionForm addTransaction={addTransaction} />
        <TransactionList
          transactions={transactions}
          deleteTransaction={deleteTransaction}
        />
      </div>
    </div>
  );
}

export default App;
