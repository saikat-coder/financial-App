

# # #### Tring to inprove more 

# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import pymongo
# from datetime import datetime
# import random
# from bson.objectid import ObjectId
# from math import ceil

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
#     remaining_months = max(1, (deadline.year - now.year) * 12 + (deadline.month - now.month))

#     # Get average expenses
#     data = list(expenses.find({"userId": user_id}))
#     total_spent = sum(doc["totalExpenses"] for doc in data)
#     avg_monthly_expense = total_spent / 12 if data else 0

#     # Get user income from userdatas
#     user = userdatas.find_one({"userId": user_id})
#     income = user.get("income", 0) if user else 0
#     current_monthly_savings = income - avg_monthly_expense

#     remaining_amount = target_amount - current_savings
#     progress = min(100, (current_savings / target_amount) * 100)

#     output_data = {
#         "userId": user_id,
#         "targetAmount": target_amount,
#         "deadline": deadline_str,
#         "currentSavings": current_savings,
#         "progressPercent": round(progress, 2),
#         "remainingAmount": round(remaining_amount, 2),
#         "monthsLeft": remaining_months
#     }

#     if current_savings >= target_amount:
#         output_data["status"] = "Goal Achieved"
#         output_data["suggestedMonthlySaving"] = 0
#         output_data["months_to_complete"] = 0
#     else:
#         if current_monthly_savings > 0:
#             months_to_complete = ceil(remaining_amount / current_monthly_savings)
#         else:
#             months_to_complete = float("inf")

#         if remaining_months > 0:
#             suggested_monthly_saving = remaining_amount / remaining_months
#         else:
#             suggested_monthly_saving = remaining_amount

#         output_data["months_to_complete"] = months_to_complete
#         output_data["suggestedMonthlySaving"] = round(suggested_monthly_saving, 2)

#         if months_to_complete > remaining_months:
#             output_data["status"] = "Goal Not Achievable Within Deadline"
#         else:
#             output_data["status"] = "On Track"

#     goals.insert_one(output_data)
#     return output_data

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






















































# #### Lets try to add categoeization


from flask import Flask, request, jsonify
from flask_cors import CORS
import pymongo
from datetime import datetime
import random
from bson.objectid import ObjectId
from math import ceil
import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"], supports_credentials=True)

# MongoDB setup
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["management"]
userdatas = db["userdatas"]
goals = db["Goal_Dashboard"]
expenses = db["year_monthly_expenses"]
categorized = db["categorized_expenses"]

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
        variation = random.uniform(-0.3, 0.3)
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

    data = list(expenses.find({"userId": user_id}))
    total_spent = sum(doc["totalExpenses"] for doc in data)
    avg_monthly_expense = total_spent / 12 if data else 0

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

        suggested_monthly_saving = remaining_amount / remaining_months
        output_data["months_to_complete"] = months_to_complete
        output_data["suggestedMonthlySaving"] = round(suggested_monthly_saving, 2)

        if months_to_complete > remaining_months:
            output_data["status"] = "Goal Not Achievable Within Deadline"
        else:
            output_data["status"] = "On Track"

    goals.insert_one(output_data)
    return output_data

def categorize_expenses(user_id, current_total):
    history = list(expenses.find({"userId": user_id}))
    if len(history) < 12:
        return {"error": "Not enough historical data to categorize."}

    df = pd.DataFrame(history).sort_values(by="month", key=lambda col: pd.to_datetime(col, format="%B"))

    np.random.seed(42)
    subcats = {
        "foodDining": np.random.randint(2000, 5000, size=12),
        "utilities": np.random.randint(1000, 3000, size=12),
        "transportation": np.random.randint(1000, 3000, size=12),
        "entertainment": np.random.randint(1000, 4000, size=12),
        "healthFitness": np.random.randint(500, 2000, size=12),
        "shopping": np.random.randint(1500, 5000, size=12),
        "miscellaneous": np.random.randint(500, 3000, size=12),
    }

    df_sub = pd.DataFrame(subcats)
    X = df_sub
    proportions = X.mean() / X.mean().sum()

    last_total = df.iloc[-1]["totalExpenses"]
    change = round(current_total - last_total, 2)
    allocated = {cat: round(proportions[cat] * current_total, 2) for cat in proportions.index}

    now = datetime.now()
    month_name = now.strftime("%B")
    year = now.year

    categorized_data = {
        "userId": user_id,
        "month": month_name,
        "year": year,
        "totalExpenses": current_total,
        "changeFromLastMonth": change,
        "categories": allocated
    }

    categorized.insert_one(categorized_data)
    return categorized_data

@app.route('/submit', methods=['POST'])
def handle_submit():
    data = request.json
    user_id = data.get("userId")

    if not user_id:
        return jsonify({"error": "userId not provided"}), 400

    try:
        user_obj_id = ObjectId(user_id)
    except Exception:
        return jsonify({"error": "Invalid userId format"}), 400

    user_data = userdatas.find_one({"userId": user_obj_id})
    if not user_data:
        return jsonify({"error": "User not found"}), 404

    avg_exp = user_data.get("totalSpend", 10000)
    goal_amount = user_data.get("goalAmount", 50000)
    deadline = user_data.get("goalDeadline", "2025-12-31")
    current_savings = user_data.get("savings", 10000)

    generated = generate_expenses(user_obj_id, avg_exp)
    goal_analysis = analyze_goal(user_obj_id, goal_amount, deadline, current_savings)

    try:
        total_input = float(input("Enter this month's total expenses: "))
    except Exception:
        return jsonify({"error": "Invalid input for total expenses."}), 400

    categorized_result = categorize_expenses(user_obj_id, total_input)

    return jsonify({
        "expensesGenerated": convert_objectid(generated),
        "goalAnalysis": convert_objectid(goal_analysis),
        "categorizedExpenses": convert_objectid(categorized_result)
    }), 200

if __name__ == '__main__':
    app.run(port=8000)
















































##  More Improve version 

# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import pymongo
# from datetime import datetime
# import random
# from bson.objectid import ObjectId
# from math import ceil
# import pandas as pd
# import numpy as np
# from sklearn.linear_model import LinearRegression

# app = Flask(__name__)
# CORS(app, origins=["http://localhost:3000"], supports_credentials=True)

# # MongoDB setup
# client = pymongo.MongoClient("mongodb://localhost:27017/")
# db = client["management"]
# userdatas = db["userdatas"]
# goals = db["Goal_Dashboard"]
# expenses = db["year_monthly_expenses"]
# categorized = db["categorized_expenses"]

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
#     months_ordered = ['January', 'February', 'March', 'April', 'May', 'June',
#                       'July', 'August', 'September', 'October', 'November', 'December']

#     # Find the latest month entry for this user
#     latest_doc = expenses.find_one({"userId": user_id}, sort=[("year", -1), ("month", -1)])
    
#     if latest_doc:
#         last_month = latest_doc["month"]
#         last_year = latest_doc["year"]
#         idx = months_ordered.index(last_month)

#         # Calculate next month and year
#         if idx == 11:  # December
#             next_month = "January"
#             next_year = last_year + 1
#         else:
#             next_month = months_ordered[idx + 1]
#             next_year = last_year
#     else:
#         # If no previous record, start with current month and year
#         now = datetime.now()
#         next_month = months_ordered[now.month - 1]
#         next_year = now.year

#     variation = random.uniform(-0.3, 0.3)
#     value = round(average * (1 + variation), 2)
#     new_data = {
#         "userId": user_id,
#         "month": next_month,
#         "year": next_year,
#         "totalExpenses": value
#     }

#     expenses.insert_one(new_data)
#     return [new_data]

# def analyze_goal(user_id, target_amount, deadline_str, current_savings):
#     now = datetime.now()
#     deadline = datetime.strptime(deadline_str, "%Y-%m-%d")
#     remaining_months = max(1, (deadline.year - now.year) * 12 + (deadline.month - now.month))

#     data = list(expenses.find({"userId": user_id}))
#     total_spent = sum(doc["totalExpenses"] for doc in data)
#     avg_monthly_expense = total_spent / 12 if data else 0

#     user = userdatas.find_one({"userId": user_id})
#     income = user.get("income", 0) if user else 0
#     current_monthly_savings = income - avg_monthly_expense

#     remaining_amount = target_amount - current_savings
#     progress = min(100, (current_savings / target_amount) * 100) if target_amount > 0 else 0

#     output_data = {
#         "userId": user_id,
#         "targetAmount": target_amount,
#         "deadline": deadline_str,
#         "currentSavings": current_savings,
#         "progressPercent": round(progress, 2),
#         "remainingAmount": round(remaining_amount, 2),
#         "monthsLeft": remaining_months
#     }

#     if current_savings >= target_amount:
#         output_data["status"] = "Goal Achieved"
#         output_data["suggestedMonthlySaving"] = 0
#         output_data["months_to_complete"] = 0
#     else:
#         if current_monthly_savings > 0:
#             months_to_complete = ceil(remaining_amount / current_monthly_savings)
#         else:
#             months_to_complete = float("inf")

#         suggested_monthly_saving = remaining_amount / remaining_months
#         output_data["months_to_complete"] = months_to_complete
#         output_data["suggestedMonthlySaving"] = round(suggested_monthly_saving, 2)

#         if months_to_complete > remaining_months:
#             output_data["status"] = "Goal Not Achievable Within Deadline"
#         else:
#             output_data["status"] = "On Track"

#     goals.insert_one(output_data)
#     return output_data

# def categorize_expenses(user_id, current_total):
#     history = list(expenses.find({"userId": user_id}))
#     if len(history) < 12:
#         return {"error": "Not enough historical data to categorize."}

#     # Sort history by year and month
#     months_ordered = ['January', 'February', 'March', 'April', 'May', 'June',
#                       'July', 'August', 'September', 'October', 'November', 'December']
#     df = pd.DataFrame(history)
#     df['month_num'] = df['month'].apply(lambda m: months_ordered.index(m))
#     df = df.sort_values(by=['year', 'month_num'])

#     # Generate synthetic categories data with consistent seed for reproducibility
#     np.random.seed(42)
#     subcats = {
#         "foodDining": np.random.randint(2000, 5000, size=len(df)),
#         "utilities": np.random.randint(1000, 3000, size=len(df)),
#         "transportation": np.random.randint(1000, 3000, size=len(df)),
#         "entertainment": np.random.randint(1000, 4000, size=len(df)),
#         "healthFitness": np.random.randint(500, 2000, size=len(df)),
#         "shopping": np.random.randint(1500, 5000, size=len(df)),
#         "miscellaneous": np.random.randint(500, 3000, size=len(df)),
#     }

#     df_sub = pd.DataFrame(subcats)

#     proportions = df_sub.mean() / df_sub.mean().sum()

#     last_total = df.iloc[-1]["totalExpenses"]
#     change = round(current_total - last_total, 2)
#     allocated = {cat: round(proportions[cat] * current_total, 2) for cat in proportions.index}

#     now = datetime.now()
#     month_name = now.strftime("%B")
#     year = now.year

#     categorized_data = {
#         "userId": user_id,
#         "month": month_name,
#         "year": year,
#         "totalExpenses": current_total,
#         "changeFromLastMonth": change,
#         "categories": allocated
#     }

#     categorized.insert_one(categorized_data)
#     return categorized_data

# @app.route('/submit', methods=['POST'])
# def handle_submit():
#     data = request.json
#     user_id_str = data.get("userId")
#     total_input = data.get("totalExpenses")  # Now expects this from frontend JSON

#     if not user_id_str:
#         return jsonify({"error": "userId not provided"}), 400

#     if total_input is None:
#         return jsonify({"error": "totalExpenses not provided"}), 400

#     try:
#         total_input = float(total_input)
#     except ValueError:
#         return jsonify({"error": "Invalid totalExpenses format"}), 400

#     try:
#         user_obj_id = ObjectId(user_id_str)
#     except Exception:
#         return jsonify({"error": "Invalid userId format"}), 400

#     user_data = userdatas.find_one({"userId": user_obj_id})
#     if not user_data:
#         return jsonify({"error": "User not found"}), 404

#     avg_exp = user_data.get("totalSpend", 10000)
#     goal_amount = user_data.get("goalAmount", 50000)
#     deadline = user_data.get("goalDeadline", "2025-12-31")
#     current_savings = user_data.get("savings", 10000)

#     generated = generate_expenses(user_obj_id, avg_exp)
#     goal_analysis = analyze_goal(user_obj_id, goal_amount, deadline, current_savings)
#     categorized_result = categorize_expenses(user_obj_id, total_input)

#     return jsonify({
#         "expensesGenerated": convert_objectid(generated),
#         "goalAnalysis": convert_objectid(goal_analysis),
#         "categorizedExpenses": convert_objectid(categorized_result)
#     }), 200

# if __name__ == '__main__':
#     app.run(port=8000)
