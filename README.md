# SubleaseU-readme

**What is SubleaseU?**
SubleaseU is an app designed to simplify the process for students to post and find sublease properties. It offers an affordable solution to expensive short-term leasing, enabling students to discover the best deals available. The app also features a messaging system, allowing students to directly contact the individuals who have created the listings for further communication.

For more details, you can check out our project proposal here attached in our repo.

**Technical Architecture**
<img width="575" alt="image" src="https://github.com/CS222-UIUC-FA23/group-project-team84/assets/66647978/2f5284a5-ec53-465c-8f62-8fa68b7b21ac">

**Reproducible Installation Instructions**
1) Create a directory and set up a virtual environment for your project.
2) Install Flask:
  ```pip install Flask```
3) Create your Flask app by creating a file called "app.py"
4) Go back to your project root and create a React app:
   ```npx create-react-app client```
5) After building your React app (```npm run build``` in the client directory), configure your Flask app to serve the build folder as static files.
6) Install MongoDB on your system and use Flask-PyMongo to connect your Flask Backend with MongoDB using ```pip install Flask-PyMongo```
7) You're ready to recreate!

**Developers**
Harshith Moningi: Worked on storing the information in the database
Isaac Exposito: Worked on both the frontend and the backend
Ishaan Bhandari: Worked on the frontend and created unit/integration tests
Murray Ahmed: Worked on the frontend

