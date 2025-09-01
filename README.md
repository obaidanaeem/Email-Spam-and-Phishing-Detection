# 📧 ML-Based Email Spam & Phishing Detection SaaS  

An end-to-end **Machine Learning-powered SaaS application** to detect and classify **spam** and **phishing emails**.  
This project integrates **ML models (Naïve Bayes, One-Class SVM)** with a **Flask backend API** and a **React.js frontend** to provide real-time classification through a modern, responsive UI.  

---

## 🚀 Features  

### 🔹 Machine Learning Models
- **Email Spam Detection**
  - Models Tested: Naïve Bayes, Random Forest  
  - Best Model: **Naïve Bayes** (98% Accuracy, faster and more efficient)  
- **Email Phishing Detection**
  - Models Tested: Autoencoder, Isolation Forest, One-Class SVM  
  - Best Model: **One-Class SVM** (87% Accuracy, strong learning performance)  

### 🔹 Backend (Flask)
- API built using **Flask**  
- **Pickle-based model saving** for persistence  
- Endpoints for spam & phishing classification  
- **CORS enabled** for frontend integration  
- Returns predictions in **JSON format**  

### 🔹 Frontend (React.js with Material-UI)
- **Modern Dark Mode UI** with Material-UI theming  
- **Responsive design** for desktop and mobile  
- **Framer Motion animations** for smooth interactivity  
- Integrated with Flask backend using **Axios**  
- Displays classification results dynamically  

---

## 📊 Dataset  

- Source: **Kaggle**  
- Datasets Used:  
  - Email Spam Detection dataset  
  - Email Phishing Detection dataset  
- Preprocessing Steps:  
  - Removed duplicates and null values  
  - Tokenization  
  - **TF-IDF** and **Count Vectorization**  

---

## ⚙️ Installation & Setup

### 🔧 Prerequisites

* Python 3.8+
* Node.js & npm
* Git

### 📌 Backend Setup (Flask)

```bash
# Clone repository
git clone https://github.com/obaidanaeem/Email-Spam-and-Phishing-Detection.git
cd Email-Spam-and-Phishing-Detection/Backend

# Create virtual environment
python -m venv venv
venv\Scripts\activate   # (Windows)
source venv/bin/activate  # (Linux/Mac)

# Install dependencies
pip install -r requirements.txt

# Run backend
python app.py
```

### 🎨 Frontend Setup (React.js)

```bash
cd Email-Spam-and-Phishing-Detection/Frontend

# Install dependencies
npm install

# Start frontend
npm start
```

---


## 📌 Results

* Spam Detection (Naïve Bayes): **98% Accuracy**
* Phishing Detection (One-Class SVM): **87% Accuracy**
* Fully integrated **Flask API + React.js Frontend**
* Real-time interactive predictions

---

## 📝 Future Work

* Add **Database Integration (PostgreSQL)**
* Deploy on **AWS Lambda** for serverless scalability
* Improve phishing detection with **deep learning models**

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Authors

* **Obaida Naeem** – Project Developer
