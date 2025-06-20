README.md

# GenIQ Business Idea Generator

GenIQ Business Idea Generator is a Netlify-deployed static site that turns user interests into tailored business ideas. It features a Monday.com-/Airtable-style UI built with TailwindCSS, Stripe Checkout for payments, and an OpenAI integration for idea generation.

## 🛠️ Features
- **Responsive UI** inspired by Monday.com and Airtable  
- **Stripe Checkout** via Netlify Functions  
- **OpenAI agent** for markdown-formatted idea generation  
- **Loading** and **result** states with “New Idea” flow  

## 📁 File Structure

/
├── index.html
├── success.html
├── cancel.html
└── netlify
└── functions
├── generateIdea.js
└── create-checkout-session.js

## ⚙️ Prerequisites
- Node.js 14+ (for local testing of functions)  
- Netlify CLI (optional)  
- Git  

## 🚀 Setup
1. **Clone the repo**  
   ```bash
   git clone https://github.com/<your-username>/business-idea-generator.git
   cd business-idea-generator

	2.	Install function dependencies

cd netlify/functions
npm install
cd ../..


	3.	Configure secrets
Create a .env file (added to .gitignore) with:

STRIPE_SECRET_KEY=sk_test_…
STRIPE_PUBLISHABLE_KEY=pk_test_…
OPENAI_API_KEY=sk-…


	4.	Local dev (optional)

netlify dev

Visit http://localhost:8888

📦 Deployment
	1.	Push main branch to GitHub
	2.	In Netlify dashboard:
	•	Link this repository
	•	Add the three env vars under Site settings → Build & deploy → Environment
	•	Trigger a deploy

📖 Usage
	1.	Open the homepage
	2.	Describe your interests and submit
	3.	Review the generated idea
	4.	Click Purchase to start Stripe Checkout
	5.	On success, return to generate another idea

🔒 Environment Variables
	•	STRIPE_SECRET_KEY – Stripe secret key (server only)
	•	STRIPE_PUBLISHABLE_KEY – Stripe publishable key (client)
	•	OPENAI_API_KEY – OpenAI API key (server only)

🤝 Contributing
	1.	Fork the repo
	2.	Create a feature branch
	3.	Commit your changes
	4.	Open a pull request

📝 License

This project is released under the MIT License.

