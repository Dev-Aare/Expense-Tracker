import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState('Food');

  const categories = ['Food', 'Transport', 'Entertainment', 'Bills', 'Other'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;
    addTransaction({
      description,
      amount: parseFloat(amount),
      type,
      category: type === 'expense' ? category : "-", // Only include category for expenses
      date: new Date().toLocaleDateString(),
    });
    setDescription('');
    setAmount('');
    if (type === 'expense') setCategory('Food'); // Reset category only for expense
  };

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <h2 className='text-center font-bold'>Add Transaction</h2>

      <div>
        <label htmlFor="description" className='font-semibold'>Title:</label>
        <input
          id="description"
          type="text"
          placeholder="Enter Title (Eg: Salary/Party)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="amount" className='font-semibold'>Amount:</label>
        <input
          id="amount"
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          step="0.01" // Allows decimal values
        />
      </div>

      <div>
        <label htmlFor="type" className='font-semibold'>Transaction Type:</label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      {type === 'expense' && (
        <div>
          <label htmlFor="category" className='font-semibold'>Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      )}

      <button type="submit">Add</button>
    </form>
  );
};

export default TransactionForm;