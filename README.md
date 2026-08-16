# 📄 HireLens: AI Resume Analyzer

HireLens is an intelligent, AI-powered Resume Analyzer that evaluates and rates resumes against job descriptions. By leveraging advanced Natural Language Processing (NLP), it extracts key skills, experiences, and qualifications from resumes, providing instant feedback and an objective rating for each candidate.

---

## ✨ Features

- **Resume Parsing:** Automatically extracts text and relevant information (skills, education, experience) from PDF and Word documents.
- **AI-Powered Evaluation:** Uses state-of-the-art AI models to analyze candidate qualifications.
- **Smart Scoring:** Generates a compatibility score based on how well the resume matches a target job description.
- **Actionable Feedback:** Provides candidates/recruiters with a summary of strengths, missing keywords, and areas for improvement.
- **Secure Authentication:** Built-in user authorization logic to ensure data privacy for candidates and recruiters.

## 🛠️ Tech Stack

- **Frontend:** React, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **AI Integration:** OpenAI API / Gemini API (or equivalent LLM for NLP processing)
- **File Parsing:** Libraries for handling document uploads (PDF/DOCX).

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- MongoDB (running locally or a MongoDB Atlas URI)
- API Keys for AI integration

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Tusshar-web/HireLens.git
   cd HireLens
   ```

2. **Setup the Server:**
   ```bash
   cd server
   npm install
   ```
   Create a `.env` file in the `server` directory and add your environment variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   AI_API_KEY=your_ai_service_api_key
   ```
   Start the backend server:
   ```bash
   npm run dev
   ```

3. **Setup the Client:**
   ```bash
   cd ../client
   npm install
   ```
   Start the frontend development server:
   ```bash
   npm run dev
   ```

## 🎯 Usage

1. Open your browser and navigate to the frontend URL (typically `http://localhost:5173`).
2. Sign up or log in to your account.
3. Upload a candidate's resume (PDF/DOCX format).
4. (Optional) Provide a job description or key requirements to compare against.
5. Click **Analyze** and view the detailed rating, extracted skills, and actionable feedback!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 
Feel free to check the [issues page](https://github.com/Tusshar-web/HireLens/issues) if you want to contribute.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
