import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/login";
import UsersList from "./components/Users/UsersList";
import QuizList from "./components/Quizzes/QuizList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/quizzes" element={<QuizList />} />
        <Route path="/" element={<h1>Welcome to QuizHive Frontend</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
