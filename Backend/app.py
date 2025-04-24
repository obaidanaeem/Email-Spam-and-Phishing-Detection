from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import re

# Load Spam Detection Model & Vectorizer
with open("spam_model.pkl", "rb") as f:
    spam_model = pickle.load(f)

with open("spam_vectorizer.pkl", "rb") as f:
    spam_vectorizer = pickle.load(f)

# Load Phishing Detection Model & Vectorizer
with open("one_class_svm_model.pkl", "rb") as f:
    phishing_model = pickle.load(f)

with open("one_class_vectorizer.pkl", "rb") as f:
    phishing_vectorizer = pickle.load(f)

app = Flask(__name__)
CORS(app)

# API Endpoint for Email Classification
@app.route('/classify', methods=['POST'])
def classify_email():
    data = request.json
    email_text = data.get("email_text", "")

    if not email_text:
        return jsonify({"error": "No email text provided"}), 400

    # Predict Spam
    spam_features = spam_vectorizer.transform([email_text])
    is_spam = spam_model.predict(spam_features)[0]

    # Predict Phishing
    phishing_features = phishing_vectorizer.transform([email_text]).toarray()  # Convert to dense array
    is_phishing = phishing_model.predict(phishing_features)
    is_phishing = 1 if is_phishing == -1 else 0  # Convert prediction to binary (1 for phishing, 0 for not phishing)

    # Debugging Output
    print("======================================")
    print("Received Email:", email_text)
    print("Spam Prediction:", is_spam)
    print("Phishing Prediction:", is_phishing)
    print("======================================")
    
    result = {
        "spam": bool(is_spam),
        "phishing": bool(is_phishing)
    }
    
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)