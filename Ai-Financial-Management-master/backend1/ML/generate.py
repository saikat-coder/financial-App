# from flask import Flask, request, jsonify
# from pymongo import MongoClient
# import numpy as np
# import os
# from dotenv import load_dotenv
# from bson import ObjectId
# from bson.errors import InvalidId
# from flask_cors import CORS

# load_dotenv()
# app = Flask(__name__)
# CORS(app)  # Allow requests from frontend

# # MongoDB connection
# MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017")
# client = MongoClient(MONGO_URI)
# db = client["management"]
# expenses_collection = db["userdatas"]
# monthly_collection = db["year_monthly_expenses"]

# @app.route('/generate', methods=['POST'])
# def generate_expenses():
#     try:
#         data = request.json
#         print("📦 Received data from frontend:", data)

#         user_id = data.get('userId')
#         if not user_id:
#             return jsonify({"message": "❌ userId is required"}), 400

#         # Validate ObjectId
#         try:
#             user_obj_id = ObjectId(user_id)
#         except InvalidId:
#             return jsonify({"message": "❌ Invalid userId format"}), 400

#         # ✅ Use ObjectId in query
#         user_data = expenses_collection.find_one({"userId": user_obj_id})

#         if not user_data:
#             return jsonify({"message": "❌ User not found"}), 404


#         avg_expense = user_data.get("totalSpend")
#         if avg_expense is None:
#             return jsonify({"message": "❌ No average expense found"}), 400

#         categories = ["Food & Dining", "Utilities", "Transportation", "Entertainment",
#                       "Health & Fitness", "Shopping", "Miscellaneous"]

#         months = ["January", "February", "March", "April", "May", "June",
#                   "July", "August", "September", "October", "November", "December"]

#         monthly_expenses = []

#         for month in months:
#             total = np.random.normal(avg_expense, avg_expense * 0.1)
#             dist = np.random.dirichlet(np.ones(len(categories))) * total
#             entry = {
#                 "user_id": user_id,
#                 "month": month,
#                 "total_expense": round(total, 2),
#                 "categories": {categories[i]: round(dist[i], 2) for i in range(len(categories))}
#             }
#             monthly_expenses.append(entry)

#         # Delete previous entries & insert new monthly expenses
#         monthly_collection.delete_many({"user_id": user_id})
#         monthly_collection.insert_many(monthly_expenses)

#         return jsonify({"message": "✅ Expenses generated successfully"}), 200

#     except Exception as e:
#         print("Error in /generate:", e)
#         return jsonify({"message": "Server error", "error": str(e)}), 500


# if __name__ == '__main__':
#     app.run(port=8000)











##### update 

# from flask import Flask, request, jsonify
# from pymongo import MongoClient
# import numpy as np
# import os
# from dotenv import load_dotenv
# from bson import ObjectId
# from bson.errors import InvalidId
# from flask_cors import CORS
# from flask_cors import cross_origin

# load_dotenv()

# app = Flask(__name__)
# CORS(app, supports_credentials=True)


# # MongoDB connection
# MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017")
# client = MongoClient(MONGO_URI)
# db = client["management"]
# expenses_collection = db["userdatas"]
# monthly_collection = db["year_monthly_expenses"]

# @app.route('/generate', methods=['POST'])
# @cross_origin(origin='http://localhost:3000', supports_credentials=True)
# def generate_expenses():
#     try:
#         data = request.json
#         user_id = data.get('user_id')

#         if not user_id:
#             return jsonify({'error': 'User ID is required'}), 400

#         try:
#             user_obj_id = ObjectId(user_id)
#         except InvalidId:
#             return jsonify({'error': 'Invalid user ID format'}), 400

#         user_data = expenses_collection.find_one({'_id': user_obj_id})

#         if not user_data:
#             return jsonify({'error': 'User not found'}), 404

#         avg_expenses = {
#             'food': user_data.get('avg_food_expense', 0),
#             'transport': user_data.get('avg_transport_expense', 0),
#             'entertainment': user_data.get('avg_entertainment_expense', 0),
#             'others': user_data.get('avg_other_expense', 0)
#         }

#         generated_data = []
#         for month in range(1, 13):
#             monthly_expenses = {}
#             total = 0
#             for category, avg in avg_expenses.items():
#                 expense = max(0, np.random.normal(avg, avg * 0.1))
#                 monthly_expenses[category] = round(expense, 2)
#                 total += expense
#             monthly_expenses['total'] = round(total, 2)
#             monthly_expenses['month'] = month
#             monthly_expenses['user_id'] = user_obj_id
#             generated_data.append(monthly_expenses)

#         monthly_collection.insert_many(generated_data)

#         return jsonify({'message': 'Expenses generated successfully', 'data': generated_data}), 200

#     except Exception as e:
#         return jsonify({'error': str(e)}), 500
    
#     print(generated_data)

# Do not include app.run() to allow importing into main.py
