// const ValuesSection = () => {
//     const values = [
//       {
//         title: "Innovation",
//         description:
//           "Leveraging AI technology to provide accurate and insightful financial advice tailored to your needs.",
//       },
//       {
//         title: "Security",
//         description:
//           "Ensuring your financial data is safe with end-to-end encryption and robust privacy measures.",
//       },
//       {
//         title: "Empowerment",
//         description:
//           "Helping you make informed financial decisions to achieve your goals confidently.",
// /      },
//     ];
  
// /     return (
//      <section className="bg-white py-12 px-6 lg:px-20">
//       <div className="container mx-auto">
//           <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
//             What We Stand For
//        </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {values.map((value, index) => (
//              <div
//                 key={index}
//                  className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition-shadow duration-300"
//               >
//                 <h3 className="text-xl font-bold text-blue-900 mb-2">
//                   {value.title}
//                 </h3>
//                 <p className="text-gray-700">{value.description}</p>
//               </div>
//              ))}
//         </div>
//        </div>
//      </section>
//      );
// //   };
  
// //   export default ValuesSection;
  
import React from "react";

const ValuesSection = () => {
  const transactions = [
    { id: 1, category: "Food", amount: 50, date: "2025-01-15" },
    { id: 2, category: "Transportation", amount: 20, date: "2025-01-14" },
    { id: 3, category: "Entertainment", amount: 30, date: "2025-01-13" },
  ];

  const goals = [
    { id: 1, name: "Save for Vacation", progress: 75 },
    { id: 2, name: "Emergency Fund", progress: 50 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          AI Financial Management Dashboard
        </h1>

        {/* Expense Tracking */}
        <div className="mb-6 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Recent Transactions
          </h2>
          <ul>
            {transactions.map((txn) => (
              <li
                key={txn.id}
                className="flex justify-between items-center mb-3 p-3 border-b border-gray-200"
              >
                <span className="text-gray-700">{txn.category}</span>
                <span className="text-gray-500">${txn.amount}</span>
                <span className="text-gray-400">{txn.date}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Goal Setting */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Financial Goals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {goals.map((goal) => (
              <div
                key={goal.id}
                className="bg-gray-50 p-4 border rounded-lg shadow-sm"
              >
                <h3 className="font-semibold text-gray-600">{goal.name}</h3>
                <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                  <div
                    className="bg-green-500 h-4 rounded-full"
                    style={{ width: `${goal.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  {goal.progress}% achieved
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;