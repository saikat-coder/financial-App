// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import PersonalDetailsForm from "../../DashboardForm.js/PersonalDetailsForm";
// import AverageExpensesForm from "../../DashboardForm.js/AverageExpensesForm";
// import GoalForm from "../../DashboardForm.js/GoalForm";

// const DashboardForm = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     profession: "",
//     income: "",
//     savings: "",
//     dob: "",
//     totalSpend: "",
//     foodDining: "",
//     utilities: "",
//     transportation: "",
//     entertainment: "",
//     healthFitness: "",
//     shopping: "",
//     miscellaneous: "",
//     goalName: "",
//     goalAmount: "",
//     goalDeadline: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Step 1: Save form data to Node.js backend
//       const response = await axios.post(
//         "http://localhost:5000/api/save-dashboard",
//         formData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );

//       if (response) {
//         alert("✅ Dashboard data saved successfully!");

//         // Step 2: Get userId from localStorage
//         const userData = JSON.parse(localStorage.getItem("user"));
//         const userId = userData?.userId;
//         console.log("Using userId:", userId);

//         if (!userId) {
//           alert("❌ User ID not found. Please log in again.");
//           return;
//         }

//         // Step 3: Call Flask backend /submit to trigger both ML models
//         const flaskRes = await fetch("http://localhost:8000/submit", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           credentials: "include",
//           body: JSON.stringify({ userId }),
//         });
//         console.log(userId);
        

//         const rawText = await flaskRes.text();
//         console.log("Raw Flask response:", rawText);

//         let data;
//         try {
//           data = JSON.parse(rawText);
//         } catch (err) {
//           console.error("❌ Invalid JSON from /submit:", rawText);
//           alert("❌ Flask service returned invalid response.");
//           return;
//         }

//         if (flaskRes.ok) {
//           alert(data.message || "✅ ML processing completed!");
//           navigate("/dashboard");
//         } else {
//           alert(data.message || "⚠️ ML processing failed.");
//         }
//       } else {
//         alert(response.data.error || "❌ Failed to save data.");
//       }
//     } catch (error) {
//       console.error("Submission error:", error);
//       alert(
//         `❌ Error: ${error.response?.data?.error || "Something went wrong. Please try again."}`
//       );
//     }
//   };

//   return (
//     <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 min-h-screen py-10 px-6 flex items-center justify-center">
//       <div className="max-w-4xl w-full bg-white shadow-2xl rounded-lg p-10">
//         <h1 className="text-5xl font-extrabold text-pink-600 text-center mb-8">
//           Dashboard Form
//         </h1>
//         <form onSubmit={handleSubmit}>
//           <PersonalDetailsForm formData={formData} handleChange={handleChange} />
//           <AverageExpensesForm formData={formData} handleChange={handleChange} />
//           <GoalForm formData={formData} handleChange={handleChange} />
//           <div className="text-center">
//             <button
//               type="submit"
//               className="px-10 py-4 bg-indigo-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-pink-600 hover:shadow-xl transition-all duration-300"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default DashboardForm;












import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PersonalDetailsForm from "../../DashboardForm.js/PersonalDetailsForm";
import AverageExpensesForm from "../../DashboardForm.js/AverageExpensesForm";
import GoalForm from "../../DashboardForm.js/GoalForm";

const DashboardForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    profession: "",
    income: "",
    savings: "",
    dob: "",
    totalSpend: "",
    foodDining: "",
    utilities: "",
    transportation: "",
    entertainment: "",
    healthFitness: "",
    shopping: "",
    miscellaneous: "",
    goalName: "",
    goalAmount: "",
    goalDeadline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Save form data to Node.js backend
      const response = await axios.post(
        "http://localhost:5000/api/save-dashboard",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response) {
        alert("✅ Dashboard data saved successfully!");

        // Step 2: Get userId from localStorage
        const userData = JSON.parse(localStorage.getItem("user"));
        const userId = userData?.userId;
        console.log("Using userId:", userId);

        if (!userId) {
          alert("❌ User ID not found. Please log in again.");
          return;
        }

        // Step 3: Call Flask backend /submit to trigger ML models
        const flaskRes = await fetch("http://localhost:8000/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ userId }),
        });

        let flaskData;
        try {
          const rawText = await flaskRes.text();
          flaskData = JSON.parse(rawText);
          console.log("✅ Flask ML response parsed:", flaskData);
        } catch (err) {
          console.error("❌ Invalid JSON from /submit:", err);
          alert("❌ Flask service returned an invalid response.");
          return;
        }

        // ✅ Store data in localStorage for use in dashboard page
        localStorage.setItem("flaskData", JSON.stringify(flaskData));

        // ✅ Navigate to dashboard
        navigate("/dashboard");
      } else {
        alert(response.data.error || "❌ Failed to save data.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert(
        `❌ Error: ${error.response?.data?.error || "Something went wrong. Please try again."}`
      );
    }
  };

  return (
    <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 min-h-screen py-10 px-6 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-lg p-10">
        <h1 className="text-5xl font-extrabold text-pink-600 text-center mb-8">
          Dashboard Form
        </h1>
        <form onSubmit={handleSubmit}>
          <PersonalDetailsForm formData={formData} handleChange={handleChange} />
          <AverageExpensesForm formData={formData} handleChange={handleChange} />
          <GoalForm formData={formData} handleChange={handleChange} />
          <div className="text-center">
            <button
              type="submit"
              className="px-10 py-4 bg-indigo-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-pink-600 hover:shadow-xl transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DashboardForm;
