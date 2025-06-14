# React Login & Signup Authentication App

This is a React-based authentication application that allows users to  sign up  with their full name, email, and password, and then  log in  to access a personalized home page. The app connects to a backend API to handle user authentication securely.



## Features

* User Signup with Full Name, Email, and Password
* User Login with Email and Password
* API integration to send authentication requests
* Simple and clean user interface built with React components
* Navigation between Signup, Login, and Home pages



## Project Structure

* `src/components/` — Contains React components: `Signup.js`, `Login.js`, `Home.js`, and `Header.js`
* `src/api/auth.js` — Contains functions to interact with backend API endpoints for signup and login
* `src/App.js` — Handles routing and user state management


## API Integration

The app connects to a backend API to manage user authentication.

* The API base URL is defined in `src/api/auth.js` as `API_BASE_URL`. Replace this URL with your actual backend endpoint.

* `signupUser(fullName, email, password)` sends a POST request to `${API_BASE_URL}/signup` with the user details to register a new user.

* `loginUser(email, password)` sends a POST request to `${API_BASE_URL}/login` to authenticate the user and retrieve user data.

 Important:  Make sure your backend API is running and accessible. Also, ensure that CORS settings on your backend allow requests from your React app.



## How to Run the Project Locally

1.  Clone the repository: 

   ```
   git clone https://github.com/ankitadewani14/loginpage.git
   ```

2.  Navigate to the project directory: 

   ```
   cd loginpage
   ```

3.  Install dependencies: 

   ```
   npm install
   ```

4.  Start the React development server: 

   ```
   npm start
   ```

5.  Open your browser and go to: 

   ```
   http://localhost:3000
   ```


## How to Use the App

* Go to the  Sign Up  page to create a new account by entering your full name, email, and password.
* After successful signup, you will be redirected to the  Home  page with a welcome message.
* Use the  Login  page to sign in with your registered email and password.
* On successful login, you will see a personalized welcome message with your full name.


## Notes

* Replace the `API_BASE_URL` in `src/api/auth.js` with your actual backend API URL.
* Your backend API must implement `/signup` and `/login` endpoints to handle POST requests properly.
* Make sure CORS is enabled on your backend to allow API calls from your React app.
* This project uses React Router for navigation, so ensure React Router is installed.



## Contact

Created by Ankita Dewani
https://github.com/ankitadewani14

