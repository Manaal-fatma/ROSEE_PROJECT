🚀 MERN Stack E-Commerce Website
--------------------------------------
A full-stack stationery e-commerce platform built using the MERN stack (MongoDB, Express, React, Node.js). It includes three parts:

🛍️ Frontend for user shopping experience

🛠️ Admin Panel for managing products and orders

🔗 Backend API for database and server logic

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🛠️ Technologies Used
-----------------------
Frontend: React, React Router, Axios, Context API

Backend: Node.js, Express, MongoDB, JWT

Admin Panel: React + Tailwind

Others: Cloudinary (Image upload), Mongoose, dotenv

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔧 How to Set Up the Project Locally
-----------------------------------------

Follow these simple steps to get the entire project running on your PC.

📦 1. Download & Install Dependencies

First, download the ZIP or clone the repository.

Then open your terminal and run the following commands for each folder (frontend, backend, admin):

bash
Copy
Edit
cd frontend
npm install

cd ../backend
npm install

cd ../admin
npm install
🧪 2. Create .env Files
You need to create .env files inside each folder.

🔹 Frontend & Admin .env:
env
Copy
Edit
REACT_APP_BACKEND_URL=http://localhost:4000
This connects your frontend/admin with the backend server running locally.

🔹 Backend .env:
env
Copy
Edit
PORT=4000
MONGODB_URI=your_mongodb_uri
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret
CLOUDINARY_NAME=your_cloudinary_name
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
🔁 Replace all the your_... values with your actual credentials. Here’s how to get them:

🧰 3. Required Accounts & Setup
🗄️ MongoDB Setup
Go to MongoDB Atlas and create a free account.

Create a cluster → Database → Collection.

Copy the connection string (MongoDB URI) and paste it into MONGODB_URI.

☁️ Cloudinary Setup
Go to Cloudinary and sign up.

Copy your API Key, Secret, and Cloud name, then paste them in .env.

🔐 JWT Secret
You can set any random strong string like:

bash
Copy
Edit
JWT_SECRET=thisisaverysecuretoken123
🧑‍💼 Admin Login
Set any email and password in your backend .env.

You’ll use these to log into the admin panel.

🖥️ 4. Start the App
Start the servers in the following order:

🟢 Backend
bash
Copy
Edit
cd backend
npm run index
🟡 Frontend
bash
Copy
Edit
cd frontend
npm start
🔵 Admin Panel
bash
Copy
Edit
cd admin
npm run dev
✅ Now you can open the site in your browser!
Frontend: http://localhost:3000
Admin Panel: http://localhost:5173 (Login using the .env admin credentials)

🎉 That’s it!
You’ve got the full project running locally!
Tweak it, test it, build on it — and have fun creating! 🛒💻
