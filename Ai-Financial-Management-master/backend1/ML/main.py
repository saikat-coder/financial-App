

# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import pymongo
# from datetime import datetime
# import random
# from bson.objectid import ObjectId

# app = Flask(__name__)
# CORS(app, origins=["http://localhost:3000"], supports_credentials=True)

# # MongoDB setup
# client = pymongo.MongoClient("mongodb://localhost:27017/")
# db = client["management"]
# userdatas = db["userdatas"]
# goals = db["Goal_Dashboard"]
# expenses = db["year_monthly_expenses"]

# def generate_expenses(user_id, average):
#     months = ['January', 'February', 'March', 'April', 'May', 'June',
#               'July', 'August', 'September', 'October', 'November', 'December']
#     current_year = datetime.now().year
#     generated_data = []

#     for month in months:
#         variation = random.uniform(-0.3, 0.3)  # ±30%
#         value = round(average * (1 + variation), 2)
#         generated_data.append({
#             "userId": user_id,
#             "month": month,
#             "year": current_year,
#             "totalExpenses": value
#         })

#     expenses.insert_many(generated_data)
#     return generated_data

# def analyze_goal(user_id,  target_amount, deadline_str, current_savings):  #target_amount
#     now = datetime.now()
#     deadline = datetime.strptime(deadline_str, "%Y-%m-%d")
#     months_left = max(1, (deadline.year - now.year) * 12 + deadline.month - now.month)

#     # Aggregate total expenses for this user
#     data = expenses.find({"userId": user_id})
#     total_spent = sum(doc["totalExpenses"] for doc in data)
#     avg_monthly = total_spent / 12
#     # current_savings = round(10000 - avg_monthly, 2)  # Simulated for now

#     remaining =  target_amount - current_savings
#     progress = min(100, (current_savings /  target_amount) * 100)

#     status = "On Track" if remaining / months_left <= current_savings else "Not Achievable"
#     suggestion = remaining / months_left if status == "Not Achievable" else 0

#     result = {
#         "userId": user_id,
#         "targetAmount":  target_amount,
#         "deadline": deadline_str,
#         "currentSavings": current_savings,
#         "progressPercent": round(progress, 2),
#         "remainingAmount": round(remaining, 2),
#         "monthsLeft": months_left,
#         "status": status,
#         "suggestedMonthlySaving": round(suggestion, 2)
#     }

#     goals.insert_one(result)
#     return result

# @app.route('/submit', methods=['POST'])
# def handle_submit():
#     data = request.json
#     user_id = data.get("userId")
#     print("Received userId (string):", user_id)


#     if not user_id:
#         return jsonify({"error": "userId not provided"}), 400

#     try:
#         user_obj_id = ObjectId(user_id)
#         print("Converted to ObjectId:", user_obj_id)

#     except Exception as e:
#         print("Error converting userId to ObjectId:", e)
#         return jsonify({"error": "Invalid userId format"}), 400

#     user_data = userdatas.find_one({"userId": user_obj_id})
#     # user_data = userdatas.find_one({"userId": user_id})
#     print("Found user_data:", user_data)

#     if not user_data:
#         return jsonify({"error": "User not found"}), 404

#     avg_exp = user_data.get("totalSpend", 10000)
#     goal_amount = user_data.get("goalAmount", 50000)
#     deadline = user_data.get("goalDeadline", "2025-12-31")
#     current_savings=user_data.get("savings",10000)

#     generated = generate_expenses(user_id, avg_exp)
#     goal_analysis = analyze_goal(user_id, goal_amount, deadline,current_savings)

#     return jsonify({
#         "expensesGenerated": generated,
#         "goalAnalysis": goal_analysis
#     }), 200

# if __name__ == '__main__':
#     app.run(port=8000)





##### good this code is working but not that good

# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import pymongo
# from datetime import datetime
# import random
# from bson.objectid import ObjectId

# app = Flask(__name__)
# CORS(app, origins=["http://localhost:3000"], supports_credentials=True)

# # MongoDB setup
# client = pymongo.MongoClient("mongodb://localhost:27017/")
# db = client["management"]
# userdatas = db["userdatas"]
# goals = db["Goal_Dashboard"]
# expenses = db["year_monthly_expenses"]

# # Utility function to convert ObjectId to string
# def convert_objectid(data):
#     if isinstance(data, list):
#         return [convert_objectid(item) for item in data]
#     elif isinstance(data, dict):
#         return {
#             key: str(value) if isinstance(value, ObjectId) else convert_objectid(value)
#             for key, value in data.items()
#         }
#     else:
#         return data

# def generate_expenses(user_id, average):
#     months = ['January', 'February', 'March', 'April', 'May', 'June',
#               'July', 'August', 'September', 'October', 'November', 'December']
#     current_year = datetime.now().year
#     generated_data = []

#     for month in months:
#         variation = random.uniform(-0.3, 0.3)  # ±30%
#         value = round(average * (1 + variation), 2)
#         generated_data.append({
#             "userId": user_id,
#             "month": month,
#             "year": current_year,
#             "totalExpenses": value
#         })

#     expenses.insert_many(generated_data)
#     return generated_data

# def analyze_goal(user_id, target_amount, deadline_str, current_savings):
#     now = datetime.now()
#     deadline = datetime.strptime(deadline_str, "%Y-%m-%d")
#     months_left = max(1, (deadline.year - now.year) * 12 + deadline.month - now.month)

#     data = expenses.find({"userId": user_id})
#     total_spent = sum(doc["totalExpenses"] for doc in data)
#     avg_monthly = total_spent / 12

#     remaining = target_amount - current_savings
#     progress = min(100, (current_savings / target_amount) * 100)

#     status = "On Track" if remaining / months_left <= current_savings else "Not Achievable"
#     suggestion = remaining / months_left if status == "Not Achievable" else 0

#     result = {
#         "userId": user_id,
#         "targetAmount": target_amount,
#         "deadline": deadline_str,
#         "currentSavings": current_savings,
#         "progressPercent": round(progress, 2),
#         "remainingAmount": round(remaining, 2),
#         "monthsLeft": months_left,
#         "status": status,
#         "suggestedMonthlySaving": round(suggestion, 2)
#     }

#     goals.insert_one(result)
#     return result

# @app.route('/submit', methods=['POST'])
# def handle_submit():
#     data = request.json
#     user_id = data.get("userId")
#     print("Received userId (string):", user_id)

#     if not user_id:
#         return jsonify({"error": "userId not provided"}), 400

#     try:
#         user_obj_id = ObjectId(user_id)
#         print("Converted to ObjectId:", user_obj_id)
#     except Exception as e:
#         print("Error converting userId to ObjectId:", e)
#         return jsonify({"error": "Invalid userId format"}), 400

#     user_data = userdatas.find_one({"userId": user_obj_id})
#     print("Found user_data:", user_data)

#     if not user_data:
#         return jsonify({"error": "User not found"}), 404

#     avg_exp = user_data.get("totalSpend", 10000)
#     goal_amount = user_data.get("goalAmount", 50000)
#     deadline = user_data.get("goalDeadline", "2025-12-31")
#     current_savings = user_data.get("savings", 10000)

#     generated = generate_expenses(user_obj_id, avg_exp)
#     goal_analysis = analyze_goal(user_obj_id, goal_amount, deadline, current_savings)

#     return jsonify({
#         "expensesGenerated": convert_objectid(generated),
#         "goalAnalysis": convert_objectid(goal_analysis)
#     }), 200

# if __name__ == '__main__':
#     app.run(port=8000)






#### Tring to inprove more 

from flask import Flask, request, jsonify
from flask_cors import CORS
import pymongo
from datetime import datetime
import random
from bson.objectid import ObjectId
from math import ceil

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"], supports_credentials=True)

# MongoDB setup
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["management"]
userdatas = db["userdatas"]
goals = db["Goal_Dashboard"]
expenses = db["year_monthly_expenses"]

# Utility function to convert ObjectId to string
def convert_objectid(data):
    if isinstance(data, list):
        return [convert_objectid(item) for item in data]
    elif isinstance(data, dict):
        return {
            key: str(value) if isinstance(value, ObjectId) else convert_objectid(value)
            for key, value in data.items()
        }
    else:
        return data

def generate_expenses(user_id, average):
    months = ['January', 'February', 'March', 'April', 'May', 'June',
              'July', 'August', 'September', 'October', 'November', 'December']
    current_year = datetime.now().year
    generated_data = []

    for month in months:
        variation = random.uniform(-0.3, 0.3)  # ±30%
        value = round(average * (1 + variation), 2)
        generated_data.append({
            "userId": user_id,
            "month": month,
            "year": current_year,
            "totalExpenses": value
        })

    expenses.insert_many(generated_data)
    return generated_data

def analyze_goal(user_id, target_amount, deadline_str, current_savings):
    now = datetime.now()
    deadline = datetime.strptime(deadline_str, "%Y-%m-%d")
    remaining_months = max(1, (deadline.year - now.year) * 12 + (deadline.month - now.month))

    # Get average expenses
    data = list(expenses.find({"userId": user_id}))
    total_spent = sum(doc["totalExpenses"] for doc in data)
    avg_monthly_expense = total_spent / 12 if data else 0

    # Get user income from userdatas
    user = userdatas.find_one({"userId": user_id})
    income = user.get("income", 0) if user else 0
    current_monthly_savings = income - avg_monthly_expense

    remaining_amount = target_amount - current_savings
    progress = min(100, (current_savings / target_amount) * 100)

    output_data = {
        "userId": user_id,
        "targetAmount": target_amount,
        "deadline": deadline_str,
        "currentSavings": current_savings,
        "progressPercent": round(progress, 2),
        "remainingAmount": round(remaining_amount, 2),
        "monthsLeft": remaining_months
    }

    if current_savings >= target_amount:
        output_data["status"] = "Goal Achieved"
        output_data["suggestedMonthlySaving"] = 0
        output_data["months_to_complete"] = 0
    else:
        if current_monthly_savings > 0:
            months_to_complete = ceil(remaining_amount / current_monthly_savings)
        else:
            months_to_complete = float("inf")

        if remaining_months > 0:
            suggested_monthly_saving = remaining_amount / remaining_months
        else:
            suggested_monthly_saving = remaining_amount

        output_data["months_to_complete"] = months_to_complete
        output_data["suggestedMonthlySaving"] = round(suggested_monthly_saving, 2)

        if months_to_complete > remaining_months:
            output_data["status"] = "Goal Not Achievable Within Deadline"
        else:
            output_data["status"] = "On Track"

    goals.insert_one(output_data)
    return output_data

@app.route('/submit', methods=['POST'])
def handle_submit():
    data = request.json
    user_id = data.get("userId")
    print("Received userId (string):", user_id)

    if not user_id:
        return jsonify({"error": "userId not provided"}), 400

    try:
        user_obj_id = ObjectId(user_id)
        print("Converted to ObjectId:", user_obj_id)
    except Exception as e:
        print("Error converting userId to ObjectId:", e)
        return jsonify({"error": "Invalid userId format"}), 400

    user_data = userdatas.find_one({"userId": user_obj_id})
    print("Found user_data:", user_data)

    if not user_data:
        return jsonify({"error": "User not found"}), 404

    avg_exp = user_data.get("totalSpend", 10000)
    goal_amount = user_data.get("goalAmount", 50000)
    deadline = user_data.get("goalDeadline", "2025-12-31")
    current_savings = user_data.get("savings", 10000)

    generated = generate_expenses(user_obj_id, avg_exp)
    goal_analysis = analyze_goal(user_obj_id, goal_amount, deadline, current_savings)

    return jsonify({
        "expensesGenerated": convert_objectid(generated),
        "goalAnalysis": convert_objectid(goal_analysis)
    }), 200

if __name__ == '__main__':
    app.run(port=8000)


