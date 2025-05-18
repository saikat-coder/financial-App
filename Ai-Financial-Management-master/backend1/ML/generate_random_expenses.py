import os
import sys
import numpy as np
from pymongo import MongoClient
from bson import ObjectId
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017")

client = MongoClient(MONGO_URI)
db = client["management"]
expenses_collection = db["userdatas"]
monthly_collection = db["year_monthly_expenses"]

def fetch_avg_expense(user_id):
    try:
        obj_id = ObjectId(user_id)
    except Exception as e:
        print(f"Invalid ObjectId: {e}")
        return None
    
    user_data = expenses_collection.find_one({"userId": obj_id})
    if user_data:
        return user_data.get("totalSpend", None)
    else:
        print("User data not found in MongoDB.")
        return None

def generate_and_store_expenses(user_id, avg_expense):
    categories = ["Food & Dining", "Utilities", "Transportation", "Entertainment",
                  "Health & Fitness", "Shopping", "Miscellaneous"]

    months = ["January", "February", "March", "April", "May", "June", 
              "July", "August", "September", "October", "November", "December"]

    monthly_expenses = []

    for month in months:
        total_expense = np.random.normal(avg_expense, avg_expense * 0.1)
        category_distribution = np.random.dirichlet(np.ones(len(categories)), size=1)[0] * total_expense
        
        expense_entry = {
            "userId": ObjectId(user_id),  # Store as ObjectId as well
            "month": month,
            "total_expense": round(total_expense, 2),
            "categories": {categories[i]: round(category_distribution[i], 2) for i in range(len(categories))}
        }

        monthly_expenses.append(expense_entry)

    monthly_collection.delete_many({"userId": ObjectId(user_id)})
    monthly_collection.insert_many(monthly_expenses)
    print("✅ Generated and stored yearly expenses in MongoDB.")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("❌ Error: Please provide a user ID as a command line argument.")
        sys.exit(1)

    user_id = sys.argv[1]
    avg_expense = fetch_avg_expense(user_id)

    if avg_expense:
        generate_and_store_expenses(user_id, avg_expense)
    else:
        print("⚠️ No average expense found. Cannot generate data.")
