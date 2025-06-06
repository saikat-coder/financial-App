import React from "react";

const PersonalDetailsForm = ({ formData, handleChange }) => {
  const fields = ["profession", "income", "savings", "dob"];

  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold text-indigo-600 mb-6">Personal Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.map((field) => (
          <input
            key={field}
            type={field === "dob" ? "date" : "text"}
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
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

export default PersonalDetailsForm;
