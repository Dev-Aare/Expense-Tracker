import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const SpendingChart = ({ transactions }) => {
  const expenseData = transactions.filter((t) => t.type === 'expense');
  const categories = [...new Set(expenseData.map((t) => t.category))];
  const dataByCategory = categories.map((cat) =>
    expenseData
      .filter((t) => t.category === cat)
      .reduce((sum, t) => sum + t.amount, 0)
  );

  const data = {
    labels: categories,
    datasets: [
      {
        data: dataByCategory,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  return (
    <div className="chart">
      <h2>Spending by Category</h2>
      <Pie data={data} />
    </div>
  );
};

export default SpendingChart;