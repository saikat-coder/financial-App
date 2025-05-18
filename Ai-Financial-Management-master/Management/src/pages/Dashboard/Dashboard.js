import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

const Dashboard = ({ formData }) => {
  const {
    profession,
    income,
    savings,
    dob,
    totalSpend,
    foodDining,
    utilities,
    transportation,
    entertainment,
    healthFitness,
    shopping,
    miscellaneous,
    goalName,
    goalAmount,
    goalDeadline,
  } = formData;

  // Bar Graph Data
  const barData = {
    labels: ['Food & Dining', 'Utilities', 'Transportation', 'Entertainment', 'Health & Fitness', 'Shopping', 'Miscellaneous'],
    datasets: [
      {
        label: 'Expenses (₹)',
        data: [foodDining, utilities, transportation, entertainment, healthFitness, shopping, miscellaneous],
        backgroundColor: ['#1E90FF', '#FF7F50', '#32CD32', '#FFD700', '#FF4500', '#6A5ACD', '#40E0D0'],
        borderWidth: 1,
      },
    ],
  };

  // Pie Chart Data
  const pieData = {
    labels: ['Food & Dining', 'Utilities', 'Transportation', 'Entertainment', 'Health & Fitness', 'Shopping', 'Miscellaneous'],
    datasets: [
      {
        data: [foodDining, utilities, transportation, entertainment, healthFitness, shopping, miscellaneous],
        backgroundColor: ['#1E90FF', '#FF7F50', '#32CD32', '#FFD700', '#FF4500', '#6A5ACD', '#40E0D0'],
        borderWidth: 1,
      },
    ],
  };

  // Goal Progress Percentage
  const goalProgress = Math.min((savings / goalAmount) * 100, 100);

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* User Info Section */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-blue-800 mb-4">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-700">Personal Details</h2>
              <p><strong>Profession:</strong> {profession}</p>
              <p><strong>Income:</strong> ₹{income}</p>
              <p><strong>Savings:</strong> ₹{savings}</p>
              <p><strong>DOB:</strong> {dob}</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-700">Goal</h2>
              <p><strong>Goal Name:</strong> {goalName}</p>
              <p><strong>Goal Amount:</strong> ₹{goalAmount}</p>
              <p><strong>Deadline:</strong> {goalDeadline}</p>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-blue-600 h-4 rounded-full"
                    style={{ width: `${goalProgress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-1">{goalProgress.toFixed(2)}% Progress</p>
              </div>
            </div>
          </div>
        </div>

        {/* Graph Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Expense Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Monthly Expenses (Bar Graph)</h3>
              <Bar data={barData} />
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Expense Distribution (Pie Chart)</h3>
              <Pie data={pieData} />
            </div>
          </div>
        </div>

        {/* Additional Info or Insights */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Insights</h2>
          <p className="text-gray-600">
            Based on your current expenses and savings, you are on track to achieve your goal by the deadline. Try to optimize
            your expenses in categories like <strong>Shopping</strong> and <strong>Entertainment</strong> to save more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
