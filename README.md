<h1 align="center" >JobSprint</h1>

### A Modern Job Portal Connecting Job Seekers & Recruiters

JobSprint is a full-stack job portal that simplifies the hiring process by connecting job seekers with recruiters. Users can explore job opportunities, apply for jobs, track applications, and manage their profiles, while recruiters can post jobs and manage applicants.

![JobSprint Homepage](YOUR_IMAGE_URL_HERE)

<!-- Add your homepage screenshot URL below -->

## ✨ Key Features

### 👨‍💻 For Job Seekers

- Secure user authentication
- Browse and search job opportunities
- Filter jobs by location, role, job type, and salary
- Apply for jobs with resume upload
- Save jobs for later
- Track application status
- Manage personal profiles and skills

### 🏢 For Recruiters

- Register and manage companies
- Create and manage job postings
- Upload company logos
- View and manage applicants
- Accept or reject applications
- Track pending applications

### 🌟 Additional Features

- Responsive user interface
- Light and dark themes
- JWT-based authentication
- Secure file uploads
- Rich-text job descriptions

## 🛠️ Tech Stack

| Category          | Technologies                 |
| ----------------- | ---------------------------- |
| Frontend          | React 19, TypeScript, Vite   |
| Styling           | Tailwind CSS 4, shadcn/ui    |
| State Management  | Redux Toolkit, Redux Persist |
| Routing           | React Router 7               |
| Backend           | Node.js, Express.js          |
| Database          | MongoDB, Mongoose            |
| Authentication    | JWT, bcryptjs                |
| File Uploads      | Multer                       |
| API Communication | Axios                        |

## 📂 Project Structure

```text
JobSprint/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   └── utils/
│   ├── index.js
│   └── package.json
│
├── client/
│   ├── src/
│   │   ├── admin/
│   │   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── routes/
│   │   └── shared/
│   └── package.json
│
├── docs/
│   └── screenshots/
│
├── .gitignore
├── DEPLOYMENT.md
└── README.md
```

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/workmdirfan29/JobSprint
cd JobSprint
```

### 2. Install Dependencies

**Backend**

```bash
cd backend
npm install
```

**Frontend**

```bash
cd ../client
npm install
```

### 3. Environment Variables

Create a `.env` file inside the `backend` directory and configure:

```env
PORT=8080
MONGO_URI=your_mongodb_connection_string
SECRET_KEY=your_secret_key
```

### 4. Run the Application

**Start Backend**

```bash
cd backend
npm run dev
```

**Start Frontend** (in a separate terminal)

```bash
cd client
npm run dev
```

## 🔒 Security

- Passwords are hashed using bcrypt.
- JWT-based authentication using HTTP cookies.
- Protected routes and authorization.
- Secure file uploads with file-type and size validation.
- Environment variables are excluded from Git.

## 🚀 Deployment

JobSprint is deployed using:

- **Frontend:** Vercel
- **Backend:** Render
- **Database:** MongoDB Atlas

🌐 **Live Demo:** [Visit JobSprint](YOUR_VERCEL_URL)

## About the Author

**Md Irfan**  
Full Stack Developer | MERN Stack Developer

- LinkedIn: [Connect with me](https://www.linkedin.com/in/mdirfan2470/)
- GitHub: [Visit my GitHub](https://github.com/workmdirfan29/)

---

<p align="center">
  Made   by <strong>Md Irfan</strong>
</p>
