import React from "react";

const GoalForm = ({ formData, handleChange }) => {
  const fields = ["goalName", "goalAmount", "goalDeadline"];

  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold text-indigo-600 mb-6">Goal</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.map((field) => (
          <input
            key={field}
            type={field === "goalDeadline" ? "date" : "text"}
            name={field}
            placeholder={field.replace(/([A-Z])/g, " $1")}
            className="border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-purple-500 transition-all"
            value={formData[field]}
            onChange={handleChange}
            required
          />
        ))}
      </div>
    </div>
  );
};

export default GoalForm;
