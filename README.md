Task Manager Application
This repository contains a Full-Stack Task Manager Application built using React.js (Frontend) and Django REST Framework (Backend). The application allows users to create tasks and delete them with ease.

🚀 Getting Started
Prerequisites
Ensure you have the following installed on your system:

vite: For running the frontend.
Python 3.x: For running the backend.
npm: For managing frontend dependencies.
💻 How to Run the Application
Clone the Repository

bash
Copy code
git clone https://github.com/mohdshubair313/Shubair-Improved----Reachify-Full-Stack-Assignment-.git
cd Shubair-Improved----Reachify-Full-Stack-Assignment-
Run the Frontend

Navigate to the frontend directory:
bash
Copy code
cd frontend
Install dependencies:
bash
Copy code
npm install
Start the development server:
bash
Copy code
npm run dev
Run the Backend

Navigate to the backend directory:
bash
Copy code
cd backend
Install the required Python packages:
bash
Copy code
pip install -r requirements.txt
Start the Django server:
bash
Copy code
python manage.py runserver
Access the Application

Open your browser and navigate to http://127.0.0.1:8000 for the backend or the relevant port for the frontend as displayed in your terminal.
🛠️ Features
Add tasks with a title and description.
Delete tasks directly from the task list.
🌐 API Endpoints
The following API endpoints are available for interacting with the backend:

Method	Endpoint	Description
GET	/api/tasks/	Fetch all tasks.
POST	/api/tasks/create/	Create a new task.
DELETE	/api/tasks/<int:pk>/	Delete a task by its ID.
🔗 Live Demos
Check out some of my other projects here:

Stripe Payment Integration: [Next Stripe App](https://next-stripe-smoky.vercel.app/)
Apple Landing Page: [Apple 3D Page](https://apple3-d-page-sepia.vercel.app/)
Medium Blog Clone: [ Medium Blog](https://medium-im1o-5fbeaim3m-mohd-shubairs-projects.vercel.app/)
📂 Folder Structure
plaintext
Copy code
.
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/
│   ├── tasks/
│   ├── db.sqlite3
│   └── manage.py
└── README.md


📃 Contributing
Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request. For significant changes, please open an issue first to discuss the proposed changes.


