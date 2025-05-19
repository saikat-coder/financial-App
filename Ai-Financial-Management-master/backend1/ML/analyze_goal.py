# from flask import Flask, request, jsonify
# from pymongo import MongoClient
# from bson import ObjectId
# from datetime import datetime
# from math import ceil
# from flask_cors import CORS
# from flask_cors import cross_origin

# app = Flask(__name__)

# # Enable CORS for frontend origin with credentials support
# CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}}, supports_credentials=True)

# # MongoDB connection
# mongo_client = MongoClient("mongodb://localhost:27017")
# db = mongo_client["management"]
# expenses_collection = db["userdatas"]
# dash_collection = db["goals"]

# @app.route('/analyze-goal', methods=['POST'])
# @cross_origin(origin='http://localhost:3000', supports_credentials=True)
# def analyze_goal_progress():
#     try:
#         data = request.json
#         print("📦 Goal Analysis Request Data:", data)

#         user_id = data.get("userId")
#         if not user_id:
#             return jsonify({"message": "❌ userId is required"}), 400

#         user_obj_id = ObjectId(user_id)
#         goal_data = expenses_collection.find_one({"userId": user_obj_id})
#         if not goal_data:
#             return jsonify({"message": "❌ Goal data not found"}), 404

#         goal_name = goal_data.get("goalName")
#         target_amount = float(goal_data.get("goalAmount", 0))
#         deadline = goal_data.get("goalDeadline")
#         current_savings = float(goal_data.get("savings", 0))
#         current_monthly_savings = float(goal_data.get("savings", 0))

#         progress_percentage = (current_savings / target_amount) * 100 if target_amount else 0
#         remaining_amount = target_amount - current_savings
#         deadline_date = datetime.strptime(deadline, "%Y-%m-%d")
#         current_date = datetime.now()
#         remaining_months = max(0, (deadline_date.year - current_date.year) * 12 + (deadline_date.month - current_date.month))

#         output_data = {
#             "user_id": user_id,
#             "goal_name": goal_name,
#             "target_amount": target_amount,
#             "current_savings": current_savings,
#             "progress_percentage": round(progress_percentage, 2),
#             "remaining_amount": round(remaining_amount, 2),
#             "remaining_months": remaining_months,
#             "current_monthly_savings": current_monthly_savings,
#             "timestamp": current_date
#         }

#         if current_savings >= target_amount:
#             output_data["status"] = "Goal Achieved"
#         else:
#             months_to_complete = ceil(remaining_amount / current_monthly_savings) if current_monthly_savings > 0 else float("inf")
#             suggested_monthly_savings = (remaining_amount / remaining_months) if remaining_months > 0 else remaining_amount

#             output_data["months_to_complete"] = months_to_complete
#             output_data["suggested_monthly_savings"] = round(suggested_monthly_savings, 2)
#             output_data["status"] = "On Track" if months_to_complete <= remaining_months else "Goal Not Achievable Within Deadline"

#         dash_collection.insert_one(output_data)

#         return jsonify({
#             "message": "✅ Goal progress analyzed successfully",
#             "goal_analysis": output_data
#         }), 200

#     except Exception as e:
#         print("❌ Error in /analyze-goal:", e)
#         return jsonify({"message": "❌ Server error", "error": str(e)}), 500

# if __name__ == "__main__":
#     app.run(port=8000, debug=True)









# from flask import Flask, request, jsonify
# from pymongo import MongoClient
# from bson import ObjectId
# from datetime import datetime
# from math import ceil
# from flask_cors import CORS
# from flask_cors import cross_origin

# app = Flask(__name__)
# CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}}, supports_credentials=True)

# mongo_client = MongoClient("mongodb://localhost:27017")
# db = mongo_client["management"]
# expenses_collection = db["userdatas"]
# dash_collection = db["goals"]

# @app.route('/analyze_goal', methods=['POST'])
# @cross_origin(origin='http://localhost:3000', supports_credentials=True)
# def analyze_goal_progress():
#     try:
#         data = request.get_json()
#         user_id = data.get("user_id")

#         if not user_id:
#             return jsonify({"error": "User ID is required"}), 400

#         user_obj_id = ObjectId(user_id)

#         user_data = expenses_collection.find_one({"_id": user_obj_id})
#         goal_data = dash_collection.find_one({"user_id": user_obj_id})

#         if not user_data or not goal_data:
#             return jsonify({"error": "User data or goal data not found"}), 404

#         avg_monthly_expense = (
#             user_data.get("avg_food_expense", 0) +
#             user_data.get("avg_transport_expense", 0) +
#             user_data.get("avg_entertainment_expense", 0) +
#             user_data.get("avg_other_expense", 0)
#         )

#         monthly_income = user_data.get("monthly_income", 0)
#         monthly_savings = max(0, monthly_income - avg_monthly_expense)

#         savings_goal = goal_data.get("goal_amount", 0)
#         current_savings = goal_data.get("current_savings", 0)
#         deadline = goal_data.get("deadline", "")

#         if not deadline:
#             return jsonify({"error": "Deadline not provided"}), 400

#         deadline_date = datetime.strptime(deadline, "%Y-%m-%d")
#         today = datetime.today()
#         remaining_months = max(1, ((deadline_date.year - today.year) * 12 + deadline_date.month - today.month))

#         required_monthly_savings = savings_goal / remaining_months if remaining_months > 0 else 0
#         total_remaining = max(0, savings_goal - current_savings)
#         on_track = (monthly_savings >= required_monthly_savings)
#         percent_completed = (current_savings / savings_goal) * 100 if savings_goal > 0 else 0

#         suggestion = ""
#         if not on_track:
#             suggestion = f"To reach your goal, you need to save ₹{ceil(total_remaining / remaining_months)} per month."

#         result = {
#             "user_id": user_id,
#             "monthly_savings": monthly_savings,
#             "goal_amount": savings_goal,
#             "current_savings": current_savings,
#             "total_remaining": total_remaining,
#             "percent_completed": round(percent_completed, 2),
#             "months_left": remaining_months,
#             "on_track": on_track,
#             "suggestion": suggestion
#         }

#         db["Goal_Dashboard"].update_one(
#             {"user_id": user_obj_id},
#             {"$set": result},
#             upsert=True
#         )

#         return jsonify(result), 200

#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# Do not include app.run() to allow importing into main.py
