My Workspace Explorer - Full Stack Project Management System
A premium, full-stack task and project management application built with a Spring Boot backend, React frontend, and MySQL database.

🚀 Live Demo
• Frontend: https://my-workspace-sigma.vercel.app/(https://my-workspace-sigma.vercel.app/)

• Backend API: [[suspicious link removed]]([suspicious link removed])

✨ Key Features
• Secure Authentication: User registration and login using Spring Security and BCrypt password hashing.

• Project Management: Create, view, update, and delete projects with a sleek UI.

• Responsive Design: Fully optimized for mobile and desktop using Tailwind CSS.

• Live Backend Integration: Connected to a cloud-hosted MySQL database.

• Persistent Sessions: User data and login states maintained via `localStorage`.

🛠️ Tech Stack
• Frontend: React.js, Tailwind CSS, React Icons

• Backend: Java, Spring Boot, Spring Security, Maven

• Database: MySQL (Hosted on Aiven Cloud)

• Deployment: Vercel (Frontend), Render (Backend)

🏗️ Local Installation
Prerequisites

• JDK 21 or higher

• Node.js & npm

• Maven

1. Backend Setup

```

cd my-workspace-backend

# Update src/main/resources/application.properties with your DB credentials

mvn clean install

mvn spring-boot:run

```

2. Frontend Setup

```

cd my-workspace-frontend

npm install

npm start

```

🌐 Hosting Details

• Database: Managed MySQL instance on Aiven Cloud.

• Backend Server: Deployed on Render using a Dockerized Java environment.

• Frontend Hosting: High-performance hosting on Vercel Edge Network.

---

Created by Kalpesh Gunjal
