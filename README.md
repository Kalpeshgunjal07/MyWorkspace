My Workspace Explorer

Full-Stack Project Management System

A modern full-stack project and task management application built using Spring Boot, React, and MySQL. The app focuses on secure authentication, clean UI, and seamless backend integration.

🚀 Live Demo

Frontend: https://my-workspace-sigma.vercel.app

Backend API: https://my-workspace-backend-kisc.onrender.com

✨ Features

Secure Authentication

User registration and login using Spring Security

Password encryption with BCrypt

Project Management

Create, view, update, and delete projects

Clean and intuitive user interface

Responsive UI

Fully responsive design for mobile and desktop

Styled with Tailwind CSS

Live Backend Integration

RESTful APIs powered by Spring Boot

Cloud-hosted MySQL database

Persistent Sessions

User login state maintained using localStorage

🛠️ Tech Stack
Frontend

React.js

Tailwind CSS

React Icons

Backend

Java

Spring Boot

Spring Security

Maven

Database

MySQL (Aiven Cloud)

Deployment

Frontend: Vercel

Backend: Render (Dockerized)

🏗️ Local Setup
Prerequisites

JDK 21 or higher

Node.js & npm

Maven

Backend Setup
cd my-workspace-backend


Update database credentials in:

src/main/resources/application.properties


Then run:

mvn clean install
mvn spring-boot:run

Frontend Setup
cd my-workspace-frontend
npm install
npm start

🌐 Hosting Details

Database: Managed MySQL on Aiven Cloud

Backend Server: Render (Dockerized Java environment)

Frontend Hosting: Vercel Edge Network

📊 Repository Stats

Languages Used

JavaScript — 80.7%

Java — 17.2%

Other — 2.1%

👤 Author

Kalpesh Gunjal
Frontend & Full-Stack Developer

⭐ Feedback

If you like this project, consider giving it a ⭐ on GitHub.
Suggestions and improvements are always welcome!
