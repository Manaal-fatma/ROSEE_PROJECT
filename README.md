🚀 MERN Stack E-Commerce Website
--------------------------------------
A full-stack stationery e-commerce platform built using the MERN stack (MongoDB, Express, React, Node.js). It includes three parts:

🛍️ Frontend for user shopping experience

🛠️ Admin Panel for managing products and orders

🔗 Backend API for database and server logic

----

🛠️ Technologies Used
-----------------------
Frontend: React, CSS, React Router, Axios, Context API

Backend: Node.js, Express, MongoDB, JWT

Admin Panel: React + Tailwind

Others: Cloudinary (Image upload), Mongoose, dotenv, React Toastify

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔧 How to Set Up the Project Locally
-----------------------------------------

Follow these simple steps to get the entire project running on your PC.

📦 1. Download & Install Dependencies
---
a) First, download the ZIP or clone the repository.

b) Then open your terminal and run the following commands for each folder (frontend, backend, admin):
```
cd frontend

npm install

cd ../backend

npm install

cd ../admin

npm install
```
🧪 2. Create .env Files
---
You need to create .env files inside each folder and simply copy paste the following in them.

🔹 Frontend .env
```
REACT_APP_BACKEND_URL=http://localhost:4000
```
🔹 Admin .env
```
VITE_BACKEND_URL=http://localhost:4000
```
This connects your frontend/admin with the backend server running locally.

🔹 Backend .env:
```
PORT=4000

MONGODB_URI=your_mongodb_uri

CLOUDINARY_API_KEY=your_cloudinary_api_key

CLOUDINARY_SECRET_KEY=your_cloudinary_secret

CLOUDINARY_NAME=your_cloudinary_name

JWT_SECRET=your_jwt_secret

ADMIN_EMAIL=your_admin_email

ADMIN_PASSWORD=your_admin_password
```
🔁 Replace all the your_... values with your actual credentials and remember not to give space before and after the equal to "=" sign. Here’s how to get them:

🧰 3. Required Accounts & Setup 
---
🗄️ MONGODB SETUP

a) Go to MongoDB Atlas https://www.mongodb.com and create a free account.

b) Create a cluster → Database → Collection.

c) Copy the connection string (MongoDB URI) and paste it into MONGODB_URI.

☁️ CLOUDINARY SETUP

a) Go to Cloudinary https://cloudinary.com and sign up.

b) Copy your API Key, Secret, and Cloud name, then paste them in .env.

🔐 JWT SECRET

You can set any random strong string like:
```
JWT_SECRET=thisisaverysecuretoken123
```
🧑‍💼 ADMIN LOGIN

Set any email and password in your backend .env.

You’ll use these to log into the admin panel.

🖥️ 4. Start the App
---
Start the servers in the following order in different terminals:

🟢 Backend
```
cd backend

npm run index
```
🟡 Frontend
```
cd frontend

npm start
```
🔵 Admin Panel
```
cd admin

npm run dev
```
✅ Now you can open the site in your browser!

Frontend: http://localhost:3000

Admin Panel: http://localhost:5173 (Login using the .env admin credentials)

----

🎉 That’s it!

You’ve got the full project running locally!

Tweak it, test it, build on it — and have fun creating! 🛒💻

--

## ⏱️ Setup at a Glance

- [x] Install packages (5 mins)
- [x] Create `.env` files (5 mins)
- [x] Set up MongoDB (10 mins)
- [x] Set up Cloudinary (5 mins)
- [x] Start backend, frontend, and admin (3 mins)

> ⏳ Total Time: **~25–30 minutes (first time)**

> 💨 After setup, you can start everything in **under 2 mins**!

