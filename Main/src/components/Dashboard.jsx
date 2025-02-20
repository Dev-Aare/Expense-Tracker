import React from 'react';

const Dashboard = ({ balance, income, expense }) => (
  <div className="dashboard">
    <div className="card balance">
      <h3>Balance</h3>
      <p>₹ {balance.toFixed(2)}</p>
    </div>
    <div className="card income">
      <h3>Income</h3>
      <p>₹ {income.toFixed(2)}</p>
    </div>
    <div className="card expense">
      <h3>Expense</h3>
      <p>₹ {expense.toFixed(2)}</p>
    </div>
  </div>
);

export default Dashboard;