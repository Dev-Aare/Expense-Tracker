import React from 'react';

const TransactionList = ({ transactions, deleteTransaction }) => (
  <div className="transaction-list">
    <h2>Transaction History</h2>
    {transactions.length === 0 ? (
      <p>No transactions yet.</p>
    ) : (
      <ul>
        {transactions.map((t) => (
          <li key={t.id} className={t.type}>
            <span>{t.description}</span>
            <span>₹ {t.amount.toFixed(2)}</span>
            <span>{t.category}</span>
            <span>{t.date}</span>
            <button onClick={() => deleteTransaction(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default TransactionList;